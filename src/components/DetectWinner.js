const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

function detectWinner(p) {
  // CIRCLE player wins

  //horizonal win
  if (p[0] === CIRCLE && p[1] === CIRCLE && p[2] === CIRCLE)
    return CIRCLE;
  if (p[3] === CIRCLE && p[4] === CIRCLE && p[5] === CIRCLE)
    return CIRCLE;
  if (p[6] === CIRCLE && p[7] === CIRCLE && p[8] === CIRCLE)
    return CIRCLE;

  //vertical win
  if (p[0] === CIRCLE && p[3] === CIRCLE && p[6] === CIRCLE)
    return CIRCLE;
  if (p[1] === CIRCLE && p[4] === CIRCLE && p[7] === CIRCLE)
    return CIRCLE;
  if (p[2] === CIRCLE && p[5] === CIRCLE && p[8] === CIRCLE)
    return CIRCLE;
  // cross win
  if (p[0] === CIRCLE && p[4] === CIRCLE && p[8] === CIRCLE)
    return CIRCLE;
  if (p[2] === CIRCLE && p[4] === CIRCLE && p[6] === CIRCLE)
    return CIRCLE;
  
  // CROSS player wins

  //horizonal win
  if (p[0] === CROSS && p[1] === CROSS && p[2] === CROSS)
    return CROSS;
  if (p[3] === CROSS && p[4] === CROSS && p[5] === CROSS)
    return CROSS;
  if (p[6] === CROSS && p[7] === CROSS && p[8] === CROSS)
    return CROSS;

  //vertical win
  if (p[0] === CROSS && p[3] === CROSS && p[6] === CROSS)
    return CROSS;
  if (p[1] === CROSS && p[4] === CROSS && p[7] === CROSS)
    return CROSS;
  if (p[2] === CROSS && p[5] === CROSS && p[8] === CROSS)
    return CROSS;
  // cross win
  if (p[0] === CROSS && p[4] === CROSS && p[8] === CROSS)
    return CROSS;
  if (p[2] === CROSS && p[4] === CROSS && p[6] === CROSS)
    return CROSS;

  // tie
  if(p.every(position => position !== EMPTY)) return 'TIE'; 
}

export default detectWinner;