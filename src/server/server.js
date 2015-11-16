import Express from 'express';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

const app = new Express();
const PORT = 3000;
const HTML = `
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Universal Redux Sample</title>
                    </head>
                    <body>
                        <div id="app"></div>
                        <script>
                        </script>
                    </body>
                </html>
            `;

var handleRender = function(req, res) {
    res.send(HTML);
};

app.get('/', handleRender);

app.listen(PORT, (error) => {
    if (error) {
        console.log('Got error on listening : %f', error);
    } else {
        console.info(`Listening on port ${PORT} ......`);
    }
});
