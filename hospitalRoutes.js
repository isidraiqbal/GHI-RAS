const express = require("express");

const router = express.Router();

const {
    createHospital,
    getHospitals,
    loginHospital,
    updateHospital,
    deleteHospital,
    getEmergencyHospitals
} = require("./hospitalControllers");

router.post("/register", createHospital);

router.get("/", getHospitals);

router.post("/login", loginHospital);

router.put("/update/:index", updateHospital);

router.delete("/delete/:index", deleteHospital);

router.get("/emergency", getEmergencyHospitals);

module.exports = router;