const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

const port = 8080;

//Home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

//Projects
app.get("/Projects", (req, res) => {
  // res.send('Project Page')
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
