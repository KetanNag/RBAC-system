require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const resourceRoutes = require("./routes/resource");

const app = express();
connectDB();

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/resource", resourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
