def brute_force?(arr, target)
  arr.each_with_index do |el, idx|
    arr.each_with_index do |el2, idx2|
      next if idx == idx2
      return true if el + el2 == target
    end
  end
  false
end

def two_sum_sort?(arr, target)
  arr = arr.sort
  i, j = 0, arr.length - 1

  while i < j
    case (arr[i] + arr[j]) <=> target
    when 0
      return true
    when -1
      i += 1
    when 1
      j -= 1
    end
    false
  end
end


def two_sum_hash?(arr, target)
  hash = Hash.new { |hash, key| hash[key] = 0 }
  arr.each {|el| hash[el] += 1}
  hash.keys.each do |el|
    hash[el] -= 1
    return true if hash[target - el] > 0
  end
  return false
end

#
p brute_force?([0, 1, 5, 7], 6)
p brute_force?([0, 1, 5, 7], 10)
