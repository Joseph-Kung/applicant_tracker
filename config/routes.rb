Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :recruiters, only: [:create, :index, :show, :destroy, :update]
end
