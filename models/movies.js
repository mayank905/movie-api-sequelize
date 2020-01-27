'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    runtime: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    metascore: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    gross_earning_in_mil: DataTypes.STRING,
    director_id: DataTypes.INTEGER,
    actor: DataTypes.STRING,
    year: DataTypes.INTEGER
  },{
    timestamps: false,
  });
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};
