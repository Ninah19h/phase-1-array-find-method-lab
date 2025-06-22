// code your solution here
function superbowlWin(array) {
  const win = array.find(game => game.result === "W");
  return win ? win.year : undefined;
}

console.log(superbowlWin)