class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)
    Bench.where(
      "lat > ? and lat < ? and lng > ? and lng < ?",
      bounds["southWest"]["lat"].to_f,
      bounds["northEast"]["lat"].to_f,
      bounds["southWest"]["lng"].to_f,
      bounds["northEast"]["lng"].to_f
    )
  end
end
