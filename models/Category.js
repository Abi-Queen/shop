// imports: sequelize library, db connection 
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')

//create Category model
class Category extends Model {} 

//define columns, fields for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    catetory_name: {
      type: DataTypes.STRING,
      // allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category',
  }
)

module.exports = Category;
