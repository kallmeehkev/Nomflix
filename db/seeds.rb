# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(email: "user@email.com", password: "password")
User.create(email: "user2@email.com", password: "password")
Profile.create(user_id: 1, name: "Teddy", maturity_preference: "PG")
Profile.create(user_id: 1, name: "Hangry")
