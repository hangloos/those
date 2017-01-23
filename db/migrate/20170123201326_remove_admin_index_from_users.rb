class RemoveAdminIndexFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_index(:users, :name => "index_users_on_admin")
  end
end
