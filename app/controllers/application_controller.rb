class ApplicationController < ActionController::Base
  

  protect_from_forgery
  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :json
  after_filter :set_csrf_cookie_for_ng

    def set_csrf_cookie_for_ng
      cookies['XSRF-TOKEN'] = form_authenticity_token if 
      protect_against_forgery?
    end

    protected

    def index

    end

    def configure_permitted_parameters
        added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
        devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
        devise_parameter_sanitizer.permit :account_update, keys: added_attrs
    end

    def verified_request?
      super || valid_authenticity_token?(session,
      request.headers['X-XSRF-TOKEN'])
    end

end
