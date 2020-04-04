// var AWS = require('aws-sdk');
// var s3 = new AWS.S3();
var faker = require('faker');
var db = require('./index.js')
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mtnOlympus');

//Set S3 Bucket URL
var url = 'https://mtnolympusimages.s3-us-west-1.amazonaws.com/'

//************SEED DATABASE****************\\

//Seed 100 listings
var seedDatabase = (url) => {
  for (var i = 0; i < 5; i++) {
    var imageArray = [];
    for (var j =0; j < 21; j++) {
      var newImage = createImage(url, i, j);
      imageArray.push(newImage)
    }
    // addToDb(imageArray, i)
    console.log(imageArray)

  }
  return;
}

//create a single image url with description
var createImage = (url, i, j) => {
  //create image description
  var description = faker.lorem.sentence();
  url = url + i + "/" + j;
  var newImage = {index:j, url: url + ".jpg", description: description};
  return newImage
}

//adds single listing to dataBase
var addToDb = (imageArray, index) => {
  var propId = index;
  var newListing = db.Listing ({propId:index, images: imageArray});
  newListing.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(index, 'success!');
    }
  })
}

seedDatabase(url);



