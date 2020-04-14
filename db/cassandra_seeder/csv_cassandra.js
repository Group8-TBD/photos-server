const photoBucket = require('../seed_data.js');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')



const csvWriter = createCsvWriter({
  path: './seed_records/seed_data.csv',
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

const copies = 100000
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
      .then(()=> {
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
