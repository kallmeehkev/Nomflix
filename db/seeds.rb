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

medium_file2 = Medium.create!(
    title: "Gordon Ramsay's ULTIMATE COOKERY COURSE: How to Cook the Perfect Steak", 
    duration: 150901,
description: "Gordon Ramsay's Ultimate Cookery Course is about giving home cooks the desire, confidence and inspiration to hit the stoves and get cooking, with over 120 modern, simple and accessible recipes. The ultimate reference bible, it's a lifetime's worth of expertise from one of the world's finest chefs distilled into a beautiful book."
)
media_file2 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Gordon+Ramsays+ULTIMATE+COOKERY+COURSE+How+to+Cook+the+Perfect+Steak.mp4"    
)
thumbnail_file2 = open(
    "https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/2.jpg"
    )
medium_file2.media_file.attach(io: media_file2, filename: "Gordon Ramsay's ULTIMATE COOKERY COURSE: How to Cook the Perfect Steak.mp4")
medium_file2.thumbnail.attach(io: thumbnail_file2, filename: "2.jpg")


medium_file3 = Medium.create!(
    title: "$2 Bacon Vs. $100 Bacon", 
    duration: 761861,
    description: "Food lovers Steven Lim and Andrew, along with their cameraman Adam, embark on the ultimate food adventure in BuzzFeed’s hit series, Worth It, trying delicious foods at three price points: affordable, middle tier, and luxury. At the end of the episode, the gang decides which item is the most “worth it” at its given price."
    )
media_file3 = open(
'https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/%242+Bacon+Vs.+%24100+Bacon.mp4'
)
thumbnail_file3 = open(
'https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/3.jpg'
)
medium_file3.media_file.attach(io: media_file3, filename: "$2 Bacon Vs. $100 Bacon.mp4")
medium_file3.thumbnail.attach(io: thumbnail_file3, filename: "3.jpg")


medium_file4 = Medium.create!(
    title: "Egg-Fried Rice Noodles with Chicken - Gordon Ramsay", 
    duration: 297341,
    description: "Tenderising chicken breast and cooking it very fast means that it stays moist - perfect for this dish. This recipe cooks literally cooks in minutes - a healthy, affordable and fast weekday meal with simple flavours."
    )
media_file4 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Egg-Fried+Rice+Noodles+with+Chicken+-+Gordon+Ramsay.mp4"
)
thumbnail_file4 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/4.jpg"
)
medium_file4.media_file.attach(io: media_file4, filename: "Egg-Fried Rice Noodles with Chicken - Gordon Ramsay.mp4")
medium_file4.thumbnail.attach(io: thumbnail_file4, filename: "4.jpg")


medium_file5 = Medium.create!(
    title: "CHRISTMAS RECIPE: Christmas Beef Wellington - Gordon Ramsay", 
    duration: 470661,
    description: "A Christmas take on a classic dish."
    )
media_file5 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/CHRISTMAS+RECIPE+Christmas+Beef+Wellington.mp4"
)
thumbnail_file5 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/5.jpg"
)
medium_file5.media_file.attach(io: media_file5, filename: "CHRISTMAS RECIPE: Christmas Beef Wellington - Gordon Ramsay.mp4")
medium_file5.thumbnail.attach(io: thumbnail_file5, filename: "5.jpg")


medium_file6 = Medium.create!(
    title: "$220 Kobe Beef Lunch - Kyoto - Teppanyaki in Japan", 
    duration: 1470421,
    description: "Luxury lunch in Kyoto, Japan's old capital, including shrimp, vegetables, Kobe beef, fried garlic rice, miso soup, vanilla ice, cake and coffee"
    )
media_file6 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/%24220+Kobe+Beef+Lunch+-+Kyoto+-+Teppanyaki+in+Japan.mp4"
)
thumbnail_file6 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/6.jpg"
)
medium_file6.media_file.attach(io: media_file6, filename: "$220 Kobe Beef Lunch - Kyoto - Teppanyaki in Japan.mp4")
medium_file6.thumbnail.attach(io: thumbnail_file6, filename: "6.jpg")


medium_file7 = Medium.create!(
    title: "I Went To Japan To Make The Most Difficult Omelet", 
    duration: 873861,
    description: "Omurice is a fluffy egg omelet upside down served on top of fried rice. Chef Motokichi Yukimura"
    )
media_file7 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/I+Went+To+Japan+To+Make+The+Most+Difficult+Omelet.mp4"
)
thumbnail_file7 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/7.jpg"
)
medium_file7.media_file.attach(io: media_file7, filename: "I Went To Japan To Make The Most Difficult Omelet.mp4")
medium_file7.thumbnail.attach(io: thumbnail_file7, filename: "7.jpg")


medium_file8 = Medium.create!(
    title: "TMAGOYAKI Bread", 
    duration: 684141,
    description: "JAPANESE OMELETTE Sandwich | Japan Street food | Nishiki Market Kyoto"
    )
media_file8 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/TMAGOYAKI+Bread++JAPANESE+OMELETTE+Sandwich++Japan+Street+food++Nishiki+Market+Kyoto.mp4"
)
thumbnail_file8 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/8.jpg"
)
medium_file8.media_file.attach(io: media_file8, filename: "TMAGOYAKI Bread.mp4")
medium_file8.thumbnail.attach(io: thumbnail_file8, filename: "8.jpg")


medium_file9 = Medium.create!(
    title: "The Ultimate BWW Blazing Wings Challenge", 
    duration: 680781,
    description: "Finally doing another Spicy Challenge!! As expected, it hurt like hell."
    )
