class Api::MediaController < ApplicationController

    def index
        @media = Medium.all
        render :index
    end

    def show
        @medium = Medium.find(params[:id])
        render :show
    end

end
