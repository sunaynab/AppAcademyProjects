class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    hash = 0
    return hash if self.empty?
    self.each_with_index do |el, idx|
      if el.is_a?(Array)
        hash+= el.hash
      else
        hash += (el % 5)*idx
      end
    end
    hash
  end
end

class String
  def hash
    hash = 0
    return hash if self.length < 1
    self.each_byte.with_index do |ch, i|
      hash += (ch % 7)*i
    end
    hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    hash = 0
    return hash if self.length < 1
    self.each do |key, val|
      key.to_s.each_byte do |ch|
        hash += ch % 5
      end
      unless val.is_a?(Integer)
        val.each_byte do |ch|
          hash+= ch % 7
        end
      else
        hash += val % 7
      end
    end
    hash
  end
end
