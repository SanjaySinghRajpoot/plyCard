const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

import postRoutes from "./routes/post.js";

// node -r esm index.js

const app = express();

  
  
  app.use(bodyParser.json({limit: "30mb", extended: true}));
  app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
  app.use(cors());
  
  app.use('./posts', postRoutes);


const CONNECTION_URL = 'mongodb+srv://buddy123:buddy123@cluster0.b7pep.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => { console.log("connected to mongo db dam!!")}))
    .catch((error) => console.log(error.message));


mongoose.set('useFindAndModify', false);