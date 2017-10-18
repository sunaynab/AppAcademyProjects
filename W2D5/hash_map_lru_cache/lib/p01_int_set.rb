class MaxIntSet
  def initialize(max)
    @store = Array.new(max) {false}
  end

  def insert(num)
    raise "Out of bounds" unless is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    raise "Out of bounds" unless is_valid?(num)
    @store[num] = false
  end

  def include?(num)
    if @store[num] == true
      return true
    end
    false
  end

  private

  def is_valid?(num)
    if num > @store.length || num < 0
      return false
    end
    true
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store[num % @store.length] << num
  end

  def remove(num)
    @store[num % @store.length].delete(num)
  end

  def include?(num)
    @store[num % @store.length].include?(num)
  end

  private

  def [](num)
    @store[num]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    unless self.include?(num)
      if @store.length <= count
        resize!
      end
      @store[num % @store.length] << num
      @count+=1
    end
  end

  def remove(num)
    @store[num % @store.length].delete(num)
  end

  def include?(num)
    @store.flatten.include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % @store.length]
  end

  def num_buckets
    @store.length
  end

  def resize!
    store_new = Array.new(@store.length * 2) { Array.new }
    @store.flatten.each do |i|
      store_new[i % store_new.length] << i
    end
    @store = store_new
  end
end
