class Api::V1::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @user = User.new
    render json: @user
  end

  # POST /session
  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: @user
    end
  end


  # DELETE /session
  def destroy
    session[:user_id] = nil
  end

  private

  def user_params
    # whitelist params
    params.require(:user).permit(:email, :password)
  end


end
