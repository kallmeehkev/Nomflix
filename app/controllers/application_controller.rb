class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def require_login
    render json: {errors: "must be logged in to do this"}, :status => :unauthorized unless logged_in?
  end

end
