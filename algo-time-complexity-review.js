
//Notes before hand
/*
Constant: increasing the problem size does not change the number of operations
ex: we have a list of students in abc order and we need to find a name, 2 operations no
matter the size of the input

Linear: The number of operations porporational to problem size
ex: give a copy of the directory of students, make a list of everyone in cohort 48
#100 students, 100 operations
#200 students, 200 operations
and so on.

Quadratic: the number of operations is porporational to the square of the problem size

Logarithmic: Multiplying the problem size by constant adds the same number of operations
ex: given the name of a student determine what cohort they are by dividng the book in half repeatedly
#8 student, 3 operations
#16 students, 4 operations
#128 students, 7 operations
How many times do I have to divide n by c to reach n

Expontential: the number of operations is proportional to some constant raised
its just n to the power of one more number for each time n is increased
n^2, n^3, n^4, etc..

Determining time complexity:
1. Determine what variables represent problem size(n)
2. Write number of operations in terms of n
  -Lines in series are ADDED
  -Lines nested in other fucntion calls or loops are MULTIPLIED
3. Find leading term and drop coefficients

NativeJS methods, think about how they are built
Recursive functions(draw a tree)


Given a copy of the directory, make a list of everyone from cohort 21.
for each page n
  if cohort is 21 *1*
    add to list *1*
    then you would count the if loop as one and the for loop as n and list as one
    n * (1x1)
    n + n
    2n
    o(n)
*/


/////////// Prompt 1 ///////////
/////////// time complexity: Linear
function findMax(array){
  var max = -Infinity;
  for (var i = 0; i < array.length; i++){ //n
    if (array[i] > max){ //1
      max = array[i]; //1
    }
  }
  return max;
}
//n * (1*1)
//2n
//linear
/////////// Prompt 2 ///////////
/////////// time complexity: Linear
function contains(array, target){
  return array.indexOf(target) > -1;
}
//linear
//for loop in indexOf is n
//target is 1
//worst case if target is the last input in the array
/////////// Prompt 3 ///////////
/////////// time complexity: Linear
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1;
}
//slice n
//indexOf is n
//target is 1
//linear
//n + n * 1
//2n

/////////// Prompt 4 ///////////
/////////// time complexity:
function square(array){
  for (var i = 0; i < 3; i++){
    array[i] = array[i] * array[i];
  }
  return array;
}
//constant
//for loop is n
//array[i] is 1

/////////// Prompt 5 ///////////
/////////// time complexity:
function repeat(array){
  var repeat = [];
  for (var j = 0; j < 10; j++){
    repeat[j] = [];
    for (var i = 0; i < array.length; i++){
      repeat[j].push(array[i]);
    }
  }
  return repeat;
}
//what if we replace 10 with a parameter?
//if 10 is replaced with parameter otherwise it is linear
//j is a n
//i is a n
//push is a 1
//repeat is a 1
//n * n * 1 * 1
//2n * 2
//4n
//quadratic

/////////// Prompt 6 ///////////
/////////// time complexity:
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }
  for (var i = num1; i > 1; i--){
    if (num1 % i === 0 && num2 % i === 0){
      return i;
    }
  }
  return 1;
}
//if statement 1
//for loop is n
//if statement is 1
//return is 1
//n * 1*1*1*1
//n4
//linear

/////////// Prompt 7 ///////////
/////////// time complexity:
function countChar(string){
  var counts = {};
  var currChar, currCharCount;
  for (var i = 0; i < string.length; i++){
    currChar = string[i];
    currCharCount = 1;
    for (var j = i+1; j < string.length; j++){
      if (currChar === string[j]){
        currCharCount++;
      }
    }
    if (!counts.hasOwnProperty(currChar)){
      counts[currChar] = currCharCount;
    }
  }
  return counts;
}
//for loop is n
//assignment of currs is 1
//for loops is n
//if is 1
//++ is 1
//if is 1
//assignment is 1
///n * n + 1*1*1*1*1
//2n * 5
//10n
//5n
//quadratic

/////////// Prompt 8 ///////////
/////////// time complexity:
var factorial = function(num){
  if (num < 0){
    return;
  }
  if (num === 0 || num === 1){
    return 1;
  } else {
    return num * factorial(num-1);
  }
}
//if is 1
//operation is 1
//factorial call on operation is n
//linear

/////////// Prompt 9 ///////////
/////////// time complexity:
function tournament(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    results = hotPotato(players);
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes,
    //the player in each room holding the potato is the winner
    //and all winners get teleported to the results array
    return tournament(results);
  }
}
//else is 1
//assignment is 1
//tournament call is n
//linear, is actually log n

/////////// Prompt 10 ///////////
/////////// time complexity:
function allPasswords(allowedChars, maxLength){
  var results = [];

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){
      results.push(currentAttempt.join(""));
    }
    if (currentAttempt.length <= maxLength){
      for (var i = 0; i < allowedChars.length; i++){
        findPassword(currentAttempt.concat(allowedChars[i]));
      }
    }
  }

  findPassword([]);
  return results;
}
//if is 1
//push is 1
//if is 1
//for is n
//expontential due to calling itself again and concat

/////////// Prompt 11 ///////////
/////////// time complexity:
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates);
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    }
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    }
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }
//5
  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
  //2
}
//Logarithmic

/////////// Bonus! ///////////
/////////// time complexity:
//this will require some math to determine

function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){
      results.push(hotPotato([players[i], players[i+1], players[i+2]]));
      //assume hotPotato is a function where
      //the three players at a time must play hot potato for 5 minutes.
      //the player in the room holding the potato is the winner
      //and gets returned from the function
    }
    return tournament(results);
  }
}
//if is 1
//for is n
//calling hot potato is 1
//Logarithmic
