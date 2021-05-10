class CreateLeads < ActiveRecord::Migration[5.2]
  def change
    create_table :leads do |t|
      t.string :fullname
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
