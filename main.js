<!DOCTYPE html>

<html>

            <head>

                        <title>Tic Tac Toe</title>

            <style>

    button {

            font-size:20px;

            height:50px;

            width:50px;

                grid-template-columns: repeat(8, auto);

                grid-auto-flow: dense;
		background-color: black

}

               {

               img:nth-child(8n+5) {

                grid-column: 4;

               }

 

            }

            .winclass{

              background-color: red;

            }

   </style>       

            </head>

                        <body onload="createButtons(8, 8)">

                        <div id="buttonArea">

                        </div>

                        <input type="button" id="btnNewGame" onClick="resetButtons()" value="Reset Buttons"/></input>

                        <script>

                                    function createButtons(row,col){

                                    var counter = 1;

                                    var element = document.getElementById("buttonArea");

                                    //create the rows

                                                for (countR = 1; countR <= row; countR++){

                                                //create the columns

                                                            for(countC = 1; countC <= col; countC++){

                                                                        var newButton = document.createElement("button");

                                                                        newButton.setAttribute("id", "btn"+ counter);

                                                                        newButton.setAttribute("type", "button");

                                                                        newButton.setAttribute("onClick", "selected(this)");

                                                                        element.appendChild(newButton);

                                                                        counter++;

                                                            }

                                                            var breakLine = document.createElement("br");

                                                            element.appendChild(breakLine);

                                                }

                                    }

                                    function selected(butObj) {

                                                butObj.innerHTML = "X";

                                                butObj.disabled = true;

                                                checkWin("X", 3, 3);

                                                AITurn();

                                                checkWin("O", 3, 3);

                                                drawCheck();

                                    }

                                    function AITurn(){

                                     //Return a random number between 1 and 9:

                                                for (count = 1; count <= 9; count++){

                                                            randInt = Math.floor(Math.random() * 9) + 1;

                                                            randButObj = document.getElementById("btn"+randInt);

                                                            if (randButObj.disabled == false){

                                                                        randButObj.innerHTML = "O";

                                                                        randButObj.disabled = true;

                                                                        break;

                                                            }

                                                }

                                    }

                                    function resetButtons() {

                                      var buttons = document.getElementsByTagName("button");

                                      for (var i = 0; i < (buttons.length); i++) {

                                                buttons[i].innerHTML = "";

                                                buttons[i].disabled = false;

                                                }

                                    }

                                    function checkWin(player, row, col) {

                                    var counter = 0;  //each button

                                    var btn = document.getElementsByTagName("button");

                                    //Check the rows

                                                for (countR = 0; countR < row; countR++){

                                                //check the columns

                                                            for(countC = 0; countC < col; countC++){

                                                              if (player != btn[counter].innerHTML){

                                                                        counter += col-countC;  //Skip buttons in row

                                                                        break;

                                                              }

                                                              else if (countC+1 == col)

                                                              {

                                                                for (countW = 0; countW < col; countW++){

                                                                                    btn[counter-countW].setAttribute("class", "winclass");

                                                                        }

                                                                        alert("You Won");

                                                              }

                                                              else

                                                              {

                                                                counter++;

                                                              }

                                                            }          

                                                }

            }

                                    function drawCheck(){

                                     var btns = document.getElementsByTagName("button");

                                     var btn;

                                     for (btn in btns){

                                      if (btns[btn].disabled == false){

                                                return;

                                      }

                                    }

                                    alert("Draw Game over");

                                    }

                        </script>

            </body>

</html>