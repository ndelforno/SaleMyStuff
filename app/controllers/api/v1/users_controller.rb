class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # POST /users
  def create
    @user = User.create(user_params)
    render json: @user
  end


  # PUT /users/:id
  def update
    @user.update(user_params)
    head :no_content
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
    head :no_content
  end

  private

  def user_params
    # whitelist params
    params.require(:user).permit(:user_name, :email, :password, :password_confirmation)
  end


end
