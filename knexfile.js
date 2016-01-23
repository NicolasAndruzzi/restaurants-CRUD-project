<<<<<<< HEAD
// Update with your config settings.
=======
>>>>>>> scratch
require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/businesses'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
<<<<<<< HEAD

=======
>>>>>>> scratch
};
