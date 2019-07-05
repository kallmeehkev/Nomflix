# == Schema Information
#
# Table name: profiles
#
#  id                  :bigint           not null, primary key
#  user_id             :integer          not null
#  name                :string           not null
#  maturity_preference :string           default("R"), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
