require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");


const Books = require("./API/Book");
const Authors = require("./API/Author");
const Publications = require("./API/Publication");


const shapeAI = express();


shapeAI.use(express.json());


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("connection established!!!!!!!"));

// Initializing Microservices
shapeAI.use("/book", Books);
shapeAI.use("/author", Authors);
shapeAI.use("/publication", Publications);

shapeAI.listen(3000, () => console.log("Server running!!😎"));