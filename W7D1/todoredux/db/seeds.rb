# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all

a = Todo.create(title: "eat food", body: "nom nom", done: false)
b = Todo.create(title: "leave aA", body: "get out", done: true)
c = Todo.create(title: "sleep", body: "get beauty rest", done: true)
