'use strict';
const { finalDirectors } = require('../intermediateTables');
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('directors', finalDirectors);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('directors', null, {});
  }
};
