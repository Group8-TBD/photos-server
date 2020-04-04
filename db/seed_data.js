
const bucketUrl = 'https://mtnolympusimages.s3-us-west-1.amazonaws.com/'

let createImage =  (url, i, j) => {
  url = url + i + "/" + j;
  const newImage = url + ".jpg";
  return newImage;
}

let createBundle = (url) => {
  const container = [];
  for (let i = 0; i < 10; i++) {
    let imageArray = [];
    for (let j = 0; j < 21; j++) {
      const newImage = createImage(url, i, j);
      imageArray.push(newImage)
    }
    container.push(imageArray);
  }
  return container;
}

const photoBucket = createBundle(bucketUrl);
console.log(photoBucket)
module.exports = photoBucket;