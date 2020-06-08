module.exports = function(sequelize, DataTypes) {
    const Watcher = sequelize.define("Watcher", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
        eventDay: DataTypes.BOOLEAN,
        eventUpdate: DataTypes.BOOLEAN,
        eventOrganizer: DataTypes.BOOLEAN,
        eventFuture: DataTypes.BOOLEAN
    });

    Watcher.associate = function(models) {
        Watcher.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Watcher;
};
