class Api::V1::AdpostsController < ApplicationController
  def index
    render json: Adpost.all
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
    adpost.update_attributes(adpost_params)
    render json: adpost
  end

  private

  def adpost_params
    params.require(:adpost).permit(:id, :name, :description)
  end
end
