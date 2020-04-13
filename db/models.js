const db = require('./index.js');

const getImages = (property_id, callback) => {
  const query = `SELECT * FROM housing.properties WHERE property_id = $1`;
  db.query(query, property_id, callback);
}

const getImage = (image_id, callback) => {
  const query = `SELECT * FROM housing.images WHERE image_id = $1`;
  db.query(query, image_id, callback);
}

const postImage = (params, callback) => {
  const query = `INSERT INTO housing.images (property_id, url, description) VALUES( $1, $2, $3)`;
  db.query(query, params, callback);
}

// const test = getImage([100], (err, data) => {
//   if (err) {
//     console.log(err, 'failed')
//   } else {
//     console.log(data.rows[0])
//   }
// })

const array = [1, '0,20', '(╯°□°）╯︵ ┻━┻']

const test = postImage(array, (err) => {
  if (err) {
    console.log(err, 'failed')
  } else {
    console.log('success')
  }
})