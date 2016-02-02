
require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    // Swap out businesses below for name of database being used
    connection: 'postgres://localhost/businesses'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
 
