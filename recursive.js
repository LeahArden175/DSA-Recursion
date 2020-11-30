//1. Counting Sheep! Write a function that counts sheep jumping over fence
const countSheep = function(totalSheep) {
    if(totalSheep < 0) {
      console.log('there are no sheep to count')
    } else if (totalSheep > 0) {
        console.log(`${totalSheep}: Another sheep jumps over the fence`);
        countSheep(totalSheep - 1)
    } else {
      console.log(`All sheep jumped over the fence`)
    }
  }
  
  let allSheep = 3
  console.log(countSheep(allSheep))