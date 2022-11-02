const { INTEGER } = require('sequelize')
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

//create ProductTag model
class ProductTag extends Model {}

//define columns, fields for ProductTag model
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: '',
  }
)

module.exports = ProductTag;
