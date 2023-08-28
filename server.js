const express = require("express");
const app = express();
const cors = require("cors");
const servicesRoute = require("./routes/servicesRouter");
const supportRoute = require("./routes/supportRouter");
const loginRouter = require("./routes/loginRouter");

require("dotenv").config();

const port = process.env.PORT;
const api_URL = process.env.API_URL;

app.use(cors());
app.use(express.json());
app.use("/services", servicesRoute);
app.use("/support", supportRoute);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
  console.log("Get on server");
  res.send("Get on server");
});

app.post("/", (req, res) => {
  console.log("Post on server");
  res.send("Post on server");
});

app.listen(port, () => {
  console.log(`Connected to ${api_URL}`);
});
