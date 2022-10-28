// imports: sequelize library, db connection 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

//create Tag model
class Tag extends Model {}

//define columns, fields for Tag model
Tag.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tag_name: {
        type: DataTypes.STRING
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Tag',
  }
)

module.exports = Tag;
