class ApplicationController < ActionController::Base
  #We depend on our auth_token module here
  #require 'auth_token'

  protect_from_forgery with: :exception
   before_action :configure_permitted_parameters, if: :devise_controller?
   respond_to :json

    protected

    def index

    end

    def configure_permitted_parameters
        added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
        devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
        devise_parameter_sanitizer.permit :account_update, keys: added_attrs
    end

#     def verify_jwt_token
#       head :unauthorized if request.headers['Authorization'].nil? ||
#       !AuthToken.valid?(request.headers)['Authorization'].split(' ').last
#     end
end
