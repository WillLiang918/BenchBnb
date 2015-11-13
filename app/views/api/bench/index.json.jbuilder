# json.array(@bench) do |bench|
#   json.extract!(
#     bench,
#     :description, :lat, :lng
#   )
# end

json.array! @bench, :description, :lat, :lng
