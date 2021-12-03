select "line1",
       "district",
       "name" as "name"
  from "addresses"
  join "cities" using ("cityId")
