class ApplicationController < ActionController::Base

  include Response
  include ExceptionHandler

  protect_from_forgery with: :null_session

  def current_user
    User.find_by(id: session[:user_id])
  end

  def require_login
    unless current_user
      flash[:alert] = "Please log in"
      redirect_to new_session_path
    end
  end


  helper_method :current_user

  private

  def not_authenticated
    redirect_to new_session_path, alert: "Please login first"
  end


end
