'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      runtime: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      metascore: {
        type: Sequelize.STRING
      },
      votes: {
        type: Sequelize.INTEGER
      },
      gross_earning_in_mil: {
        type: Sequelize.STRING
      },
      director_id: {
        type: Sequelize.INTEGER
      },
      actor: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
    },
      {
        timestamps: false
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};
