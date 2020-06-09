module.exports = function(sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
          },
        description: DataTypes.STRING,
        location: DataTypes.STRING,
        category: DataTypes.STRING,
        time: DataTypes.STRING
    });

    Event.associate = function(models) {
        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        }); Event.hasMany(models.Watcher, {
            onDelete: "cascade"
          });
    }


    return Event;
};
