select "g"."name" as "Genres",
    count ("m". "title") as "Number of films"
  from "genres" as "g"
  join "filmCategory" using ("genreId")
  join "films" as "m" using ("filmId")
  join "castMembers" using ("filmId")
 where "actorId" = '178'
  group by "Genres";
