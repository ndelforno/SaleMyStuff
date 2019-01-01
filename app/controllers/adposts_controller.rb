class AdpostsController < ApplicationController

  def new
    @adpost = adpost.new
  end

  def create
    @adpost = adpost.new
    @adpost.title = params[:adpost][:title]
    @adpost.description = params[:adpost][:description]
    @adpost.price = params[:adpost][:price]
    @adpost.address = params[:adpost][:address]
    @adpost.user = current_user
    @adpost.category_id = params[:category_id]
    @adpost.image.attach(params[:adpost][:image])
    if adpost.save
      redirect_to adpost_path
    else
      render :new
    end
  end

end
