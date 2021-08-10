const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Ejemplo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        /*     static associate(models) {
      // define association here

    } */
    }

    Ejemplo.init(
        {
            title: DataTypes.STRING,
            body: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'Ejemplo',
            tableName: 'ejemplos',
        }
    )
    return Ejemplo
}
