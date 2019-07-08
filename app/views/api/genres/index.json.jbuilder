@genres.each do |genre|
    json.set! genre.id do
        json.extract! genre, :id, :name 
    end
end