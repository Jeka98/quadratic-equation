module.exports = function solveEquation(equation) {
  // your implementation

  let a = equation.split('*')[0].replace(/\s/g, '');
  let b = equation.split('*')[1].replace('x^2','').replace(/\s/g, '');
  let c = equation.split('*')[2].replace('x','').replace(/\s/g, '');

  let D = b * b - 4 * a * c;

  if(D > 0){
    let x1 = Math.round((-b - Math.sqrt(D)) / (2*a));
    let x2 = Math.round((-b + Math.sqrt(D)) / (2*a));
    let result = [x2,x1];
    return result.sort((x,y) => (x-y));
  }
  else if(D == 0){
    return -b /2 * a;
  }
  else{return null;}
}