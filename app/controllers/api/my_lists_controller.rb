class Api::MyListsController < ApplicationController
    before_action :require_login

    def create
        @my_list = MyList.new(my_list_params)
        if @my_list.save
            render :show
        else
            render json: @my_list.errors.full_messages, status: 400
    end
    
    # def index
    #     @my_lists = Profile.all.where("profile_id = ?", my_list_params[:profile_id])
    #     render :index
    # end
    
    def show
        @my_list = Profile.find(params[:id])
        render :show
    end

    def destroy
        @my_list = Profile.find(params[:id])
        if @@my_list.destroy
            render :show
        else
            render json: @my_list.errors.full_messages, status: 422
        end
    end

private
    def my_list_params
        params.require(:my_list).permit(:media_id, :profile_id)
    end

end
