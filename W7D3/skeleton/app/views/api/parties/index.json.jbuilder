json.array! @parties do |party|
  json.name party.name
  json.guests party.guests do |guest|
    json.name guest.name
  end
end
