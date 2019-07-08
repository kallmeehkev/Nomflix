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

class Medium < ApplicationRecord
    validates :title, :duration, :description, :maturity_rating, presence: true
    validates :maturity_rating, inclusion: { in: ["G","PG", "PG-13", "R"],
    message: "rating is not valid" }

    has_many :media_genres,
    foreign_key: :media_id,
    class_name: :MediaGenre

    has_many :genres,
    through: :media_genres,
    source: :genre

    has_one_attached :thumbnail

    has_one_attached :media_file
end
