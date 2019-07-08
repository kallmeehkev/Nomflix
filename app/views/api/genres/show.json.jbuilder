json.genre do
    json.extract! @genre, :id, :name
end

json.media do
    @genre.media.each do |medium|
        json.set! medium.id do
            json.partial! "api/media/medium", medium: medium
        end
    end
end