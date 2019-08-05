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

class Profile < ApplicationRecord
    validates :user_id, :name, :maturity_preference, presence: true
    validates :name, uniqueness: { scope: :user_id }
    validates :maturity_preference, inclusion: { in: ["G","PG", "PG-13", "R"],
    message: "preference is not valid" }

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :my_lists,
    foreign_key: :profile_id,
    class_name: :MyList

    has_many :listed_media,
    through: :my_lists,
    source: :medium

    has_one_attached :photo

end
