class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?, :current_profile, :current_profile?

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

  def set_current_profile(profile)
      session[:profile_id] = profile.id
      @current_profile = profile
  end

  def unset_current_profile(profile)
      session[:profile_id] = nil
      @current_profile = nil
  end

  def current_profile
    @current_profile ||= Profile.find_by(id: session[:profile_id])
  end

  def current_profile?
    !!current_profile
  end

end