media_file9 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/The+Ultimate+BWW+Blazing+Wings+Challenge.mp4"
)
thumbnail_file9 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/9.jpg"
)
medium_file9.media_file.attach(io: media_file9, filename: "The Ultimate BWW Blazing Wings Challenge.mp4")
medium_file9.thumbnail.attach(io: thumbnail_file9, filename: "9.jpg")


medium_file10 = Medium.create!(
    title: "Extreme Korean Fire Noodle Challenge! (1,000,000 Subscriber Special)", 
    duration: 691721,
    description: "Because you guys have been so good to me, it's time to take one for the team.. The Korean Fire Noodle Challenge has made it's way around YouTube, so Morgan and I decided to take on that challenge and amp it up!"
    )
media_file10 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/%EA%B7%B9%EB%8B%A8%EC%A0%81+%EC%9D%B8+%EB%B6%88%EB%8B%AD+%EB%B3%B6%EC%9D%8C%EB%A9%B4+%EB%8F%84%EC%A0%84!++Extreme+Korean+Fire+Noodle+Challenge!+(1000000+Subscriber+Special).mp4"
)
thumbnail_file10 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/10.jpg"
)
medium_file10.media_file.attach(io: media_file10, filename: "Extreme Korean Fire Noodle Challenge! (1,000,000 Subscriber Special).mp4")
medium_file10.thumbnail.attach(io: thumbnail_file10, filename: "10.jpg")


medium_file11 = Medium.create!(
    title: "Massive Cookie Bowl w/ Ice Cream (23,000+ Cals) | Matt Stonie", 
    duration: 688681,
    description: "Basically the best bowl of ice cream you'll ever see. Ever. Do not try this at home, the flipping of the bowl might squash a bystander."
    )
media_file11 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Massive+Cookie+Bowl+w+Ice+Cream+(23000++Cals)++Matt+Stonie.mp4"
)
thumbnail_file11 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/11.jpg"
)
medium_file11.media_file.attach(io: media_file11, filename: "Massive Cookie Bowl w/ Ice Cream (23,000+ Cals) | Matt Stonie.mp4")
medium_file11.thumbnail.attach(io: thumbnail_file11, filename: "11.jpg")


medium_file12 = Medium.create!(
    title: "Alton Brown Rigorously Reviews Spicy Wings | Hot Ones", 
    duration: 1469821,
    description: "Alton Brown is a food-TV trailblazer, award-winning author, and all-around culinary powerhouse. But how is he with hot food? Find out as the Iron Chef America host sits down for his date with Sean Evans and the wings of death. As he meticulously reorders the hot sauces according to his own ranking, Alton tackles everything from the history of food television, to Eminem lyrics, to the art of sabering a bottle of champagne. Do you agree with his pick for the best food movie of all time? Find out in this episode with one of most insightful voices in food."
    )
media_file12 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Alton+Brown+Rigorously+Reviews+Spicy+Wings++Hot+Ones.mp4"
)
thumbnail_file12 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/12.jpg"
)
medium_file12.media_file.attach(io: media_file12, filename: "Alton Brown Rigorously Reviews Spicy Wings | Hot Ones.mp4")
medium_file12.thumbnail.attach(io: thumbnail_file12, filename: "12.jpg")


medium_file13 = Medium.create!(
    title: "Terry Crews Hallucinates While Eating Spicy Wings | Hot Ones", 
    duration: 1313801,
    description: "Terry Crews has more strength in one bicep than most humans have in their entire being. But how is he with spicy food? Find out as the Brooklyn Nine-Nine star enters the Hot Ones terrordome and goes beastmode on the wings of death. As he tackles sauce after sauce with Sean Evans, Crews opens up about everything from his relationship with his father, to his difficult experience in the NFL."
    )
media_file13 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Terry+Crews+Hallucinates+While+Eating+Spicy+Wings++Hot+Ones.mp4"
)
thumbnail_file13 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/13.jpg"
)
medium_file13.media_file.attach(io: media_file13, filename: "Terry Crews Hallucinates While Eating Spicy Wings | Hot Ones.mp4")
medium_file13.thumbnail.attach(io: thumbnail_file13, filename: "13.jpg")


medium_file14 = Medium.create!(
    title: "Kevin Durant Sweats It Out Over Spicy Wings | Hot Ones", 
    duration: 1100221,
    description: "Last week, Kevin Durant invited Sean Evans to the YouTube Space in L.A. for a special livestream featuring some of his favorite YT creators. For those who missed it or want to relive the action, here's our version of the Hot Ones interview—now with more bomb drops! As he marches through the wings of death, KD opens up about his rap dreams, Twitter clapbacks, and the one NBA player he'll never take style advise from."
    )
media_file14 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Kevin+Durant+Sweats+It+Out+Over+Spicy+Wings++Hot+Ones.mp4"
)
thumbnail_file14 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/14.jpg"
)
medium_file14.media_file.attach(io: media_file14, filename: "Kevin Durant Sweats It Out Over Spicy Wings | Hot Ones.mp4")
medium_file14.thumbnail.attach(io: thumbnail_file14, filename: "14.jpg")


medium_file15 = Medium.create!(
    title: "The real Kawhi Leonard | How Hungry Are You?", 
    duration: 1297361,
    description: "The day has finally arrived. The 'How Hungry Are You' Season Finale with none other than Kawhi Leonard. Find out who the real Kawhi is... and what he is willing to eat!"
    )
media_file15 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/The+real+Kawhi+Leonard++How+Hungry+Are+You.mp4"
)
thumbnail_file15 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/15.jpg"
)
medium_file15.media_file.attach(io: media_file15, filename: "The real Kawhi Leonard | How Hungry Are You?.mp4")
medium_file15.thumbnail.attach(io: thumbnail_file15, filename: "15.jpg")


