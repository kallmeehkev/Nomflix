class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        if @user
            log_in(@user)
            render '/api/users/show.json.jbuilder'
        else
            render json: {errors: "invalid credentials"}, :status => :unauthorized
        end
    end

    def destroy
        if logged_in?
            current_user.reset_session_token!
            session[:session_token] = nil
            render json: {}
        else
            render json: {errors: "nobody logged in"}, :status => :not_found
        end
    end
end
