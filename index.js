import express from 'express';
import './env/env.js';

import { connect2DB, logger, setEnvironmentConfig } from './src/configurations/index.js';
import { useMiddlewares } from './src/middlewares/index.js';
import routes from './src/routes/index.js';

const main = () => {
    setEnvironmentConfig(); // Set environment configurations.

    const app = express();
    useMiddlewares(app); // use many built-in middlewares
    routes(app); // Add routes
    connect2DB(); // Connect to the database

    // Start the server for listening on a port and export it for testing purposes.
    const server = app.listen(process.env.PORT, () => {
        logger.info(`App server is listening on port: ${process.env.PORT} for ${process.env.NODE_ENV}`);
    });

    return server; // Export the server for testing purposes
};

main();

export default main;