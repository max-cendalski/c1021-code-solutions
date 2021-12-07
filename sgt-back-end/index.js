const express = require('express');
const pg = require('pg');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
      select *
      from "grades"`;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.post('/api/grades', (req, res) => {
  console.log('req.params', req.params);
  const text = 'INSERT INTO grades(name, course, score) VALUES($1,$2,$3) RETURNING *';
  const values = ['req.params.name', 'req.params.course', 'req.params.course'];

  db.query(text, values)
    .then(result => {
      console.log(result.rows[0]);
    })
    .catch(err => console.error(err.stack));
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is up on port 3000');
});
