class ApplicationController < ActionController::Base

  before_action :authenticate_request
  attr_reader :current_user

  include Response
  include ExceptionHandler

  protect_from_forgery with: :null_session


  def require_login
    unless current_user
      flash[:alert] = "Please log in"
      redirect_to new_session_path
    end
  end


  helper_method :current_user

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end


end
