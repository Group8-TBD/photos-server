const Models = require('../db/models.js');

const getImages = (req, res) => {
  Models.getImages([req.params.property_id], (err, data) => {
    if (err) {
      console.log(err, 'unable to retrieve images for property (╯°□°）╯︵ ┻━┻')
    } else {
      res.status(200).send(data.rows)
    }
  })
}

const getImage = (req, res) => {
  Models.getImage([req.params.image_id], (err, data) => {
    if (err) {
      console.log(err, 'unable to retrieve image (╯°□°）╯︵ ┻━┻')
    } else {
      res.status(200).send(data.rows)
    }
  })
}

const postImage = (req, res) => {
  const data = req.body;
  const params = [
    data.property_id,
    data.url,
    data.description,
  ];
  Models.postImage(params, (err) => {
    if (err) {
      console.log(err, 'unable to post image (╯°□°）╯︵ ┻━┻')
    } else {
      res.status(201).send('image posted')
    }
  })
}

const postProperty = (req, res) => {
  const data = req.body;
  Models.postProperty([data.property_name], (err) => {
    if (err) {
      console.log(err, 'unable to post property (╯°□°）╯︵ ┻━┻')
    } else {
      res.status(201).send('property posted')
    }
  })
}

const updateImage = (req, res) => {
  const data = req.body;
  const params = [
    data.property_id,
    data.image_id,
    data.url,
    data.description,
  ];
  Models.updateImage(params, (err) => {
    if (err) {
      console.log(err, 'unable to update object (╯°□°）╯︵ ┻━┻')
    } else {
      res.status(200).send('object updated')
    }
  })
}

const deleteImage = (req, res) => {
  Models.deleteImage([req.params.image_id], (err) => {
    if (err) {
      console.log(err, 'unable to delete image file (╯°□°）╯︵ ┻━┻')
    } else {
      res.status(200).send('image deleted')
    }
  })
}

const deleteProperty = (req, res) => {
  Models.deleteProperty([req.params.property_id], (err) => {
    if (err) {
      console.log(err, 'failed to delete property (╯°□°）╯︵ ┻━┻')
    } else {
      res.status(200).send('property deleted')
    }
  })
}

const loadTest = (req, res) => {
  res.send('loaderio-1b81eae3cf13a2743a6b591491d17f9f')
}

module.exports = {
  getImage,
  getImages,
  postImage,
  postProperty,
  updateImage,
  deleteImage,
  deleteProperty,
  loadTest,
}
