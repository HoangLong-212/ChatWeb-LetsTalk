const express = require('express')
const app = express();

require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_CONNECTION

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use(morgan('dev'));


const userRouter = require('./routers/user')

app.use('/user',userRouter)

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
