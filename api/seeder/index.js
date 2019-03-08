require('./../config/mongoose')
const roleSeeder = require('./roleSeeder');
const assignUserRole = require('./assignUserRole');

async function dbseed() {
  await roleSeeder();
  // await assignUserRole('nhimspec', 'ADMIN');
  console.log('data generate successfull');
}

dbseed();
