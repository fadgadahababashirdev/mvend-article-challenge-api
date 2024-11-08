const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/authRoute');
// allow env
require('dotenv').config();
// app usage
app.use(express.json());
// app route
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'app running successfully' });
}); 
// authRouter
app.use("/" , authRouter)
// universal route
app.get('*', (req, res) => {
  res.status(401).json({ status: 'failed', message: 'Route not found' });
});
// app listening
app.listen(process.env.APP_PORT, () => {
  console.log(
    `app is running successfully http://localhost:${process.env.APP_PORT}`
  );
});
