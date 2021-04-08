import path from 'path';
import express from 'express';
import { renderToString } from 'react-dom/server';

import App from './client/App';
import Html from './html';

const app = express();

app.set('etag', false);
app.set('cacheControl', false);
app.get('/', (req, res) => {
    const AppHtmlString = renderToString(
        <Html>
            <App />
        </Html>
    );
    res.send(
        `<!DOCTYPE html>${AppHtmlString}`
    );
});

app.use(express.static(path.resolve(__dirname,'./public')));

export default () => app;
