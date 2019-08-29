'use strict';

// var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, Sequelize) => {

  //'Contacts' table with user submitted information
  var Contacts = sequelize.define("Contacts", {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Contacts;
}