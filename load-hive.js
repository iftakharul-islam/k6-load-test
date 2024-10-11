// load-test.js
import http from 'k6/http';
import { sleep, check } from 'k6';
import { urls } from './url.js'; // Import the URLs list

export const options = {
  stages: [
    { duration: '1m', target: 50 }, // Ramp-up to 50 users over 1 minute
    { duration: '3m', target: 50 }, // Stay at 50 users for 3 minutes
    { duration: '1m', target: 0 },  // Ramp-down to 0 users
  ],
};

export default function () {
//   const res = http.get('https://wphive.com/compare/');

 // Select a random URL from the list
 const randomIndex = Math.floor(Math.random() * urls.length);
 const url = urls[randomIndex];

 // Perform the HTTP GET request
 const res = http.get(url);

  // Optional: Check if the request was successful
  check(res, {
    'status was 200': (r) => r.status === 200,
  });

  sleep(1); // Wait for 1 second between iterations
}
