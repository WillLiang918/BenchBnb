class Bench < ActiveRecord::Base

  def self.filter(params)
    bounds = params[:bounds]
    Bench.where(
      "lat > ? and lat < ? and lng > ? and lng < ? and seating > ? and seating < ?",
      bounds["southWest"]["lat"].to_f,
      bounds["northEast"]["lat"].to_f,
      bounds["southWest"]["lng"].to_f,
      bounds["northEast"]["lng"].to_f,
      params[:minSeats],
      params[:maxSeats]
    )
    # @bench = Bench.in_bounds(params["bounds"])
    # @bench = @bench.where("seating > ? ", params["minSeats"].to_i)
    # @bench = @bench.where("seating < ? ", params["maxSeats"])
  end

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

# def filter(params)
#   @bench = Bench.in_bounds(params[:bounds])
#   @bench = @bench.where("seating > ? ", params[:minSeats])
#   @bench = @bench.where("seating < ? ", params[:maxSeats])
# end
#
# def in_bounds(bounds)
#   Bench.where(
#     "lat > ? and lat < ? and lng > ? and lng < ?",
#     bounds[:southWest][:lat].to_f,
#     bounds[:northEast][:lat].to_f,
#     bounds[:southWest][:lng].to_f,
#     bounds[:northEast][:lng].to_f
#   )
# end

# params = {
#   minSeats: 1,
#   maxSeats: 10,
#   bounds: {
#     northEast: {lat: 37.80971309829069, lng: -122.39208465576172},
#     southWest: {lat: 37.74187133792972, lng: -122.47791534423828}
#   }
# }

param =
  {
    "minSeats"=>"2", "maxSeats"=>"10", "bounds"=>
    {
      "northEast"=>{"lat"=>"37.80971309829069", "lng"=>"-122.39208465576172"}, "southWest"=>{"lat"=>"37.74187133792972", "lng"=>"-122.47791534423828"}
    }
  }
