require('dotenv').config();  // Add this line to load .env variables

const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')

const mongoURI = process.env.MONGO_URI;  // This should now be correctly loaded from .env

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI)
  .then(() => console.log("Connected to Mongo Successfully"))
  .catch((e) => console.log("Not connected: ", e));

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});
