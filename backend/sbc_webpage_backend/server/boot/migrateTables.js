'use strict';
module.exports = migrateTables;

function migrateTables(server) {
  const storage = server.datasources.elephant;

  storage.automigrate();
}
