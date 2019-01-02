class AdpostsController < ApplicationController

  def new
    @adpost = Adpost.new
    @categories = Category.all
  end

  def show
    @adpost = Adpost.find(params[:id])
  end

  def create
    @categories = Category.all
    @adpost = Adpost.new
    @adpost.title = params[:adpost][:title]
    @adpost.description = params[:adpost][:description]
    @adpost.price = params[:adpost][:price]
    @adpost.address = params[:adpost][:address]
    @adpost.user = current_user
    @adpost.category_id = params[:category_id]
    @adpost.image.attach(params[:adpost][:image])
    if @adpost.save
      redirect_to adpost_path(@adpost)
    else
      render :new
    end
  end

end
