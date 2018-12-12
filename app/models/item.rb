class Item < ApplicationRecord
  belongs_to :department, optional: true
  has_many :comments, dependent: :destroy
end
