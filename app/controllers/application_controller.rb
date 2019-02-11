class ApplicationController < ActionController::Base

  # before_action :authenticate_user

  attr_reader :current_user
  helper_method :current_user


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



  def authenticate_user
    jwt = cookies.signed[:jwt]
    decode_jwt(jwt)
  end


end
