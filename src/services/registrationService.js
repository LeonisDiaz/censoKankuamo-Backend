const dotenv = require("dotenv");
const Registration = require("../database/Registration");
const jwt = require("jsonwebtoken");

dotenv.config();

const getOneRegistration = async (id) => {
  try {
    const registration = await Registration.getOneRegistration(id);
    return registration;
  } catch (error) {
    throw error;
  }
};

const createNewRegistration = async (params) => {
  try {
    const registration = await Registration.createNewRegistration(params);
    return registration;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewRegistration,
  getOneRegistration,
};
