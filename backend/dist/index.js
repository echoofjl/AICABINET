import express from 'express';
import bodyParser from 'body-parser';
import optimizeRoute from './routes/optimize.js';
const app = express();
app.use(bodyParser.json());
app.use('/api', optimizeRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
