select "c"."name" as "Countries",
  count("a"."name") as "Number of  citities"
 from  "countries" as "c"
 join "cities" as "a" using ("countryId")
 group by "Countries"
