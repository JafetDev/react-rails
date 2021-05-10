require 'rails_helper'


RSpec.describe Api::V1::LeadsController, type: :controller do


    describe 'GET leads' do
        it 'should retrieve the employees of current company' do
          get :index, format: 'json'
          expect(response.status).to eq(200)
        end
      end


      describe "POST leads" do
          it "Create a new  lead" do
              post :create, params: {  lead: {  fullname: "jafet gutierrez", phone: "9211351241", email: "gtzjafet@gmail.com"  }  }, format: "json"
              expect(response.status).to eq(201)
          end
      end


end