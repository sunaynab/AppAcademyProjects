# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tweet.destroy_all

CATS = %w(breakfast earl curie markov gizmo kiki sally)

CATS.each do |cat|
  u = User.create!(username: cat, password: "#{cat}#{cat}")
end

MESSAGES = [
  'Tunafish live in the Atlantic Ocean only.',
  'A year is the duration of the earth\'s revolution around the sun.',
  'A bouncing ball will bounce forever on the moon because there is no gravity.',
  'A foot is 12 inches.',
  'A salamander is the only animal that does not sleep.',
  'There is only one ocean on planet earth.',
  'Mice are a distant cousin of the cockroach.',
  'The novel \'Moby Dick\' was written by Herman Melville.',
  "The novel 'Fahrenheit 451' was written by William Shakespeare.",
  'Air is composed of mostly nitrogen.',
  'Nitrogen is composed of mostly water.',
  'Humans cannot survive without water.'
]

User.all.each do |user|
  40.times do
    msg = MESSAGES.sample
    Tweet.create!(user_id: user.id, content: msg, created_at: rand(3000).days.ago)
  end
end
