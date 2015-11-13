Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :bench, only: [:create, :destroy, :index]
  end
end
