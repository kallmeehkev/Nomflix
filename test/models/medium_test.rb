# == Schema Information
#
# Table name: media
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  duration        :integer          not null
#  description     :text             not null
#  maturity_rating :string           default("PG"), not null
#  show_ord        :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class MediumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
