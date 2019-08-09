# == Schema Information
#
# Table name: my_lists
#
#  id         :bigint           not null, primary key
#  profile_id :integer          not null
#  media_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MyList < ApplicationRecord
    validates :profile_id, :media_id, presence: true
    # validates :profile_id, uniqueness: { scope: :media_id }

    belongs_to :profile,
    foreign_key: :profile_id,
    class_name: :Profile

    belongs_to :medium,
    foreign_key: :media_id,
    class_name: :Medium

end