medium_file16 = Medium.create!(
    title: "Marc and Pau Gasol show up together | How Hungry Are You?", 
    duration: 789781,
    description: "On the Season 2 premiere of 'How Hungry are you?', I invited my new teammate on the Toronto Raptors, Marc Gasol. We go way back, so Marc felt comfortable bringing his big brother: Pau Gasol."
    )
media_file16 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Marc+and+Pau+Gasol+show+up+together++How+Hungry+Are+You.mp4"
)
thumbnail_file16 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/16.jpg"
)
medium_file16.media_file.attach(io: media_file16, filename: "Marc and Pau Gasol show up together | How Hungry Are You?.mp4")
medium_file16.thumbnail.attach(io: thumbnail_file16, filename: "16.jpg")



medium_file17 = Medium.create!(
    title: "How to Make Ebi Fry (Deep Fried Breaded Prawn Recipe) | Cooking with Dog", 
    duration: 488361,
    description: "The crispy outside and chewy inside make the Ebi Fry more delicious!"
    )
media_file17 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Ebi+Fry+(Deep+Fried+Breaded+Prawn+Recipe)++Cooking+with+Dog.mp4"
)
thumbnail_file17 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/17.jpg"
)
medium_file17.media_file.attach(io: media_file17, filename: "How to Make Ebi Fry (Deep Fried Breaded Prawn Recipe) | Cooking with Dog.mp4")
medium_file17.thumbnail.attach(io: thumbnail_file17, filename: "17.jpg")


medium_file18 = Medium.create!(
    title: "How to Make Yakibuta Ramen Noodles (Roasted Pork Ramen Recipe) | Cooking with Dog", 
    duration: 366801,
    description: "We are making Ramen with tender pork belly and savory soup. This is one of the most complicated recipes but the combination of the tender pork belly and savory broth is absolutely delicious!"
    )
media_file18 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Yakibuta+Ramen+Noodles+(Roasted+Pork+Ramen+Recipe)++Cooking+with+Dog.mp4"
)
thumbnail_file18 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/18.jpg"
)
medium_file18.media_file.attach(io: media_file18, filename: "How to Make Yakibuta Ramen Noodles (Roasted Pork Ramen Recipe) | Cooking with Dog.mp4")
medium_file18.thumbnail.attach(io: thumbnail_file18, filename: "18.jpg")


medium_file19 = Medium.create!(
    title: "How to Make Mapo Tofu (Mabo Dofu Recipe) | Cooking with Dog", 
    duration: 355381,
    description: "Mapo Tofu is a Chinese dish but it is also very popular in Japan. The dish goes great with steamed rice!"
    )
media_file19 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Mapo+Tofu+(Mabo+Dofu+Recipe)++Cooking+with+Dog.mp4"
)
thumbnail_file19 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/19.jpg"
)
medium_file19.media_file.attach(io: media_file19, filename: "How to Make Mapo Tofu (Mabo Dofu Recipe) | Cooking with Dog.mp4")
medium_file19.thumbnail.attach(io: thumbnail_file19, filename: "19.jpg")


medium_file20 = Medium.create!(
    title: "How to Make Takoyaki", 
    duration: 299141,
    description: "Japanese Octopus Ball Recipe"
    )
media_file20 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Takoyaki+(Japanese+Octopus+Ball+Recipe+)+%E3%81%9F%E3%81%93%E7%84%BC%E3%81%8D+%E4%BD%9C%E3%82%8A%E6%96%B9%E3%83%AC%E3%82%B7%E3%83%94.mp4"
)
thumbnail_file20 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/20.jpg"
)
medium_file20.media_file.attach(io: media_file20, filename: "How to Make Takoyaki.mp4")
medium_file20.thumbnail.attach(io: thumbnail_file20, filename: "20.jpg")


medium_file21 = Medium.create!(
    title: "How to Make Skewered Tofu Dango (Japanese Sweet Dumpling Recipe) | Cooking with Dog", 
    duration: 182810,
    description: "We making three types of Tofu Dango, Japanese sweet dumplings. Enjoy one of the healthiest Japanese sweets with soybean flour, black sesame seeds and sweet soy sauce."
    )
media_file21 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Skewered+Tofu+Dango+(Japanese+Sweet+Dumpling+Recipe)++Cooking+with+Dog.mp4"
)
thumbnail_file21 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/21.jpg"
)
medium_file21.media_file.attach(io: media_file21, filename: "How to Make Skewered Tofu Dango (Japanese Sweet Dumpling Recipe) | Cooking with Dog.mp4")
medium_file21.thumbnail.attach(io: thumbnail_file21, filename: "21.jpg")


medium_file22 = Medium.create!(
    title: "Menchi-katsu Recipe (Deep-Fried Breaded Ground Meat) | Cooking with Dog", 
    duration: 364641,
    description: "Let’s grind sliced meat to make Menchi-katsu, deep-fried breaded ground meat. Fresh and crispy Menchi-katsu with homemade ground meat is absolutely delicious!"
    )
media_file22 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Menchi-katsu+Recipe+(Deep-Fried+Breaded+Ground+Meat)++Cooking+with+Dog.mp4"
)
thumbnail_file22 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/22.jpg"
)
medium_file22.media_file.attach(io: media_file22, filename: "Menchi-katsu Recipe (Deep-Fried Breaded Ground Meat) | Cooking with Dog.mp4")
medium_file22.thumbnail.attach(io: thumbnail_file22, filename: "22.jpg")


medium_file23 = Medium.create!(
    title: "How to Make Fruit Cream Anmitsu (Recipe)", 
    duration: 347681,
    description: "Ingredients for Fruit Cream Anmitsu (serves 3)"
    )
