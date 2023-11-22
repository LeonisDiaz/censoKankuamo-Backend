const { Person } = require("../models/person.model");

const getOneRegistration = async (id) => {
  try {
    const registration = await Person.findOne({ where: { id: id } });
    return registration;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewRegistration = async (newRegistration) => {
  try {
    const createdRegistration = await Person.create(newRegistration);
    return createdRegistration;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = { createNewRegistration, getOneRegistration };
