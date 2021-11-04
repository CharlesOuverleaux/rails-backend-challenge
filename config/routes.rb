Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "recipes#index"
  get "/recipes", to: "recipes#index"
  get "/recipes/:id", to: "recipes#show"
end
