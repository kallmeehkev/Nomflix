# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#####################        USERS         #####################################

User.destroy_all

demoUser = User.create!(email: "user@email.com", password: "password")
User.create!(email: "user2@email.com", password: "password")

#####################        PROFILES         #####################################

Profile.destroy_all

defaultProfile = Profile.create!(user_id: 1, name: "Teddy", maturity_preference: "PG")
photo1 = open('https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon1.png')
defaultProfile.photo.attach(io: photo1, filename: 'netflixProfileIcon1.png')

Profile.create!(user_id: 1, name: "Hangry")

#####################        MEDIA         #####################################

Medium.destroy_all

medium1 = Medium.create!(
    title: "Gordon Ramsay's ULTIMATE COOKERY COURSE: How to Cook the Perfect Steak", 
    duration: 150901,
description: "Gordon Ramsay's Ultimate Cookery Course is about giving home cooks the desire, confidence and inspiration to hit the stoves and get cooking, with over 120 modern, simple and accessible recipes. The ultimate reference bible, it's a lifetime's worth of expertise from one of the world's finest chefs distilled into a beautiful book."
)
media_file1 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Gordon+Ramsays+ULTIMATE+COOKERY+COURSE+How+to+Cook+the+Perfect+Steak.mp4"    
)
thumbnail_file1 = open(
    "https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/2.jpg"
    )
medium1.media_file.attach(io: media_file1, filename: "Gordon Ramsay's ULTIMATE COOKERY COURSE: How to Cook the Perfect Steak.mp4")
medium1.thumbnail.attach(io: thumbnail_file1, filename: "2.jpg")


medium2 = Medium.create!(
    title: "$2 Bacon Vs. $100 Bacon", 
    duration: 761861,
    description: "Food lovers Steven Lim and Andrew, along with their cameraman Adam, embark on the ultimate food adventure in BuzzFeed’s hit series, Worth It, trying delicious foods at three price points: affordable, middle tier, and luxury. At the end of the episode, the gang decides which item is the most “worth it” at its given price."
    )
media_file2 = open(
'https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/%242+Bacon+Vs.+%24100+Bacon.mp4'
)
thumbnail_file2 = open(
'https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/3.jpg'
)
medium2.media_file.attach(io: media_file2, filename: '$2 Bacon Vs. $100 Bacon.mp4')
medium2.thumbnail.attach(io: thumbnail_file2, filename: '3.jpg')


medium2 = Medium.create!(
    title: "$2 Bacon Vs. $100 Bacon", 
    duration: 761861,
    description: "Food lovers Steven Lim and Andrew, along with their cameraman Adam, embark on the ultimate food adventure in BuzzFeed’s hit series, Worth It, trying delicious foods at three price points: affordable, middle tier, and luxury. At the end of the episode, the gang decides which item is the most “worth it” at its given price."
    )
media_file2 = open(
'https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/%242+Bacon+Vs.+%24100+Bacon.mp4'
)
thumbnail_file2 = open(
'https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/3.jpg'
)
medium2.media_file.attach(io: media_file2, filename: '$2 Bacon Vs. $100 Bacon.mp4')
medium2.thumbnail.attach(io: thumbnail_file2, filename: '3.jpg')



