const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");

const Person = sequelize.define(
  "Person",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false,
    },
    documentId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
    },
    civilState: {
        type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { Person };

// https://sequelize.org/v3/docs/models-definition/#data-types