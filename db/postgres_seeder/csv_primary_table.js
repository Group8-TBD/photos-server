const photoBucket = require('../seed_data.js');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const csvWriter = createCsvWriter({
  path: './seed_records/primary_seed.csv',
  header: [
    { id: 'property_id', title: 'property_id' },
    { id: 'property_name', title: 'property_name'}
  ]
})

let propID = 1;

const createRecords = () => {
  let records = [];
  for (var i = 0; i < photoBucket.length; i++) {
    let record = {
      property_id: propID,
      property_name: faker.lorem.text(),
    }
    records.push(record)
    propID++
  }
  return records;
}

const copies = 50000
const checkpointOne = Math.floor(copies * .25)
const checkpointTwo = Math.floor(copies * .5)
const checkpointThree = Math.floor(copies * .75)
let count = 0;

let copyRecords = () => {
  if (count < copies) {
    let records = createRecords();
    if (count === checkpointOne || count === checkpointTwo || count === checkpointThree) {
      console.log(`${count} copies has been made`)
    }
    csvWriter.writeRecords(records)
      .then(() => {
        count++
        copyRecords();
      })
      .catch((err) => {
        console.log(err, `there is an error on copy # ${count} `)
      })
  } else {
    console.timeEnd('makeCopies')
    console.log(`Mission Complete, ${count} copies has been made`)
  }
}
console.time('makeCopies')
console.log('initiating copier')
copyRecords();