'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rating: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_sales: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
