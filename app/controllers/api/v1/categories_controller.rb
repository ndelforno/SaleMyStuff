class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  # GET /categories
  def index
    @categories = Category.all
    json_response(@categories)
  end

  # POST /categories
  def create
    @category = Category.create!(category_params)
    json_response(@category, :created)
  end

  # GET /categories/:id
  def show
    @category = Category.find(params[:id])
    render json: @category.to_json(include: {adposts: {include: :image, methods: :image_url}})
  end

  # PUT /categories/:id
  def update
    @category.update(category_params)
    head :no_content
  end

  # DELETE /categories/:id
  def destroy
    @category.destroy
    head :no_content
  end

  private

  def category_params
    # whitelist params
    params.permit(:title, :created_by)
  end

  def set_category
    @category = Category.find(params[:id])
  end

end
