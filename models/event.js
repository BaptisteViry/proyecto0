const { DataTypes, Model } = require('sequelize');

/**
 * This class represents a barman.
 */
class Event extends Model {

    /**
     * Initialization function.
     *
     * @param sequelize
     * @returns {Model}
     */
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            category: {
                type: DataTypes.STRING,
            },

            place: {
                type: DataTypes.STRING,
            },

            address: {
                type: DataTypes.STRING,
            },

            initDate: {
                type: DataTypes.STRING
            },

            endDate: {
                type: DataTypes.STRING,
            },

            type: {
                type: DataTypes.TEXT
            },

        }, {
            sequelize,

            name: {
                plural: 'events',
                singular: 'event'
            }
        });
    }
}
