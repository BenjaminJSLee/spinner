const speed = 1000;
const cycles = 1;
for (let i = 0; i < cycles * 2; i++) {
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
}, (speed * cycles * 2));