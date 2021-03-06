Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  resources :recruiters, only: [:create, :index, :show, :destroy, :update]
  resources :applicants, only: [:create, :index, :destroy, :update, :show]
end
