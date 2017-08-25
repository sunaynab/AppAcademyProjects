# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u1 = User.create(user_name: 'Cat fan', password: 'ilikecats')


colors = %w(black white orange brown)
sexes = %w(M F)


Cat.destroy_all
c1 = Cat.create(birth_date: Faker::Date.birthday,
  color: colors.sample,
  name: Faker::Cat.name,
  sex: sexes.sample,
  description: Faker::Lorem.sentence)

c2 = Cat.create(birth_date: Faker::Date.birthday,
color: colors.sample,
name: Faker::Cat.name,
sex: sexes.sample,
description: Faker::Lorem.sentence)
c3 = Cat.create(birth_date: Faker::Date.birthday,
color: colors.sample,
name: Faker::Cat.name,
sex: sexes.sample,
description: Faker::Lorem.sentence)
c4 = Cat.create(birth_date: Faker::Date.birthday,
color: colors.sample,
name: Faker::Cat.name,
sex: sexes.sample,
description: Faker::Lorem.sentence)
c5 = Cat.create(birth_date: Faker::Date.birthday,
color: colors.sample,
name: Faker::Cat.name,
sex: sexes.sample,
description: Faker::Lorem.sentence)
