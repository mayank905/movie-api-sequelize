'use strict';
const { finalMovies } = require('../intermediateTables');
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('movies', finalMovies);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('movies', null, {});
  }
};
