const socialUrl = {
  FACEBOOK: 'https://facebook.com',
  LINE: 'https://line.me',
  INSTAGRAM: 'https://instagram.com'
}

// This challenge is just FYI
// Q1: get social channel and return url avoid using if/else or switch case
// console.log(socialUrl['FACEBOOK'])

const channel = 'INSTAGRAM';
const [, url] = Object.entries(socialUrl).find(([key]) => key === channel);
console.log(url); // 'https://instagram.com'
