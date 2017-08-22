# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(username: Faker::Internet.user_name)
u2 = User.create(username: Faker::Internet.user_name)
u3 = User.create(username: Faker::Internet.user_name)
u4 = User.create(username: Faker::Internet.user_name)

a1 = Artwork.create(image_url: Faker::Internet.url, artist_id: 2, title: Faker::HarryPotter.location)
a2 = Artwork.create(image_url: Faker::Internet.url, artist_id: 3, title: Faker::HarryPotter.location)
a3 = Artwork.create(image_url: Faker::Internet.url, artist_id: 2, title: Faker::HarryPotter.location)
a4 = Artwork.create(image_url: Faker::Internet.url, artist_id: 2, title: Faker::HarryPotter.location)

as1 = ArtworkShare.create(artwork_id: 1, viewer_id: 1)
as2 = ArtworkShare.create(artwork_id: 1, viewer_id: 3)
as3 = ArtworkShare.create(artwork_id: 1, viewer_id: 4)
as4 = ArtworkShare.create(artwork_id: 2, viewer_id: 2)
as5 = ArtworkShare.create(artwork_id: 3, viewer_id: 4)
