const registrationService = require("../services/registrationService");

const getOneRegistration = async (req, res) => {
  //console.log(req);
  const {params: {id}} = req;
  try {
    const data = await registrationService.getOneRegistration(id);
    res.status(200).send({ status: "OK", data: data });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
// 400 Bad Request, de parte del cliente
const createNewRegistration = async (req, res) => {
  const {id, documentId, nombre, apellido, phone, email, birthDate, gender, civilState} = req.body;
  try {
    const createdRegistration = await registrationService.createNewRegistration({id, documentId, nombre, apellido, phone, email, birthDate, gender, civilState});
    res.send({ status: "OK", data: createdRegistration });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getOneRegistration,
  createNewRegistration,
};
