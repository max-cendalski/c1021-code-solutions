const express = require('express');
const pg = require('pg');
const app = express();
app.use(express.json());

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
  const text = 'INSERT INTO grades(name, course, score) VALUES($1,$2,$3) RETURNING *';
  const values = [req.body.name, req.body.course, req.body.score];

  if (!values) {
    res.status(400).json({ error: 'missing data' });
  } else {
    db.query(text, values)
      .then(result => {
        res.status(200).json(result.row);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'unexpected error occured' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({
      error: 'grade must be a positive integer'
    });
    return;
  }
  const { name, course } = req.body;
  const score = Number(req.body.score);
  if (!name || !course || !score) {
    res.status(400).json({
      error: 'name, course, and score are required fields'
    });
    return;
  }
  const sql = `
    update "grades"
       set "name"   = $1,
           "course" = $2,
           "score"  = $3
     where "gradeId" = $4
    returning *
  `;
  const params = [name, course, score, gradeId];
  db.query(sql, params)
    .then(result => {
      const [updatedGrade] = result.rows;
      if (!updatedGrade) {
        res.status(404).json({
          error: `cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.json(updatedGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be positive integer' });
    return;
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
    `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const [deletedGrade] = result.rows;
      if (!deletedGrade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'unexpected error occured'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is up on port 3000');
});
