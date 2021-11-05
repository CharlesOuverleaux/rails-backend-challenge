require 'rails_helper'

RSpec.describe V1::RecipesController do
  describe "GET #index" do
    before do
      get :index
    end
    it "returns http success (status 200)" do
      expect(response).to have_http_status(:success)
    end

    it "JSON body response returns an array" do
      json_response = JSON.parse(response.body)
      expect(json_response).to be_an(Array)
    end

    it "JSON body response contains recipes" do
      json_response = JSON.parse(response.body)
      expect(json_response).to_not be_empty
    end

    it "JSON body response contains recipes with id, title, image, tags, description, chef" do
      json_response = JSON.parse(response.body)[0].keys.join(",")
      expect(json_response).to eq("id,title,image,tags,description,chef")
    end

    it "JSON body response contains recipes with title White Cheddar Grilled ... Basil" do
      json_response = JSON.parse(response.body)
      title = 'White Cheddar Grilled Cheese with Cherry Preserves & Basil'
      expect(json_response.find { |item| item['title'] == title }).to_not be_nil
    end
  end
end
