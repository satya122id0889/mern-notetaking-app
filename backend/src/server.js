import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import notesRoutes from '../src/routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import ratelimiter from './middleware/rateLimiter.js';


dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;



// Middleware to parse JSON requests
app.use(cors(
    {origin: "http://localhost:5173",}
));
app.use(express.json());
app.use(ratelimiter)

// app.use((req, res, next) => {
//     console.log(`Request method is ${req.method} and request URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(
        PORT , () => {
            console.log('Server is running on PORT:' , PORT)
        }
    );
});