import express from 'express';

const app = express();

app.get('/', (reg, res) => res.send('Hello'));

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));