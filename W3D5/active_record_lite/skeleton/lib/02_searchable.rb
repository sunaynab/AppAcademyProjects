require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable

  def where(params)
    params_keys = params.keys.map {|key| "#{key} = ?"}.join(" AND ")
    result = DBConnection.execute(<<-SQL, *params.values)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        #{params_keys}
    SQL
    parse_all(result)
  end


end

class SQLObject
  extend Searchable
end
