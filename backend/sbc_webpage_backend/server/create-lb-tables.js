'use strict';
const server = require('./server');
const ds = server.dataSources.elephant;
const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log(
    'Loopback tables [' + lbTables + '] created in ',
    ds.adapter.name
  );
  ds.disconnect();
});
