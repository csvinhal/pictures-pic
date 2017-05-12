/**
 * Created by crist on 11/05/2017.
 */
let Datastore = require('nedb')
  ,dbName = 'data.db'
  ,db;

if(!db) {
  db = new Datastore({
    filename: dbName,
    autoload: true
  });
  console.log('Banco ' + dbName + ' pronto para uso')
}

module.exports = db;