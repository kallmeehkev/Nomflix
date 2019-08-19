@media.each do |medium|
    json.set! medium.id do
        json.partial! "api/media/medium", medium: medium
    end
end