media_file23 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Fruit+Cream+Anmitsu+(Recipe)+%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0%E3%81%82%E3%82%93%E3%81%BF%E3%81%A4+%E4%BD%9C%E3%82%8A%E6%96%B9%E3%83%AC%E3%82%B7%E3%83%94.mp4"
)
thumbnail_file23 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/23.jpg"
)
medium_file23.media_file.attach(io: media_file23, filename: "How to Make Fruit Cream Anmitsu (Recipe).mp4")
medium_file23.thumbnail.attach(io: thumbnail_file23, filename: "23.jpg")


medium_file24 = Medium.create!(
    title: "How to Make Strawberry Daifuku (Ichigo Daifuku Recipe)", 
    duration: 216261,
    description: "Ingredients for Ichigo Daifuku (6 pieces)"
    )
media_file24 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Strawberry+Daifuku+(Ichigo+Daifuku+Recipe)+%E3%81%84%E3%81%A1%E3%81%94%E5%A4%A7%E7%A6%8F+%E4%BD%9C%E3%82%8A%E6%96%B9%E3%83%AC%E3%82%B7%E3%83%94.mp4"
)
thumbnail_file24 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/24.jpg"
)
medium_file24.media_file.attach(io: media_file24, filename: "How to Make Strawberry Daifuku (Ichigo Daifuku Recipe).mp4")
medium_file24.thumbnail.attach(io: thumbnail_file24, filename: "24.jpg")


medium_file25 = Medium.create!(
    title: "How to Make Christmas Cake (Strawberry Sponge Cake Recipe) | Cooking with Dog", 
    duration: 599181,
    description: "This Japanese Christmas Cake is a fluffy sponge cake decorated with a generous amount of strawberries and whipped cream. Try this recipe at Christmas time. It’s a real treat for the kids!"
    )
media_file25 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Christmas+Cake+(Strawberry+Sponge+Cake+Recipe)++Cooking+with+Dog.mp4"
)
thumbnail_file25 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/25.jpg"
)
medium_file25.media_file.attach(io: media_file25, filename: "How to Make Christmas Cake (Strawberry Sponge Cake Recipe) | Cooking with Dog.mp4")
medium_file25.thumbnail.attach(io: thumbnail_file25, filename: "25.jpg")


medium_file26 = Medium.create!(
    title: "How to Make Bento (Perfectly Balanced Bento Recipe for Lunch Box Meal) | Cooking with Dog", 
    duration: 391401,
    description: "We are making well-balanced Bento using a cute bento box. Bento regained its popularity in Japan for its safe and balanced diet and many Japanese bring their own bento to school and work."
    )
media_file26 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Bento+(Perfectly+Balanced+Bento+Recipe+for+Lunch+Box+Meal)++Cooking+with+Dog.mp4"
)
thumbnail_file26 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/26.jpg"
)
medium_file26.media_file.attach(io: media_file26, filename: "How to Make Bento (Perfectly Balanced Bento Recipe for Lunch Box Meal) | Cooking with Dog.mp4")
medium_file26.thumbnail.attach(io: thumbnail_file26, filename: "26.jpg")


medium_file27 = Medium.create!(
    title: "How to Make Custard Pudding (Easy Custard Pudding Recipe | Egg Pudding) | Cooking with Dog", 
    duration: 294461,
    description: "This scrumptious Custard Pudding is made from simple ingredients, eggs, sugar and milk. Chill it well to enjoy the pudding."
    )
media_file27 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/How+to+Make+Custard+Pudding+(Easy+Custard+Pudding+Recipe++Egg+Pudding)++Cooking+with+Dog.mp4"
)
thumbnail_file27 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/27.jpg"
)
medium_file27.media_file.attach(io: media_file27, filename: "How to Make Custard Pudding (Easy Custard Pudding Recipe | Egg Pudding) | Cooking with Dog.mp4")
medium_file27.thumbnail.attach(io: thumbnail_file27, filename: "27.jpg")


medium_file28 = Medium.create!(
    title: "Japanese Soufflé Cheesecake Recipe (Fluffy and Moist Cotton Cheesecake) | Cooking with Dog", 
    duration: 441641,
    description: "This fluffy and moist Cheesecake using meringue is very popular in Japan. Cheese lovers should definitely try this recipe!"
    )
media_file28 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Japanese+Souffl%C3%A9+Cheesecake+Recipe+(Fluffy+and+Moist+Cotton+Cheesecake)++Cooking+with+Dog.mp4"
)
thumbnail_file28 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/28.jpg"
)
medium_file28.media_file.attach(io: media_file28, filename: "Japanese Soufflé Cheesecake Recipe (Fluffy and Moist Cotton Cheesecake) | Cooking with Dog.mp4")
medium_file28.thumbnail.attach(io: thumbnail_file28, filename: "28.jpg")


medium_file29 = Medium.create!(
    title: "Oyakodon Recipe (Chicken and Egg Bowl) | Cooking with Dog", 
    duration: 225821,
    description: "This quick and easy delicious Oyakodon is a slightly different version of our previous Oyakodon. The soft and silky egg is very delicious. The egg yolk makes it even smoother."
    )
media_file29 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Oyakodon+Recipe+(Chicken+and+Egg+Bowl)++Cooking+with+Dog.mp4"
)
thumbnail_file29 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/29.jpg"
)
medium_file29.media_file.attach(io: media_file29, filename: "Oyakodon Recipe (Chicken and Egg Bowl) | Cooking with Dog.mp4")
medium_file29.thumbnail.attach(io: thumbnail_file29, filename: "29.jpg")


