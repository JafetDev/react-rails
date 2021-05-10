class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token, if: -> proc { is_api }

  def is_api
    request.env['REQUEST_PATH']&.include? 'api'
  end
  
end
