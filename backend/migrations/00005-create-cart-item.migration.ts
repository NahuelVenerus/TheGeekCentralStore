'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart_item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products', // Hace referencia a la tabla 'products'
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      shoppingCartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'shopping_carts', // Hace referencia a la tabla 'shopping_carts'
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cart_item');
  }
};
