class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable

  def initialize
    @head = Node.new
    @tail = Node.new
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next.nil? &&  @tail.prev.nil?
  end

  def get(key)
    self.each do |node|
      return node.val if node.key == key
    end
    nil
  end

  def include?(key)
    self.each do |node|
      return true if node.key == key
    end
    false
  end

  def append(key, val)
    new_node = Node.new(key, val)
    if self.empty?
      new_node.prev = @head
      new_node.next = @tail
      @head.next = new_node
      @tail.prev = new_node
    else
      @tail.prev.next = new_node
      new_node.prev = @tail.prev
      @tail.prev = new_node
      new_node.next = @tail
    end
  end

  def update(key, val)
    unless empty?
      self.each do |node|
        node.val = val if node.key == key
      end
    end
  end

  def remove(key)
    self.each do |node|
      if node.key == key
        node.prev.next = node.next unless node.prev == nil
        node.next.prev = node.prev unless node.next == nil
      end
    end
  end

  def each
    node = first
    while node != @tail
      yield node
      node = node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
