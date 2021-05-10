Rails.application.routes.draw do
  root to: 'site#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post "/lead/create", to: "leads#create"
      get "/leads", to: "leads#index"
    end
  end
end
