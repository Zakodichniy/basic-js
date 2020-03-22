module.exports = function countCats (matrix) {
  let count = 0;
  matrix.forEach(function(arr){
    let result = arr.filter(function(item){
      return item === "^^";
      
    })
    count += result.length;
  })
  return count;
};
