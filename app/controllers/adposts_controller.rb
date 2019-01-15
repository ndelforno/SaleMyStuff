class AdpostsController < ApplicationController
  before_action :set_user
  before_action :set_user_adpost, only: [:show, :update, :destroy]

  # GET /adposts
  def index
    @adposts = Adpost.all
    json_response(@adposts)
  end

  def new
    @adpost = Adpost.new
    @categories = Category.all
  end

  def show
    @adpost = Adpost.find(params[:id])
    json_response(@adpost)
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
