
CREATE KEYSPACE IF NOT EXISTS properties WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 3};

CREATE TABLE properties.images (
  property_id int,
  image_id int,
  image_link text,
  the_description text,
  PRIMARY KEY (property_id, image_id)
);
