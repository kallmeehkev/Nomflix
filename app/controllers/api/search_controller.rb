class Api::SearchController < ApplicationController

    def index
        input = search_params[:input]
        if input.empty?
            render json: {}
            return
        end
        @media = Medium.includes(:genres)
            .where("title LIKE (?) OR description LIKE (?) OR genres.name LIKE (?)" , "%#{input}%", "%#{input}%", "%#{input}%").references(:genres)
            .distinct
        render :index
    end

private
    def search_params
        params.require(:search).permit(:input)
    end
end
