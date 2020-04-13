var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mtnOlympus');

var listingSchema = mongoose.Schema({
  propId: Number,
  images: [{
    index: Number,
    url: String,
    description: String}]
});

var Listing = mongoose.model('Listing', listingSchema);

//Query the database for photos from specific propId
var getListing = (index, callback) => {
  var listing = Listing.find({propId: index}, (err,results) => {
    if (err) {
      callback(err, '')
    } else {
      callback(null, results)
    }
  })
}

module.exports  = {
  listingSchema,
  Listing,
  getListing
}

