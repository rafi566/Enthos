'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('media', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoincrement: true,
          allowNull: false
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allownull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allownull: false
        }
      });
     
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.dropTable('media');
     
  }
};
