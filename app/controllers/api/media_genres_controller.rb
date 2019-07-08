class Api::MediaGenresController < ApplicationController

    def index
        @media_genres = MediaGenre.all
        render :index
    end

    def show
        @media_genre = MediaGenre.find(params[:id])
        render :show
    end

end
