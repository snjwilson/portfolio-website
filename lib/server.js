import express from 'express';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running on port ', process.env.PORT || 8080);
});
