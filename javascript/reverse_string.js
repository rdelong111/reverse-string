function reverseString(str) {
  str = str.split('');
  let back = str.length - 1;
  let tempL;

  for (let front = 0; front < Math.floor(str.length / 2); front++) {
    tempL = str[front];
    str[front] = str[back];
    str[back] = tempL;
    back--;
  }

  return str.join('');
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

/*
turn string into an array
initialize variable called back to length of string minus 1
initialze a pointer called tempL

iterate over half the length of the string and initialize a variable called front and increment the variable every iteration:
  set tempL to current iteration of the str[front]
  set current FRONT iteration to equal current BACK iteration
  set current BACK iteration to equal tempL
  decrement BACK

return str that is joined back together
*/

/*
I had to split the string into an array.
I initialized and set the back counter to equal the last iteration of the array.
I initialized a pointer to be used when swapping letters.
I then set a for loop that iterates through half the length of the array.
The pointer is set to equal the current iteration of the back variable.
The current iteration of the str[front] is set to equal str[back].
the current iteration of the str[back] is set to equal the pointer.
The back counter is decremented.
The front counter is incremented.
After the for loops is done, the array is joined back together and returned.
*/