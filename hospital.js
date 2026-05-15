const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({

    hospitalName: String,
    email: String,
    password: String,
    beds: Number,
    doctors: Number,
    emergency: Boolean,
    facilities: String

});

module.exports = mongoose.model("Hospital", hospitalSchema);