
const bucketUrl = 'https://tbd-sdc.s3-us-west-1.amazonaws.com/'

let createImage =  (url, i, j) => {
  const newImage = `${url}prop+(${i + 1})/image+(${j + 1}).jpg`
  return newImage;
}

let createBundle = (url) => {
  const container = [];
  for (let i = 0; i < 100; i++) {
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
module.exports = photoBucket;