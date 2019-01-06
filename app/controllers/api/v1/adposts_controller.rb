class Api::V1::AdpostsController < ApplicationController
  def index
    render json: Adposts.all
  end

  def create
    adpost = Adpost.create(adpost_params)
    render json: adpost
  end

  def destroy
    Adpost.destroy(params[:id])
  end

  def update
    adpost = Adpost.find(params[:id])
    adpost.update_attributes(category_params)
    render json: category
  end

  private

  def category_params
    params.require(:category).permit(:id, :name, :description)
  end
end
