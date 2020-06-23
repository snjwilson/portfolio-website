import express from 'express';
import serverRender from './renderers/server';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const appToString = serverRender();
  res.render('index', { appToString });
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running on port ', process.env.PORT || 8080);
});