medium_file30 = Medium.create!(
    title: "Kobe Beef A5 - $3000 Best Quality WAGYU KOBE BEEF RIBEYE from Japan with Wagyu Mafia!", 
    duration: 1047781,
    description: "Best of the best Kobe beef A5 ribeye from Japan!"
    )
media_file30 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Kobe+Beef+A5+-+%243000+Best+Quality+WAGYU+KOBE+BEEF+RIBEYE+from+Japan+with+Wagyu+Mafia!.mp4"
)
thumbnail_file30 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/30.jpg"
)
medium_file30.media_file.attach(io: media_file30, filename: "Kobe Beef A5 - $3000 Best Quality WAGYU KOBE BEEF RIBEYE from Japan with Wagyu Mafia!.mp4")
medium_file30.thumbnail.attach(io: thumbnail_file30, filename: "30.jpg")


medium_file31 = Medium.create!(
    title: "Extreme Chinese Street Food - JACUZZI CHICKEN and Market Tour in Kunming! | Yunnan, China Day 4", 
    duration: 1774581,
    description: "Kunming, Yunnan, China - Kunming is the capital and largest city in Yunnan province China. So I was excited to explore the local market in Kunming and eat as much street food as possible!"
    )
media_file31 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Extreme+Chinese+Street+Food+-+JACUZZI+CHICKEN+and+Market+Tour+in+Kunming!++Yunnan+China+Day+4.mp4"
)
thumbnail_file31 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/31.jpg"
)
medium_file31.media_file.attach(io: media_file31, filename: "Extreme Chinese Street Food - JACUZZI CHICKEN and Market Tour in Kunming! | Yunnan, China Day 4.mp4")
medium_file31.thumbnail.attach(io: thumbnail_file31, filename: "31.jpg")


medium_file32 = Medium.create!(
    title: "Best Sushi in Japan - Tsukiji Fish Market to $300 HIGH-END SUSHI in Tokyo! | Japanese Food", 
    duration: 1759621,
    description: "For this Japanese food and sushi tour, I was on the Best of Tokyo Food Tour with David from The Hungry Tourist. His tours are one of a kind and focus on deep high end food!"
    )
media_file32 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Best+Sushi+in+Japan+-+Tsukiji+Fish+Market+to+%24300+HIGH-END+SUSHI+in+Tokyo!++Japanese+Food.mp4"
)
thumbnail_file32 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/32.jpg"
)
medium_file32.media_file.attach(io: media_file32, filename: "Best Sushi in Japan - Tsukiji Fish Market to $300 HIGH-END SUSHI in Tokyo! | Japanese Food.mp4")
medium_file32.thumbnail.attach(io: thumbnail_file32, filename: "32.jpg")


medium_file33 = Medium.create!(
    title: "THE SPICIEST RAMEN in Tokyo at Karashibi Kikanbo - DEVIL LEVEL Japanese Food!", 
    duration: 641661,
    description: "Karashibi Miso Ramen Kikanbo is known for serving the spiciest bowl of ramen you can eat in Tokyo, Japan, and not only is it insanely spicy, you’ll also find that it’s one of the most flavorful bowls of ramen you’ll ever eat as well."
    )
media_file33 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/THE+SPICIEST+RAMEN+in+Tokyo+at+Karashibi+Kikanbo+-+DEVIL+LEVEL+Japanese+Food!.mp4"
)
thumbnail_file33 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/33.jpg"
)
medium_file33.media_file.attach(io: media_file33, filename: "THE SPICIEST RAMEN in Tokyo at Karashibi Kikanbo - DEVIL LEVEL Japanese Food!.mp4")
medium_file33.thumbnail.attach(io: thumbnail_file33, filename: "33.jpg")


medium_file34 = Medium.create!(
    title: "Ethiopian Food - The ONE DISH You Have To Eat in ETHIOPIA!", 
    duration: 1212461,
    description: "What is doro wat? Doro means chicken and wat means stew - so it’s an Ethiopian chicken stew. It’s a very special dish to eat in Ethiopia, not an everyday food because it takes so much time to prepare properly. As many Ethiopians told me, it’s a dish they often eat when family comes together, and during special holidays and religious days."
    )
media_file34 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Ethiopian+Food+-+The+ONE+DISH+You+Have+To+Eat+in+ETHIOPIA!.mp4"
)
thumbnail_file34 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/34.jpg"
)
medium_file34.media_file.attach(io: media_file34, filename: "Ethiopian Food - The ONE DISH You Have To Eat in ETHIOPIA!.mp4")
medium_file34.thumbnail.attach(io: thumbnail_file34, filename: "34.jpg")


medium_file35 = Medium.create!(
    title: "CRAZY SPICY Indonesian Food - Day Trip and Waterfall Adventure in Lombok, Indonesia!", 
    duration: 1319781,
    description: "Inaq Dellah - This is the original restaurant in Lombok to eat Ayam Rarang, what I found out is one of the greatest stews I think I’ve ever had in my life. It’s basically just a pure chili stew, made with chicken. It’s so unbelievably flavor and packed with Lombok chili spice."
    )
media_file35 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/CRAZY+SPICY+Indonesian+Food+-+Day+Trip+and+Waterfall+Adventure+in+Lombok+Indonesia!.mp4"
)
thumbnail_file35 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/35.jpg"
)
medium_file35.media_file.attach(io: media_file35, filename: "CRAZY SPICY Indonesian Food - Day Trip and Waterfall Adventure in Lombok, Indonesia!.mp4")
medium_file35.thumbnail.attach(io: thumbnail_file35, filename: "35.jpg")


