json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@poke.image_url)
end

json.items do
  json.array! @poke.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
  end
end
