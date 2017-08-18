require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    # ...
  end

  def table_name
    # ...
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @name = name
    defaults = {
      :primary_key => :id,
      :foreign_key => "#{name}_id".to_sym,
      :class_name => "#{name}".camelcase
    }

    defaults.keys.each do |key|
      self.send("#{key}=", options[key] || defaults[key])
    end

    @options = options

  end

end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @name = name
    defaults = {
      :primary_key => :id,
      :foreign_key => "#{self_class_name.downcase}_id".to_sym,
      :class_name => "#{name}".singularize.capitalize
    }

    defaults.keys.each do |key|
      self.send("#{key}=", options[key] || defaults[key])
    end

    @options = options
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    options = BelongsToOptions.new()
  end

  def has_many(name, options = {})
    # ...
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  # Mixin Associatable here...
end
