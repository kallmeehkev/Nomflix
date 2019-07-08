# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
    validates :name, presence: true
    validates :name, inclusion: { in: %w(Spicy Anime-Food Meat Dog Gluttony Exotic Travel Tutorial Specialty Sweet Competition Big-Baller),
    message: "genre is not valid" }

    has_many :media_genres,
    foreign_key: :genre_id,
    class_name: :MediaGenre

    has_many :media,
    through: :media_genres,
    source: :medium

end
