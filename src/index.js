
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (!Array.isArray(matrix) || matrix.length === 0) {
    return result;
  }


  matrix.map((arr, i) => i%2 == 0 ? result.push(...arr) : result.push(...arr.reverse()))

  return result;
}