medium_file36 = Medium.create!(
    title: "5KG MEXICAN TOMAHAWK STEAK CHALLENGE!!! [15000kcal] [CC Available]|Yuka [Oogui]", 
    duration: 542421,
    description: "Hello, my name is Kinoshita Yuka ! I love eating. OoGui (eating a lot) is my channel's main focus. I often do a social eating live (Mukbang) Today, i visited Mi Familia ( famous mexican restaurant ) and i ate Tomahawk Steak (a beef steak from the rib section."
    )
media_file36 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/%E3%80%90MUKBANG%E3%80%91+5KG+MEXICAN+TOMAHAWK+STEAK+CHALLENGE!!!+%5B15000kcal%5D+%5BCC+Available%5DYuka+%5BOogui%5D.mp4"
)
thumbnail_file36 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/36.jpg"
)
medium_file36.media_file.attach(io: media_file36, filename: "5KG MEXICAN TOMAHAWK STEAK CHALLENGE!!! [15000kcal] [CC Available]|Yuka [Oogui].mp4")
medium_file36.thumbnail.attach(io: thumbnail_file36, filename: "36.jpg")


medium_file37 = Medium.create!(
    title: "Kinoshita Yuka [OoGui Eater] 4 Burgers With 10 Meat Patties From Lotteria", 
    duration: 357621,
    description: "What is the biggest burger you've ever had? Do you even like hamburgers?"
    )
media_file37 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Kinoshita+Yuka+%5BOoGui+Eater%5D+4+Burgers+With+10+Meat+Patties+From+Lotteria.mp4"
)
thumbnail_file37 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/37.jpg"
)
medium_file37.media_file.attach(io: media_file37, filename: "Kinoshita Yuka [OoGui Eater] 4 Burgers With 10 Meat Patties From Lotteria.mp4")
medium_file37.thumbnail.attach(io: thumbnail_file37, filename: "37.jpg")


medium_file38 = Medium.create!(
    title: "Kinoshita Yuka [OoGui Eater] ３Kg of Mega Giga Pudding", 
    duration: 355241,
    description: "Kinoshita Yuka does another food eating challenge with 3kg of pudding"
    )
media_file38 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Kinoshita+Yuka+%5BOoGui+Eater%5D+%EF%BC%93Kg+of+Mega+Giga+Pudding.mp4"
)
thumbnail_file38 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/38.jpg"
)
medium_file38.media_file.attach(io: media_file38, filename: "Kinoshita Yuka [OoGui Eater] ３Kg of Mega Giga Pudding.mp4")
medium_file38.thumbnail.attach(io: thumbnail_file38, filename: "38.jpg")


medium_file39 = Medium.create!(
    title: "SPICY Sichuan Chinese Food & GIANT SESAME BALL in Tokyo Japan", 
    duration: 774841,
    description: "I found this delicious Sichuan restaurant in Japan, and it completely blew my mind away how amazing this place was!!! This is one of my favorite Sichuan restaurants I have ever eaten. Definitely check this place out if you're ever in Japan."
    )
media_file39 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/SPICY+Sichuan+Chinese+Food++GIANT+SESAME+BALL+in+Tokyo+Japan.mp4"
)
thumbnail_file39 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/39.jpg"
)
medium_file39.media_file.attach(io: media_file39, filename: "SPICY Sichuan Chinese Food & GIANT SESAME BALL in Tokyo Japan.mp4")
medium_file39.thumbnail.attach(io: thumbnail_file39, filename: "39.jpg")


medium_file40 = Medium.create!(
    title: "The MASSIVE Pho Noodle Soup Challenge!!!", 
    duration: 846341,
    description: "In this video I take on a MASSIVE GIANT bowl of Vietnamese pho noodle soup! This bowl of soup is INSANELY huge and I have to finish it all in this food challenge. Mukbang to the extream."
    )
media_file40 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/The+MASSIVE+Pho+Noodle+Soup+Challenge!!!.mp4"
)
thumbnail_file40 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/40.jpg"
)
medium_file40.media_file.attach(io: media_file40, filename: "The MASSIVE Pho Noodle Soup Challenge!!!.mp4")
medium_file40.thumbnail.attach(io: thumbnail_file40, filename: "40.jpg")


medium_file41 = Medium.create!(
    title: "PERFECT Ramen Noodles in Osaka Japan: Ichiran Ramen", 
    duration: 519781,
    description: "This is a BOLD claim I know, but I haven't been able to stop thinking about this place since I came back from Osaka, Japan."
    )
media_file41 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/PERFECT+Ramen+Noodles+in+Osaka+Japan+Ichiran+Ramen.mp4"
)
thumbnail_file41 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/41.jpg"
)
medium_file41.media_file.attach(io: media_file41, filename: "PERFECT Ramen Noodles in Osaka Japan: Ichiran Ramen.mp4")
medium_file41.thumbnail.attach(io: thumbnail_file41, filename: "41.jpg")


medium_file42 = Medium.create!(
    title: "$7 Cake Vs. $208 Cake • Japan", 
    duration: 722301,
    description: "Food lovers Steven Lim and Andrew, along with their cameraman Adam, embark on the ultimate food adventure in BuzzFeed’s hit series, Worth It, trying delicious foods at three price points: affordable, middle tier, and luxury. At the end of the episode, the gang decides which item is the most “worth it” at its given price."
    )
media_file42 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/%247+Cake+Vs.+%24208+Cake+%E2%80%A2+Japan.mp4"
)
thumbnail_file42 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/42.jpg"
)
medium_file42.media_file.attach(io: media_file42, filename: "$7 Cake Vs. $208 Cake • Japan.mp4")
medium_file42.thumbnail.attach(io: thumbnail_file42, filename: "42.jpg")


