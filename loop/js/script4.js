//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * *

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let k = i; k < 5 ; k++) {
    str += "  ";
  }
  for (let j = i; j >= 1; j--) {
    str += "*" + " ";
  }
  console.log(str);
}