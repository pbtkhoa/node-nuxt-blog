require('dotenv').config();
const seeder = require('mongoose-seed');
const constant = require('./../config/constant');

module.exports = () =>
  new Promise(resolve => {
    let items = [
      {
        name: constant.roles.admin
      },
      {
        name: constant.roles.moderator
      }
    ];

    resolve(items);
  }).then(documents => {
    seeder.connect(
      process.env.DB_CONNECTION,
      function() {
        let data = [
          {
            model: 'Role',
            documents
          }
        ];
        seeder.loadModels(['./api/models/Role']);
        seeder.clearModels(['Role'], function() {
          seeder.populateModels(data, function() {
            seeder.disconnect();
          });
        });
      }
    );
  });
