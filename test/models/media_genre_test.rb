# == Schema Information
#
# Table name: media_genres
#
#  id         :bigint           not null, primary key
#  media_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MediaGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
