let main = document.getElementById("main");
let div1 = document.getElementById("d1");
let div2 = document.getElementById("d2");
let div3 = document.getElementById("d3");

let count_you = document.getElementById("you");
let count_comp = document.getElementById("comp");

//initial win count
let you_win = 0;
let comp_win = 0;

//initial scoreboard
count_you.innerHTML = you_win;
count_comp.innerHTML = comp_win;

main.addEventListener("keydown", (e) => {
  let you = parseInt(e.key);

  switch (e.key) {
    case "0": //resets the game
      you_win = 0;
      comp_win = 0;
      count_you.innerHTML = you_win;
      count_comp.innerHTML = comp_win;
      div1.innerHTML = "";
      div2.innerHTML = "";
      div3.innerHTML = "";
      break;
    case "1":
    case "2": 
    case "3":
      //all three buttons start the play
      div1.innerHTML = toRPS(you); //displays your choice

      //randomizes and displays computer choice
      let comp = Math.ceil(Math.random() * 3);
      div2.innerHTML = toRPS(comp);

      //checks for win
      if (you == comp - 1 || you == comp + 2) {
        div3.innerHTML = "YOU LOSE!";
        comp_win++;
      } else if (you == comp) {
        div3.innerHTML = "DRAW!";
      } else {
        div3.innerHTML = "YOU WIN!";
        you_win++;
      }

      //updates scoreboard
      count_you.innerHTML = you_win;
      count_comp.innerHTML = comp_win;
      break;
  }

  
});

//function to return choice
function toRPS(n) {
  switch (n) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}
