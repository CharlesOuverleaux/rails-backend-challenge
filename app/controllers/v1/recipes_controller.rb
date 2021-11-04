require 'contentful'

class V1::RecipesController < ApplicationController
  def index
    render json: get_recipes
  end

  def show
    render json: get_recipe(params[:id])
  end

  private

  def contentful_client
    @client = Contentful::Client.new(
      space: 'kk2bw5ojx476',
      access_token: '7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c',
      environment: 'master',
      dynamic_entries: :auto
    )
  end

  def get_recipes_from_client
    contentful_client.entries('sys.contentType.sys.id' => 'recipe')
  end

  def get_recipes
    get_recipes_from_client.map do |recipe|
      {
        id: recipe.id,
        title: recipe.title,
        image: recipe.photo.url,
        tags: recipe.fields[:tags] ? recipe.tags.map { |tag| tag.name } : [],
        description: recipe.description,
        chef: recipe.fields[:chef] ? recipe.chef.name : ''
      }
    end
  end

  def get_recipe(id)
    recipe = contentful_client.entry(id)
    {
      id: recipe.id,
      title: recipe.title,
      image: recipe.photo.url,
      tags: recipe.fields[:tags] ? recipe.tags.map { |tag| tag.name } : [],
      description: recipe.description,
      chef: recipe.fields[:chef] ? recipe.chef.name : ''
    }
  end

end
