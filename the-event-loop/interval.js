var counter = 3;

var count = () => {
  console.log(counter);
  counter--;
  if (counter < 0) {
    console.log('Blast off!');
    clearInterval(interval);
  }
};

var interval = setInterval(count, 1000);
