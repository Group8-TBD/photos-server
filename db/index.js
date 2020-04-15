const pg = require ('pg');

const pool = new pg.Pool({
  user: 'power_user',
  host: 'ec2-54-215-233-159.us-west-1.compute.amazonaws.com',
  port: 5432,
  password: 'password',
  database: 'properties',
});

pool.on('error', (err, client) => {
  console.error('unable to turn on pool (╯°□°）╯︵ ┻━┻', err);
  process.exit(-1);
});

pool.connect((err) => {
  if (err) {
    console.error('cannot connect to pool (╯°□°）╯︵ ┻━┻')
  } else {
    console.log('Connection with PostGreSQL established')
  }
})

module.exports = pool;
