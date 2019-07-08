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

class MediaGenre < ApplicationRecord
    validates :media_id, :genre_id, presence: true

    belongs_to :medium,
    foreign_key: :media_id,
    class_name: :Medium

    belongs_to :genre,
    foreign_key: :genre_id,
    class_name: :Genre

end
