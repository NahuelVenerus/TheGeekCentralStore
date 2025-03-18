const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  async up(queryInterface) {
    const userCount = await queryInterface.rawSelect("users", {}, ["id"]);

    if (!userCount) {
      await queryInterface.bulkInsert("users", [
        {
          username: "nahuel123",
          name: "Nahuel",
          lastname: "Gómez",
          address: "Calle Falsa 123",
          zip_code: 1234,
          city: "Buenos Aires",
          email: "nahuel@example.com",
          password: await bcrypt.hash(process.env.NAHUE_PASSWORD, 10),
          is_admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "admin",
          name: "Admin",
          lastname: "User",
          address: "Admin Street 999",
          zip_code: 9999,
          city: "Admin City",
          email: "admin@example.com",
          password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
          is_admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
    
    const productCount = await queryInterface.rawSelect("products", {}, ["id"]);

    if (!productCount) {
      await queryInterface.bulkInsert("products", [
        {
          name: "Muñeco Goku",
          price: 5000,
          description: "Figura de acción de Goku",
          rating: 4.5,
          image: "goku.jpg",
          total_sales: 0,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Remera Star Wars",
          price: 8000,
          description: "Remera con logo de Star Wars",
          rating: 4.7,
          image: "starwars-shirt.jpg",
          total_sales: 0,
          stock: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", {}, {});
    await queryInterface.bulkDelete("products", {}, {});
  },
};
