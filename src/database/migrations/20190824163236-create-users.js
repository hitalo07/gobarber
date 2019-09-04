module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allow: false,
      },
      email: {
        type: Sequelize.STRING,
        allow: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allow: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allow: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
