const colors = ["#56E39F", "#D5573B", "#2660A4", "#e19a26", "#50A2A7", "#BCE784"];

export function getColors() {
  let generatedColors = [];
  
  while(generatedColors.length < 6) {
    let rand = colors[Math.floor(Math.random()*6)];
    if(!inArray(generatedColors, rand)) {
      generatedColors.push(rand);
    }
  }
  return generatedColors;
}

// function getRand(arr, genArr) {
//   var rand = arr[Math.floor(Math.random()*arr.length)];
//   if (!inArray(genArr, rand)) {
//     genArr.push(rand);
//     return rand;
//   }
//   return getRand(arr);
// }

function inArray(arr, el) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === el) return true;
  }
  return false;
}

export default colors;