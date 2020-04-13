const Models = require('../db/models.js');

const getImages = (req, res) => {
  Models.getImages([req.params.property_id], (err, data) => {
    if (err) {
      console.log(err, 'unable to retrieve images for property (╯°□°）╯︵ ┻━┻')
    } else {
      res.status(200).send(data.rows[0])
    }
  })
}

const getImage = (req, res) => {
  Models.getImage([req.params.image_id], (err, data) => {
    if (err) {
      console.log(err, 'unable to retrieve image (╯°□°）╯︵ ┻━┻')
    } else {
      res.status(200).send(data.rows[0])
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