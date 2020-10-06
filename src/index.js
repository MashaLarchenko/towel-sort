
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix === []) return []
  const newArr = matrix.map((item, idx) => {
    if (idx % 2 !== 0) return item.reverse()
    return item;
  });
  return newArr.flat(1);
}
