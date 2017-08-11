def my_min(array)
  min = nil
  array.each do |el|
    array.each do |el2|
      min = el if el < el2
    end
  end
  return min
end

def my_min_two(array)
  min = array.first
  array.each do |el|
    min = el if el < min
  end
  min
end

def largest_contiguous_subsum(array)
  return nil if array.empty?
  largest = array.first
  array.each_index do |i1|
    (i1..array.length-1).each do |i2|
      subarray = array[i1..i2]
      largest = subarray.reduce(:+) if subarray.reduce(:+) > largest
    end
  end
  largest
end


def largest_contiguous_subsum2(array)
  sum = 0
  largest = 0
  idx = 0
  array.each_with_index do |el, idx2|
    sum += el
    largest = el if el > largest
    largest = sum if sum > largest
    if largest + el < 0
      idx = idx2 + 1
      sum = 0
    end
  end
  largest
end
