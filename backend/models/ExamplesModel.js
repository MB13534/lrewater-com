module.exports = (sequelize, DataTypes) => {
  const { TEXT, INTEGER, BOOLEAN } = DataTypes;
  const Examples = sequelize.define(
    'Examples',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: TEXT,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: TEXT,
      },
      active: {
        type: BOOLEAN,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      defaultScope: {
        where: {
          active: true,
        },
      },
      schema: 'web',
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    },
  );

  /*
  Examples.associate = function(models) {
    Examples.belongsTo(models.ExampleTypes, { foreignKey: 'example_type_id' });
    Examples.belongsToMany(models.Locations, {
      through: 'ExamplesLocations',
      foreignKey: 'example_id',
      otherKey: 'location_id',
      timestamps: false,
      as: 'Locations',
    });
    Examples.hasMany(models.Orders, {
      foreignKey: 'example_id',
      timestamps: false,
      as: 'Orders'
    });
  };
  */

  return Examples;
};
