import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 500 }, // below normal load
    // { duration: '5m', target: 100 },
    { duration: '1m', target: 1000 }, // normal load
    { duration: '30s', target: 500 },
    // { duration: '2m', target: 1000 }, // around the breaking point
    // { duration: '5m', target: 300 },
    // { duration: '2m', target: 2000 }, // beyond the breaking point
    // { duration: '2m', target: 1000 },
    // { duration: '2m', target: 500 }, // scale down. Recovery stagenpm.
  ],
};

let randomId = () => {
  return Math.floor(Math.random() * (5000000 - 1) + 1)
}

export default function() {
  const BASE_URL = 'http://localhost:3001'; // make sure this is not production

  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/properties/${randomId()}`,
      null,
      { tags: { name: 'get all images' } },
    ],
    // [
    //   'GET',
    //   `${BASE_URL}/images/10`,
    //   null,
    //   { tags: { name: 'get one image' } },
    // ],
    // [
    //   'POST',
    //   `${BASE_URL}/images`,
    //   null,
    //   { tags: { name: 'post one image' } },
    // ],
    // [
    //   'DELETE',
    //   `${BASE_URL}/images/10`,
    //   null,
    //   { tags: { name: 'delete one image' } },
    // ],
  ]);

  sleep(1);
}