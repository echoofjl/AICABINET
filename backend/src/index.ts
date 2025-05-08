import bodyParser from 'body-parser';
import express from 'express';
import promptRoutes from './routes/promptRoutes.js';
import textRefinerRoutes from './routes/textRefinerRoutes.js';

const app = express();
app.use(bodyParser.json());

app.use("/api/prompt", promptRoutes);
app.use("/api", textRefinerRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});