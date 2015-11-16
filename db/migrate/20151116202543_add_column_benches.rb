class AddColumnBenches < ActiveRecord::Migration
  def change
    change_column :benches, :seating, :integer, default: 1 
  end
end
