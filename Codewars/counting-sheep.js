// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//My Solution:

function countSheeps(sheep) {
    // set empty array to count passing sheep
    let answer = []
    //create loop to check for sheep
    for (let i = 0; i < sheep.length; i++){
    //if sheep is present, push 1 to answer array, else do nothing
    sheep[i] ? answer.push(1) : null;
    }
    //after loop is finished, reduce to count sheep in array
    return(answer.reduce((a,b) => a + b, 0))
  }