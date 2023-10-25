import { uncaughtErrors } from '../middlewares/index.js';
import { getProjectName } from '../utilities/index.js';
import user from './user-route.js';
import auth from './auth-route.js';
import pages from './pages-route.js';
import resetPassword from './reset-password-route.js';

export default (app) => {
    // make your api endpoints/route-handlers here below:
    app.use('/api', pages);
    app.use('/api/user', user);
    app.use('/api/auth', auth);
    app.use('/api/reset-password', resetPassword);

    // last in route handlers for handling 404 error. add other routes above it
    app.use('*', (request, response) => {
        response.status(404).render('page-not-found', { title: getProjectName() });
    });

    // use this error handling middleware at the end of your middleware stack for catching errors thrown by them
    app.use(uncaughtErrors);
};
