 start =()=> {
  let counting = 0;
  cc = (card) => {

  (card === 2 || card == 3 || card === 4 || card === 5|| card === 6) ?
    counting ++:

 (card === 7 || card === 8 || card === 9)?
    counting:

  (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" )?
    counting --: null

  result = counting + ((counting>0)? ' Bet' : ' Hold');
  return counting;
 
}

document.querySelector("#seq1",cc(2) + cc(3) + cc(4)+ cc(5)+ cc(6) ).textContent = result;

}
function restart(clear) {
  document.querySelector("#seq1").textContent = " ";
}

