def windowed_max_range(arr, window_size) #O(n^2)
  cons = arr.each_cons(window_size)
  cons.map {|x| x.max - x.min}.max
end

p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

class MyQueue
  def initialize
    @store = []
    @sort = []
  end

  def enqueue(el)
    @store << el

    temp = []
    if @sort.empty?
      @sort << el
    else
      until @sort.empty?
        @sort.last < el ? break : temp << @sort.pop
      end
      @sort << el
      until temp.empty?
        @sort << temp.pop
      end
    end
    @store
  end

  def dequeue
    @store.shift



  end

  def peek
    @store.first
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end

  def max
    @sort.last
  end

end

class MyStack
  def initialize
    @store = []
  end

  def pop
    @store.pop
  end

  def push(el)
    @store << el
  end

  def peek
    @store.last
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end

end

class StackQueue < Stack
  def initialize
    @stackqueue = []
  end

  def enqueue(el)
    @stackqueue << el
  end

  def dequeue
    arr = Stack.new
    until @stackqueue.size == 1
      arr.push(@stackqueue.pop)
    end
    @stackqueue.pop
    until arr.empty?
      @stackqueue.push(arr.pop)
    end
    @stackqueue
  end
end
