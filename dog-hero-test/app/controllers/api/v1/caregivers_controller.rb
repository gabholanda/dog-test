class Api::V1::CaregiversController < ApplicationController
  before_action :set_caregiver, only: [:show, :update, :destroy]

  # GET /caregivers
  def index
    @caregivers = Caregiver.all

    render json: @caregivers
  end

  # GET /caregivers/1
  def show
    render json: @caregiver
  end

  # POST /caregivers
  def create
    @caregiver = Caregiver.new(caregiver_params)
    @caregiver.email.downcase!
    @caregiver.username.downcase!

    if @caregiver.save
      render json: @caregiver, status: :created
    else
      render json: @caregiver.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /caregivers/1
  def update
    if @caregiver.update(caregiver_params)
      render json: @caregiver
    else
      render json: @caregiver.errors, status: :unprocessable_entity
    end
  end

  # DELETE /caregivers/1
  def destroy
    @caregiver.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_caregiver
      @caregiver = Caregiver.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def caregiver_params
      params.require(:caregiver).permit(:name, :age, :image, :address, :email, :password_digest, :username, :rating)
    end
end
