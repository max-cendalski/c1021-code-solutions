const express = require('express');
const pg = require('pg');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

/* app.get('/api/grades', function (req, res) {
  var newArray = [];
  for (var key in grades) {
    newArray.push(grades[key]);
  }
  res.json(newArray);
}); */

app.get('/api/grades', (req, res) => {
  const sql = `
      select *
      from "grades"`;

  db.query(sql)
  .then(result=> {
    res.status(200).json(result.rows)
  });
  .catch(err => {
    res.status(500).json({
      error: "An unexpected error occurred."
    })
  })
)




/*   db.query(sql)
    .then(result => {
      if (result) {
        res.status(500).json({
          error: 'No data to display'
        });
      } else {
        res.status(200).json(result.rows);
      }
    });
}); */

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is up on port 3000');
});

/* db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        // the specific grade was found in the database, yay!
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      // possibly due to a syntax error in the SQL statement
      // print the error to STDERR (the terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
})
 */
