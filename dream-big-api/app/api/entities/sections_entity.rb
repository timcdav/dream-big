module Entities
    class SectionsEntity < Grape::Entity
      expose :id
      expose :planet_id
      expose :category_id
      expose :timestamps
    end
  end