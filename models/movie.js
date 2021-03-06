'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.movie.hasMany(models.thread)
    }
  };
  movie.init({
    title: DataTypes.STRING,
    original_title: DataTypes.STRING,
    original_title_romanised: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    director: DataTypes.STRING,
    producer: DataTypes.STRING,
    release_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};