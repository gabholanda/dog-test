class Api::V1::CareDaysController < ApplicationController
  before_action :set_care_day, only: [:show, :update, :destroy]

  # GET /care_days
  def index
    @care_days = CareDay.all

    render json: @care_days
  end

  # GET /care_days/1
  def show
    render json: @care_day
  end

  # POST /care_days
  def create
    @care_day = CareDay.new(care_day_params)

    if @care_day.save
      render json: @care_day, status: :created, location: @care_day
    else
      render json: @care_day.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /care_days/1
  def update
    if @care_day.update(care_day_params)
      render json: @care_day
    else
      render json: @care_day.errors, status: :unprocessable_entity
    end
  end

  # DELETE /care_days/1
  def destroy
    @care_day.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_care_day
      @care_day = CareDay.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def care_day_params
      params.fetch(:care_day, {})
    end
end
