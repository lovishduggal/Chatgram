import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
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

app.get('/', (req, res) => {
    return res.send('<h1>Server is working!!</h1>');
});

export default app;
