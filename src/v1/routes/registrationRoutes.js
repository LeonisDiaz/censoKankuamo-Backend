const express = require("express");

const registrationController = require("../../controllers/registrationController");

const router = express.Router();

router.post("/create-registration", registrationController.createNewRegistration);

router.get("/search-registration/:id", registrationController.getOneRegistration);

module.exports = router;
