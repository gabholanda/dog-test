require 'test_helper'

class CareDaysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @care_day = care_days(:one)
  end

  test "should get index" do
    get care_days_url, as: :json
    assert_response :success
  end

  test "should create care_day" do
    assert_difference('CareDay.count') do
      post care_days_url, params: { care_day: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show care_day" do
    get care_day_url(@care_day), as: :json
    assert_response :success
  end

  test "should update care_day" do
    patch care_day_url(@care_day), params: { care_day: {  } }, as: :json
    assert_response 200
  end

  test "should destroy care_day" do
    assert_difference('CareDay.count', -1) do
      delete care_day_url(@care_day), as: :json
    end

    assert_response 204
  end
end
