def anagrams(str1, target) #O(n!)
  str1.chars.permutation.map {|arr| arr.join}.include?(target)
end

def second_anagram(str1, target) #O(n^2)
  copy1 = str1.dup
  copy2 = target.dup
  str1.chars.each do |ch|
    if target.chars.any? {|c| ch == c}
      copy1.delete!(ch)
      copy2.delete!(ch)
    end
  end
  copy1.length == 0 && copy2.length == 0
end

def third_anagram(str1, target) #O(k^n)
  str1.chars.sort == target.chars.sort
end

def fourth_anagram(str1, target) #O(n^2)
  hash1 = Hash.new { |hash, key| hash[key] = 0 }
  hash2 = Hash.new { |hash, key| hash[key] = 0 }
  str1.chars.each { |el| hash1[el] += 1}
  target.chars.each { |el| hash2[el] += 1}
  hash1 == hash2
end

def fourth_anagram_one_hash(str1, target) #O(n^2)
  hash1 = Hash.new { |hash, key| hash[key] = 0 }

  str1.chars.each { |el| hash1[el] += 1}
  target.chars.each { |el| hash1[el] -= 1}
  hash1.values.all? {|v| v == 0}
end
