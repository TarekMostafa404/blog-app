import express from 'express';
import pg from 'pg';
import env from 'dotenv';

const app = express();

env.config();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.set('views', 'views');
// app.use(express.json());

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM posts');

  res.render('index', { posts: result.rows });
});

app.get('/posts/update/:id', async (req, res) => {
  const id = req.params.id;
  const result = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
  console.log(result.rows[0]);

  res.render('update', { post: result.rows[0] });
});

app.post('/posts/update/:id', async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  await db.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3', [
    title,
    content,
    id,
  ]);

  res.redirect('/');
});

app.get('/posts/delete/:id', async (req, res) => {
  const id = req.params.id;
  await db.query('DELETE FROM posts WHERE id = $1', [id]);

  res.redirect('/');
});

app.post('/submit', async (req, res) => {
  const { title, richTextContent } = req.body;
  await db.query('INSERT INTO posts (title, content) VALUES ($1, $2)', [
    title,
    richTextContent,
  ]);

  res.redirect('/');
});

app.post('/contact', (req, res) => {
  res.send(
    '<h2 style= text-align:center;padding-top:50VH>This is just a testing page, try one of the methods below the contact form :)</h2>'
  );
});

app.get('/posts/new', (req, res) => {
  res.render('create');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/about', (req, res) => {
  res.render('about');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
