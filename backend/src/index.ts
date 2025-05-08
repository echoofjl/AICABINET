import bodyParser from 'body-parser';
import express from 'express';
import promptRoutes from './routes/promptRoutes.js';
import textRefinerRoutes from './routes/textRefinerRoutes.js';
import { errorHandler } from './utils/errorHandler.js';

const app = express();
app.use(bodyParser.json());

app.use("/api/prompt", promptRoutes);
app.use("/api", textRefinerRoutes);
app.use(errorHandler);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});