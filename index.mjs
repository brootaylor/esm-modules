import express from 'express';
import { welcome, add } from './hello';

const app = express();

app.get('/', (reg, res) => {
    //res.send(add(5, 5).toString());
    res.send(welcome);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
