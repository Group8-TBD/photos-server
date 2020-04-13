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

const postProperty = (property_name, callback) => {
  const query = `INSERT INTO housing.properties (property_name) VALUES ($1)`;
  db.query(query, property_name, callback);
}

const updateImage = (params, callback) => {
  const query = `UPDATE housing.images SET property_id = $1, url = $3, description= $4 WHERE images_id = $2`;
  db.query(query, params, callback);
}

const deleteImage = (image_id, callback) => {
  const query = `DELETE FROM housing.images WHERE image_id = $1`;
  db.query(query, image_id, callback);
}
