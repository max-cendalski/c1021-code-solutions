select "releaseYear",
       "g" . "name" as "name"
  from "films"
  join "filmCategory" using ("filmId")
  join "genres" as "g" using ("genreId")
 where "title" = 'Boogie Amelie';