medium_file43 = Medium.create!(
    title: "Eating The World's Most Expensive Burger ($2,000)", 
    duration: 387821,
    description: "Eating The World's Most Expensive Burger! It's £1,237 ($2,000) Burger in the UK"
    )
media_file43 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Eating+The+Worlds+Most+Expensive+Burger+(%242000).mp4"
)
thumbnail_file43 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/43.jpg"
)
medium_file43.media_file.attach(io: media_file43, filename: "Eating The World's Most Expensive Burger ($2,000).mp4")
medium_file43.thumbnail.attach(io: thumbnail_file43, filename: "43.jpg")


medium_file44 = Medium.create!(
    title: "Why Parmesan Cheese Is So Expensive | So Expensive", 
    duration: 599001,
    description: "A wheel of parmesan cheese can cost over $1,000. A single wheel takes at least one year to age, 131 gallons of milk to make, and it can only be made in a restricted area in northern Italy, in the region of Emilia Romagna. We visited a dairy in Parma, Italy to find out how the cheese is made and why it is so expensive."
    )
media_file44 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Why+Parmesan+Cheese+Is+So+Expensive++So+Expensive.mp4"
)
thumbnail_file44 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/44.jpg"
)
medium_file44.media_file.attach(io: media_file44, filename: "Why Parmesan Cheese Is So Expensive | So Expensive.mp4")
medium_file44.thumbnail.attach(io: thumbnail_file44, filename: "44.jpg")


medium_file45 = Medium.create!(
    title: "Saito: The Sushi God of Tokyo", 
    duration: 1024981,
    description: "Sushi Saito is a 3 Michelin Star sushi restaurant, and many regard it as the best in Japan. We got to spend the day with Saito, to ask him about his work, and to eat his soul shattering sushi."
    )
media_file45 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Saito+The+Sushi+God+of+Tokyo.mp4"
)
thumbnail_file45 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/45.jpg"
)
medium_file45.media_file.attach(io: media_file45, filename: "Saito: The Sushi God of Tokyo.mp4")
medium_file45.thumbnail.attach(io: thumbnail_file45, filename: "45.jpg")


medium_file46 = Medium.create!(
    title: "Marco Pierre White Marks This Dessert As 'The Greatest' | MasterChef Australia | MasterChef World", 
    duration: 178621,
    description: "Marco Pierre White marks Charlie's honey semifreddo with lemon crumb and lemon honey caramel as 'the greatest dessert I've ever eaten on MasterChef!'"
    )
media_file46 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Marco+Pierre+White+Marks+This+Dessert+As+The+Greatest++MasterChef+Australia++MasterChef+World.mp4"
)
thumbnail_file46 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/46.jpg"
)
medium_file46.media_file.attach(io: media_file46, filename: "Marco Pierre White Marks This Dessert As 'The Greatest' | MasterChef Australia | MasterChef World.mp4")
medium_file46.thumbnail.attach(io: thumbnail_file46, filename: "46.jpg")


medium_file47 = Medium.create!(
    title: "EXTREME SPICY CHINESE FOOD CHALLENGE in SICHUAN, China | DEATH LEVEL SPICY HOT POT CHALLENGE!!!", 
    duration: 870241,
    description: "Some of the spiciest street food around the world, DEATH LEVEL SPICY, right here in Sichuan China! Chinese food is known to be spicy, but Sichuan food is known to be Deadly spicy! This is death level spicy! We live in Chengdu, Sichuan, China, eating as much delicious Chinese street food and street food around the world as we can. In this Spicy Hot pot Challenge video, we’re tasting one of the spiciest Chinese foods in the world, on the outskirts of Chengdu, Szechuan, the Sichuan Hot Pot!!"
    )
media_file47 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/EXTREME+SPICY+CHINESE+FOOD+CHALLENGE+in+SICHUAN+China++DEATH+LEVEL+SPICY+HOT+POT+CHALLENGE!!!.mp4"
)
thumbnail_file47 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/47.jpg"
)
medium_file47.media_file.attach(io: media_file47, filename: "EXTREME SPICY CHINESE FOOD CHALLENGE in SICHUAN, China | DEATH LEVEL SPICY HOT POT CHALLENGE!!!.mp4")
medium_file47.thumbnail.attach(io: thumbnail_file47, filename: "47.jpg")


medium_file48 = Medium.create!(
    title: "Gotetsu Udon | Food Wars! The Third Plate", 
    duration: 177861,
    description: "The second round of exams are just as corrupt as the first, with the Polar Star students left to work with the scraps of the other students and a blizzard preventing them from purchasing more. Without even noodles to make their noodle dishes or flower to make their own, they have to get creative."
    )
media_file48 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Gotetsu+Udon++Food+Wars!+The+Third+Plate.mp4"
)
thumbnail_file48 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/48.jpg"
)
medium_file48.media_file.attach(io: media_file48, filename: "Gotetsu Udon | Food Wars! The Third Plate.mp4")
medium_file48.thumbnail.attach(io: thumbnail_file48, filename: "48.jpg")


medium_file49 = Medium.create!(
    title: "Yukihira Soma defeats Eizan Senpai 3-0- Shokugeki |HD", 
    duration: 308161,
    description: "Anime: Shokugeki no Souma: San no Sara",
    maturity_rating: "R"
    )
media_file49 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Yukihira+Soma+defeats+Eizan+Senpai+3-0-+Shokugeki++HD.mp4"
)
thumbnail_file49 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/49.jpg"
)
medium_file49.media_file.attach(io: media_file49, filename: "Yukihira Soma defeats Eizan Senpai 3-0- Shokugeki |HD.mp4")
medium_file49.thumbnail.attach(io: thumbnail_file49, filename: "49.jpg")


