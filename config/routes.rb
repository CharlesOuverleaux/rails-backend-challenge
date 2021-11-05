Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :v1, defaults: { format: 'json'} do
    get 'recipes', to: 'recipes#index'
  end
  # Redirect to static#index to enable React router to work
  get '*path', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index'
end
