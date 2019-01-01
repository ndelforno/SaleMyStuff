class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new
    @user.user_name = params[:user][:user_name]
    @user.email = params[:user][:email]
    @user.password = params[:user][:password]
    @user.password_confirmation = params[:user][:password_confirmation]
    if @user.save
      session[:user_id] = @user.id
      redirect_to request.referer, notice: "Logged in as #{@user.email}!"
    else
      redirect_to request.referer, notice: "signup failed !"
    end
  end

end
