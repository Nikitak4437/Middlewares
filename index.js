const express = require("express");
const app = express();

const middleware1 = (req, res, next) => {
  console.log("This is First Middleware function");
  next(); // call to next function
};
const middleware2 = (req, res, next) => {
  console.log("This is Second Middleware function");
  next(); // call to next function
};
app.use(middleware1);
app.use(middleware2);

app.get("/", (req, res) => {
  console.log("Get call");
  res.send("Home page call");
  res.end();
});
app.get("/middleware1", middleware1, (req, res) => {
  console.log("Get middleware1 call");
  res.send("Get middleware1 call");
  res.end();
});
app.get("/middleware2", middleware2, (req, res) => {
  console.log("Get middleware2 call");
  res.send("Get middleware2 call");
  res.end();
});
app.listen(3001, () => {
  console.log("application is running on port 3001");
});
