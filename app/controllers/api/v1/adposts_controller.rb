class Api::V1::AdpostsController < ApplicationController
  before_action :set_adpost, only: [:show, :update, :destroy]

  # GET /adposts
  def index
    @adposts = Adpost.all
    json_response(@adposts)
  end

  # POST /adposts
  def create
    @adpost = Adpost.create!(adpost_params)
    json_response(@adpost, :created)
  end

  # GET /adposts/:id
  def show
    json_response(@adpost)
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
    params.permit(:title, :created_by)
  end

  def set_adpost
    @category = Adpost.find(params[:id])
  end
end
