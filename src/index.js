const express = require('express');
const companyRouter = require('./routes/companyRoutes');
const app = express();

app.use(express.json());

app.use('/api',companyRouter);

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});