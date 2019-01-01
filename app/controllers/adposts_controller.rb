class AdpostsController < ApplicationController

  def new
    @adpost = adpost.new
  end

  def create
    @adpost = adpost.new
    @adpost.title = params[:adpost][:title]
    @adpost.description = params[:adpost][:description]
    @adpost.price = params[:adpost][:price]

  end
end
