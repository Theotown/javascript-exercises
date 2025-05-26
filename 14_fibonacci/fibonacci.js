const fibonacci = function(positionInput) {
     let index;
  if (typeof positionInput !== 'number') {
    index = parseInt(positionInput);
  } else {
    index = positionInput;
  }

 if (index < 0) return "OOPS";
  if (index === 0) return 0;

  let previous = 1;
  let beforePrevious = 0;

  for (let step = 2; step <= index; step++) {
    let nextValue = previous + beforePrevious;
    beforePrevious = previous;
    previous = nextValue;
  }

  return previous;
};

// Do not edit below this line
module.exports = fibonacci;
