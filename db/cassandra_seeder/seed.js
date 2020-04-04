const photoBucket = require('../seed_data.js');
const createCvsWriter = require('csv-writer').createObjectCsvWriter;


const csvWriter = createCsvWriter({
  path: './db/cassandra_seeder/seed_records/files.csv',
  header: [
    {id: 'property_id', title: 'property_id'},
    {id: 'url', title: 'url'},
    {id: 'description', title: 'description'}
  ]
})

