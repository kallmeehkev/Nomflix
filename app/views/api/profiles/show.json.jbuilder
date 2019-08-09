json.profile do
    json.partial! "api/profiles/profile", profile: @profile
end

json.myLists do
    @profile.my_lists.each do |myList|
        json.set! myList.id do
            json.extract! myList, :id, :profile_id, :media_id
        end
    end
end