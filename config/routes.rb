Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "static#index"
  namespace :v1, defaults: { format: 'json'} do
    get 'recipes', to: 'recipes#index'
    get 'recipes/:id', to: 'recipes#show'
  end
end
