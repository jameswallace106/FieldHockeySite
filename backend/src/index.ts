import express from 'express';

const app = express();
const PORT:Number=3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  res.send("This is a test route");
});

app.listen(PORT, () => {
    console.log('The app is listening on port http://localhost:' + PORT);
})