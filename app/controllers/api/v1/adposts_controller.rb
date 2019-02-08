class Api::V1::AdpostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  # GET /adposts
  def index
    @adposts = Adpost.all
    json_response(@adposts)
  end

  # POST /adposts
  def create
    @adpost = Adpost.create(adpost_params)
    render json: @adpost
  end

  # GET /adposts/:id
  def show
    @adpost = Adpost.find(params[:id])
    render json: @adpost
  end

  # PUT /adposts/:id
  def update
    @adpost.update(adpost_params)
    head :no_content
  end

  # DELETE /adposts/:id
  def destroy
    @adpost.destroy
    head :no_content
  end

  private

  def adpost_params
    # whitelist params
    params.permit(:title, :description, :price, :user_id, :category_id, :address, :image)
  end


end
