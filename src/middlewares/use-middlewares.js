import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import express from 'express';

import { logRequestInfo } from './log-request-info-middleware.js';


export function useMiddlewares(app) {
    const __dirname = dirname(fileURLToPath(import.meta.url)); // Get the directory name
    app.use(express.json()); //allows application to receive JSON data and automatically parse it into a JavaScript object
    app.use(express.urlencoded({ extended: false })); //  parses the URL encoded from data and also data from the request body and makes it available to route handlers as a simple object.
    app.use(logRequestInfo); // logs the HTTP method and URL of incoming requests to the server.
    app.use(express.static(join(__dirname, '../../public')));

    app.set('views', join(__dirname, '../views')); // Set the view engine to use Pug
    app.set('view engine', 'pug');
};