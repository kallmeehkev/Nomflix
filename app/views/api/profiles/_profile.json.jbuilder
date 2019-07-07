# json.extract! profile, :id, :user_id, :name, :maturity_preference,
json.id profile.id
json.user_id profile.user_id
json.name profile.name
json.maturity_preference profile.maturity_preference
json.photoUrl url_for(profile.photo)
