class Api::GenresController < ApplicationController

    def index
        @genres = Genre.all
        render :index
    end

    def show
        @genre = #current_profile.maturity_preference == "R" ? 
        Genre.includes(:media).find(params[:id]) #: Genre.includes(:media).where.not('media.maturity_rating = ?', "R").references(:media).find(params[:id])
        render :show
    end
end
