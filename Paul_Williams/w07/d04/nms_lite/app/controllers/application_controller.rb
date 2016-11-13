class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include ApplicationHelper
  layout :determine_layout

  private
    def determine_layout
      current_user ? "application" : "guest"
    end
end
