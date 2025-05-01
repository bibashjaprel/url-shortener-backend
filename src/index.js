import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.config.js';
import urlRoutes from './routes/url.routes.js';
import { redirectToOriginal } from './controllers/url.controllers.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

let hitCount = 0;
app.get('/', (req, res) => {
  hitCount++;
  res.send({ message: 'Hello World!' });
  console.log(`Hitting Endpoint / from ${req.ip}`);
  console.log(`Hit Count: ${hitCount}`);
});

//url routes
app.use('/v1/api', urlRoutes);

// Redirect to original URL
app.use('/:shortId', redirectToOriginal);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
