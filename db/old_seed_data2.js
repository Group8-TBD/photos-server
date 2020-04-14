
const bucketUrl = 'https://mtnolympusimages.s3-us-west-1.amazonaws.com/'
const endUrl = '.jpg'

let createImage =  (i, j) => {
  url = i + "/" + j;
  const newImage = url;
  return newImage;
}

let createBundle = (url) => {
  const container = [];
  for (let i = 0; i < 100; i++) {
    let imageArray = [];
    for (let j = 0; j < 21; j++) {
      const newImage = createImage(i, j);
      imageArray.push(newImage)
    }
    container.push(imageArray);
  }
  return container;
}

const photoBucket = createBundle();
module.exports = photoBucket;