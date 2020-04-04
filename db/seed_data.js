const faker = require('faker')

const bucketUrl = 'https://mtnolympusimages.s3-us-west-1.amazonaws.com/'

let createImage =  (url, i, j) => {
  let description = faker.lorem.sentence();
  url = url + i + "/" + j;
  const newImage = {property_id: j, url: url + ".jpg", description: description};
  return newImage;
}

let createBundle = (url) => {
  for (let i = 0; i < 100; i++) {
    let imageArray = [];
    for (let j = 0; j < 21; j++) {
      const newImage = createImage(url, i, j);
      imageArray.push(newImage)
    }
  }
  return imageArray
}

const photoBucket = createBundle(bucketUrl);

module.exports = photoBucket;