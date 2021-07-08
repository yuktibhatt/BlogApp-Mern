const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 8000;

app.get("/hello", (req,res) => res.send("Hello"));

app.post("/hell", (req,res) => res.send(`Hello ${req.body.name}`) );

app.get("/hello/:name", (req,res) => res.send(`Hello ${req.params.name}`));

app.listen(port , () => console.log("Listening on port 8000..."));

