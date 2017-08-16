# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

# BONUS QUESTIONS: These problems require knowledge of aggregate
# functions. Attempt them after completing section 05.

def highest_gdp
  # Which countries have a GDP greater than every country in Europe? (Give the
  # name only. Some countries may have NULL gdp values)
  execute(<<-SQL)
    SELECT
      name
    FROM
      countries
    WHERE
      gdp > (
        SELECT
          MAX(gdp) AS highest_gdp
        FROM
          countries
        WHERE
          continent = 'Europe'
      )
  SQL
end

def largest_in_continent
  # Find the largest country (by area) in each continent. Show the continent,
  # name, and area.
  execute(<<-SQL)
    SELECT
      C1.continent, C1.name, C1.area
    FROM
      countries AS C1
    WHERE
      C1.area = (
        SELECT
          MAX(C2.area)
        FROM
           countries AS C2
        WHERE
          C1.continent = C2.continent)
  SQL
end

def large_neighbors
  # Some countries have populations more than three times that of any of their
  # neighbors (in the same continent). Give the countries and continents.
  execute(<<-SQL)
    SELECT
      C1.name, C1.continent
    FROM
      countries as C1
    WHERE
      C1.population/3 > (
        SELECT
          MAX(C2.population)
        FROM
          countries as C2
        WHERE
          C1.continent = C2.continent AND C1.name != C2.name
      )
  SQL
end
