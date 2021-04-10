import path from 'path';
import fs from 'fs';
import express from 'express';

import render from "./render";

const clientStats = JSON.parse(fs.readFileSync('./stats.json', 'utf8'));

const app = express();

app.set('etag', false);
app.set('cacheControl', false);
app.get('/', render({ clientStats }));

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(3040, 'localhost', () => {
    console.log(`Server started: http://${'localhost'}:${'3040'}`);
});