medium_file50 = Medium.create!(
    title: "Garden of Words Anime Food", 
    duration: 25421,
    description: "Anime: Garden of Words; Kotonoha no Niwa",
    )
media_file50 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Garden+of+Words+Anime+Food.mp4"
)
thumbnail_file50 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/50.jpg"
)
medium_file50.media_file.attach(io: media_file50, filename: "Garden of Words Anime Food.mp4")
medium_file50.thumbnail.attach(io: thumbnail_file50, filename: "50.jpg")


medium_file51 = Medium.create!(
    title: "Face off - Sanji vs Marine cooks", 
    duration: 198601,
    description: "Sanji from One Piece shows the Marines how to not waste food"
    )
media_file51 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Face+off+-+Sanji+vs+Marine+cooks.mp4"
)
thumbnail_file51 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/51.jpg"
)
medium_file51.media_file.attach(io: media_file51, filename: "Face off - Sanji vs Marine cooks.mp4")
medium_file51.thumbnail.attach(io: thumbnail_file51, filename: "51.jpg")


medium_file52 = Medium.create!(
    title: "Food Wars! Shokugeki No Soma S03E14 - Preparation of The Best Salmon Dish", 
    duration: 142161,
    description: "Food Wars! Shokugeki No Soma S03E14 - Preparation of The Best Salmon Dish"
    )
media_file52 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Food+Wars!+Shokugeki+No+Soma+S03E14+-+Preparation+of+The+Best+Solman+Dish.mp4"
)
thumbnail_file52 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/52.jpg"
)
medium_file52.media_file.attach(io: media_file52, filename: "Food Wars! Shokugeki No Soma S03E14 - Preparation of The Best Salmon Dish.mp4")
medium_file52.thumbnail.attach(io: thumbnail_file52, filename: "52.jpg")


medium_file53 = Medium.create!(
    title: "Shokugeki no Soma Season 3 Episode 4 Countdown Mapo Curry Noodles", 
    duration: 263861,
    description: "Shokugeki no Soma Season 3 Episode 4 Countdown Mapo Curry Noodles",
    maturity_rating: "R"
    )
media_file53 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Shokugeki+no+Soma+Season+3+Episode+4+Countdown+Mapo+Curry+Noodles.mp4"
)
thumbnail_file53 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/53.jpg"
)
medium_file53.media_file.attach(io: media_file53, filename: "Shokugeki no Soma Season 3 Episode 4 Countdown Mapo Curry Noodles.mp4")
medium_file53.thumbnail.attach(io: thumbnail_file53, filename: "53.jpg")


medium_file54 = Medium.create!(
    title: "Isshiki Gets Serious | Food Wars! The Third Plate", 
    duration: 116821,
    description: "Satoshi is matched up against Shiratsu with the subject of eel. The central chef taunts his opponent for siding with Polar Star, stating he aspired to work together with him when he reached the elite 10. Satoshi ignores him until the chef insults Polar Star and Satoshi decides to get serious.",
    maturity_rating: "R"
    )
media_file54 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Isshiki+Gets+Serious++Food+Wars!+The+Third+Plate.mp4"
)
thumbnail_file54 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/54.jpg"
)
medium_file54.media_file.attach(io: media_file54, filename: "Isshiki Gets Serious | Food Wars! The Third Plate.mp4")
medium_file54.thumbnail.attach(io: thumbnail_file54, filename: "54.jpg")


medium_file55 = Medium.create!(
    title: "Shokugeki no Souma - Erina true training begin", 
    duration: 135121,
    description: "Erina gets out of her comfort zone and starts cooking freely for the first time"
    )
media_file55 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Shokugeki+no+Souma+-+Erina+true+training+begin.mp4"
)
thumbnail_file55 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/55.jpg"
)
medium_file55.media_file.attach(io: media_file55, filename: "Shokugeki no Souma - Erina true training begin.mp4")
medium_file55.thumbnail.attach(io: thumbnail_file55, filename: "55.jpg")


medium_file56 = Medium.create!(
    title: "Yukihira Souma's amazing cooking skills!", 
    duration: 254701,
    description: "Food Wars - Souma demonstrates his godlike cooking skills to pass the following exam!".
    maturity_rating: "R"
    )
media_file56 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/%5BShokugeki+no+Souma%5D+Yukihira+Soumas+amazing+cooking+skills!.mp4"
)
thumbnail_file56 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/56.jpg"
)
medium_file56.media_file.attach(io: media_file56, filename: "Yukihira Souma's amazing cooking skills!.mp4")
medium_file56.thumbnail.attach(io: thumbnail_file56, filename: "56.jpg")


medium_file57 = Medium.create!(
    title: "Egg Tempura Bowl | Food Wars! The Third Plate", 
    duration: 168261,
    description: "Erina samples Soma's egg tempura bowl. Although she can instantly detect that the egg he used were a common, store-bought ingredient, she's overcome with the flavor of the dish. Soma reveals the secret of the dish and why a common egg was superior to even the most high quality ingredient.",
    maturity_rating: "R"
    )
media_file57 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/videos/Egg+Tempura+Bowl++Food+Wars!+The+Third+Plate.mp4"
)
thumbnail_file57 = open(
"https://nomflix-seed.s3-us-west-1.amazonaws.com/thumbnails/57.jpg"
)
medium_file57.media_file.attach(io: media_file57, filename: "Egg Tempura Bowl | Food Wars! The Third Plate.mp4")
medium_file57.thumbnail.attach(io: thumbnail_file57, filename: "57.jpg")



