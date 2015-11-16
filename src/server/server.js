import Express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';

import App from '../containers/App';

const app = new Express();
const PORT = 3000;

var handleRender = function(req, res) {

    const store = configureStore();
    const appHTML = renderToString(
        <Provider store={ store }>
            <App />
        </Provider>
    );

    res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Universal Redux Sample</title>
                </head>
                <body>
                    <div id="app">${appHTML}</div>
                    <script>
                    </script>
                </body>
            </html>`);
};

app.get('/', handleRender);

app.listen(PORT, (error) => {
    if (error) {
        console.log('Got error on listening : %f', error);
    } else {
        console.info(`Listening on port ${PORT} ......`);
    }
});
