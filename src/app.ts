import express from 'express';
import {json, urlencoded} from 'body-parser';
import {initializeDatabase} from './config';
import routes from './server';
import rateLimit from 'express-rate-limit'

const app = express();

app.use(json());
app.use(urlencoded({extended: true}))
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "script-src 'self'");
    next();
});

// Rate limiting middleware for register and login routes
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    max: 100, // 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after a few minutes',
});

routes.forEach((route) => {
    app.use(route, limiter)
})

const PORT = process.env.PORT || 4000;

(async() => {
    await initializeDatabase()

    app.listen(PORT, () => {
        console.log("===============")
        console.log(`Server listening on PORT ${PORT}`)
        console.log("===============")
    })
})();

export default app;