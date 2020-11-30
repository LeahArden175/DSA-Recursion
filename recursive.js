//1. Counting Sheep! Write a function that counts sheep jumping over fence
const countSheep = function (totalSheep) {
  if (totalSheep < 0) {
    return "there are no sheep to count";
  } else if (totalSheep > 0) {
    return (
      `${totalSheep}: Another sheep jumps over the fence \n` +
      countSheep(totalSheep - 1)
    );
  } else {
    return `All sheep jumped over the fence`;
  }
};

console.log(countSheep(4));

//2. Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent.

const powerCalculator = function (base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return "Exponent should be >= 0";
  } else {
    return base * powerCalculator(base, exp - 1);
  }
};

console.log(powerCalculator(10, 2));

//3. Write a function that reverses a string.
//Take a string as input, reverse the string, and return the new string.

const reverseString = function (string) {
  if (!string) {
    return "";
  }
  return reverseString(string.slice(1)) + string[0];
};

console.log(reverseString("hello"));

//4. Calculate the nth triangular number

//TODO!!!!!!!!!!

//5. String Splitter

const splitter = function (string, separator) {
  if (!string) {
    return "";
  }
  let number = string[0];

  if (number === separator) {
    number = "";
  }
  return number + splitter(string.slice(1), separator);
};

console.log(splitter("02/20/2020", "/")); //NOT CORRECT BUT CLOSE

//6. Fibonacci
let fibonacci = function (num) {
  if (num <= 0) {
    return [];
  }
  if (num === 1) {
    return [1];
  }
  if (num === 2) {
    return [1, 1];
  }

  const last = fibonacci(num - 1);
  return [...last, last[last.length - 1] + last[last.length - 2]];
};

console.log(fibonacci(7)); //[ 1, 1, 2, 3, 5, 8, 13 ]

//7. Factorial!  Write a recursive function that finds the factorial of a given number.
const factorial = function (num) {
  if (num < 0) {
    return "num must be > 0";
  } else if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));

//8. Find a way out of the maze
let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];
let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

let escape = function (maze, pos = 0, row = 0, col = 0, dir = "S", path = []) {
  if (col < 0 || row < 0) return;
  else if (col >= maze[0].length || row >= maze.length) return;

  path[pos] = dir;
  pos++;

  if (maze[row][col] === "e") {
    console.log(path);
    return;
  }

  if (maze[row][col] === " ") {
    // The current cell is free. Mark it as visited
    maze[row][col] = "s";
    // Invoke recursion ot explore all possible directions
    escape(maze, pos, row - 1, col, "U", path); // Up
    escape(maze, pos, row, col + 1, "R", path); // Right
    escape(maze, pos, row + 1, col, "D", path); // Down
    escape(maze, pos, row, col - 1, "L", path); // Left
  }
  // Remove the last direction from the path
  pos--;
};

escape(maze); //[ 'S', 'R', 'R', 'D', 'D', 'R', 'R', 'U', 'U', 'R', 'R', 'D', 'D', 'D', 'D' ]
//[ 'S', 'R', 'R', 'D', 'D', 'L', 'L', 'D', 'D', 'R', 'R', 'R', 'R', 'R', 'R' ]

escape(mySmallMaze); // [ 'S', 'R', 'R', 'D', 'D' ]
// [ 'S', 'D', 'D', 'R', 'R' ]


//9.  Find ALL the ways out of the maze

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let escape = function(maze, pos=0, row=0, col=0, dir='S' , path = []) {
  if (col < 0 || row < 0) return;
  else if (col >= maze[0].length || row >= maze.length) return;
  
  path[pos] = dir;
  pos++;

  if(maze[row][col] === 'e'){
    console.log(path);
    return;
  }

  if(maze[row][col] === ' '){
    // The current cell is free. Mark it as visited
    maze[row][col] = 's';
    // Invoke recursion ot explore all possible directions
    escape(maze, pos, row - 1, col, 'U', path); // Up
    escape(maze, pos, row, col + 1, 'R', path); // Right
    escape(maze, pos, row + 1, col, 'D', path); // Down
    escape(maze, pos, row, col - 1, 'L', path); // Left
    // Mark back the current cell as free
    maze[row][col] = ' ';
  }
  // Remove the last direction from the path
  pos--;
}

escape(maze)