select "line1",
       "c"."name" as "name",
       "district",
       "a". "name" as "country name"
  from "addresses"
  join "cities" as "c" using ("cityId")
  join "countries" as "a" using ("countryId");







/* where-are-they.sql

Generate a list of all addresses in the system that includes their "line1", "city"."name",
and "district". Bragging rights if you get the name of the country in there too.
 */
