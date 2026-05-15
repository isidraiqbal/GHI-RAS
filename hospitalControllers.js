const Hospital = require("./models/hospital");

exports.createHospital = async (req, res) => {

    try {

        const hospital = new Hospital(req.body);

        await hospital.save();

        res.json({
            message: "Hospital Registered Successfully",
            hospital
        });

    } catch (error) {

        res.json({
            message: error.message
        });

    }
};

exports.getHospitals = async (req, res) => {

    try {

        const hospitals = await Hospital.find();

        res.json(hospitals);

    } catch (error) {

        res.json({
            message: error.message
        });

    }
};

exports.loginHospital = async (req, res) => {

    try {

        const { email, password } = req.body;

        const hospital = await Hospital.findOne({
            email,
            password
        });

        if (hospital) {

            res.json({
                message: "Login Successful"
            });

        } else {

            res.json({
                message: "Invalid Email or Password"
            });

        }

    } catch (error) {

        res.json({
            message: error.message
        });

    }
};

exports.updateHospital = async (req, res) => {

    try {

        const hospital = await Hospital.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Hospital Updated Successfully",
            hospital
        });

    } catch (error) {

        res.json({
            message: error.message
        });

    }
};

exports.deleteHospital = async (req, res) => {

    try {

        await Hospital.findByIdAndDelete(req.params.id);

        res.json({
            message: "Hospital Deleted Successfully"
        });

    } catch (error) {

        res.json({
            message: error.message
        });

    }
};

exports.getEmergencyHospitals = async (req, res) => {

    try {

        const hospitals = await Hospital.find({
            emergency: true
        });

        res.json(hospitals);

    } catch (error) {

        res.json({
            message: error.message
        });

    }
};