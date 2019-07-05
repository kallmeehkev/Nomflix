class Api::ProfilesController < ApplicationController
    before_action :require_login

    def create
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id
        if @profile.save
            render :show
        else
            render json: @profile.errors.full_messages, status: 400
        end
    end

    def index
        @profiles = Profile.all
        render :index
    end

    def show
        @profile = Profile.find(params[:id])
        render :show
    end

    def update
        @profile = Profile.find(params[:id])
        if @profile.user_id == current_user.id && @profile.update_attributes(profile_params)
            render :show
        else
            render json: @profile.errors.full_messages, status: 400
        end
    end

    def delete
        @profile = Profile.find(params[:id])
        @profile.destroy
        render json: {}
    end

private
    def profile_params
        params.require(:profile).permit(:name, :maturity_preference)
    end
end
