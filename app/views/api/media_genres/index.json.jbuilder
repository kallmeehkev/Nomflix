@media_genres.each do |media_genre|
    json.set! media_genre.id do
        json.partial! "api/media_genres/media_genre", media_genre: media_genre
    end
end