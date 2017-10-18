require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    unless self.include?(key)
      if @store.length <= @count
        resize!
      end
      @store[key.hash % @store.length] << key
      @count+=1
    end
  end

  def include?(key)
    @store[key.hash % @store.length].include?(key)
  end

  def remove(key)
    @store[key.hash % @store.length].delete(key)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    store_new = Array.new(@store.length * 2) { Array.new }
    @store.flatten.each do |i|
      store_new[i.hash % store_new.length] << i
    end
    @store = store_new
  end

end
