# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


List.create(user_id: 1)
User.create(username: "mollyellis", email: "mollyellis5@gmail.com", password: "indiana10", role: "admin")
Review.create(user_id: 2)
List.create(user_id: 2)
Review.create(user_id: 1)