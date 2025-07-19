
import errorHandler from './error/errorHandler.js';

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import apiRoutes from './routes/api.js';


const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());

const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);


// Mount API routes
app.use('/', apiRoutes);

app.get("/", (req, res) => {
  res.send("✅ magic maza backend is running smoothly!");
});
// Error handler (should be after all routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
export default app;
