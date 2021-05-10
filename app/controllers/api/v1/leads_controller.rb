class Api::V1::LeadsController < ApplicationController

def create
begin
    lead =  Lead.create(lead_params)
    render json:   lead, status: :created
rescue StandardError => e
    render json: {   error: e }, status: :bad_request
    end
end


def index
    leads =   Lead.all
    render json: leads
 end
 
 
 private
 
 def lead_params
    params.require(:lead).permit(:fullname, :phone, :email)    
 end
end

