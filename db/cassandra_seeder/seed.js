const photoBucket = require('../seed_data.js');
const createCvsWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')



const csvWriter = createCsvWriter({
  path: './db/cassandra_seeder/seed_records/files.csv',
  header: [
    {id: 'property_id', title: 'property_id'},
    {id: 'image_id', title: 'image_id'},
    {id: 'url', title: 'url'},
    {id: 'description', title: 'description'}
  ]
})

let propID = 1;
let imageID = 1;

const createRecords = () => {
  let records = [];
  for (var i = 0; i < photoBucket.length; i++) {
    for (var j = 0; j < photoBucket[i].length; j++) {
      let imageUrl = photoBucket[i][j];
      let record = {
        property_id: propID,
        image_id: imageID,
        url: imageUrl,
        description: faker.lorem.sentence(),
      }
      records.push(record)
      imageID++
    }
    propID++
  }
  return records;
}

