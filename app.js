const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

const port = 8080;

//Home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

//Contact
app.post("/contact", (req, res) => {
  // res.sendFile(__dirname + "/views/contact.html");
  res.send(console.log("HI"));
});
//Projects
// app.post("/projects", (req, res) => {
//   res.redirect(__dirname + "/views/contact.html");
// });

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
