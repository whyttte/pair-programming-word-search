// pair programmed by @quinnvoker and @whyttte

const wordSearch = (letters, word) => {
    if (letters.length < 1) {
      return;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    // vertical
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  
    return false;
};
  
const transpose = function(matrix) {
    const transposedArr = [];
    for (let x = 0; x < matrix[0].length; x++) {
      transposedArr[x] = [];
      for (let y = 0; y < matrix.length; y++) {
        transposedArr[x][y] = matrix[y][x];
      }
    }
    return transposedArr;
};
  
module.exports = wordSearch;