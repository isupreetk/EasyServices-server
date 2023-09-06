const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const port = process.env.PORT;
const api_URL = process.env.API_URL;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const loginRoute = require("./routes/loginRouter");
const serviceRoute = require("./routes/serviceRouter");
const bookServiceRoute = require("./routes/bookServiceRouter");
const bookServiceImageRoute = require("./routes/bookServiceImageRoute");
const bookingLogRoute = require("./routes/bookingLogRoute");
const supportRoute = require("./routes/supportRouter");

const serviceProviderFeedRoute = require("./routes/serviceProviderFeedRouter");
const addQuoteRoute = require("./routes/addQuoteRouter");

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

// Custom Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token validation failed" });
    }
    req.user = decoded;
    next();
  });
}

app.use("/login", loginRoute);
app.use("/services", serviceRoute);
app.use("/schedule", bookServiceRoute);
app.use("/scheduleImage", bookServiceImageRoute);
app.use("/bookings", bookingLogRoute);

app.use("/feed", serviceProviderFeedRoute);
app.use("/addQuote", addQuoteRoute);
app.use("/support", supportRoute);

app.get("/", (req, res) => {
  console.log("Get on server");
  res.send("Get on server");
});

app.post("/", (req, res) => {
  console.log("Post on server");
  res.send("Post on server");
});

/*
 * Protected endpoint that requires a valid JWT token
 */
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

app.listen(port, () => {
  console.log(`Connected to ${api_URL}`);
});
