import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import { ErrorMiddleware } from './middlewares/Error.js';
const app = express();

//* Loads environment variables from a .env file into process.env.
config({
    path: '.env',
});

//* Middleware for parsing JSON, URL-encoded data, cookies and logging HTTP requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

//* Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
    return res.send('<h1>Server is working!!</h1>');
});
app.use(ErrorMiddleware);

export default app;
