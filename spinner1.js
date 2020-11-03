const speed = 1000;
const cycles = 4;
for (let i = 0; i < cycles; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, (speed * i));
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, (speed * i) + Math.floor(speed / 4));
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, (speed * i) + Math.floor(speed / 4) * 2);
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, (speed * i) + Math.floor(speed / 4) * 3);
}
setTimeout(() => {
  process.stdout.write('\r|   ');
}, (speed * cycles));