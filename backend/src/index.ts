import express from 'express';

const app = express();
const PORT:Number=3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
    console.log('The app is listening on port http://localhost:' + PORT);
})