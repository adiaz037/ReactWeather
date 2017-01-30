//Challenge Area
//Step one - Define the promsi function
function addPromise (a,b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & B need to be numbers');
    }
  });
}

//Step 2 - call the function successfully
addPromise(2, 3).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise(2, 'abe').then(function(sum) {
  console.log('This message should not show up');
}, function(err) {
  console.log('This should appear', err);
});
