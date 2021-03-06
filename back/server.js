const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./dao/users');

app.use('/users', usersRouter);


const deliveriesRouter = require('./dao/deliveries');

app.use('/deliveries', deliveriesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});