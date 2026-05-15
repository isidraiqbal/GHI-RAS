const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const hospitalRoutes = require("./hospitalRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/hospitals", hospitalRoutes);

//mongoose.connect(process.env.MONGO_URI)
//.then(() => console.log("MongoDB Connected"))
//.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});