
function sum(a, b) {
  console.log(a)
  if(a === b) {
    return a;
  }
  return a + sum(a + 1, b);
}
sum(4, 6);
module.exports = sum;
