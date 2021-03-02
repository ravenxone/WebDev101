var grid = document.getElementById("grid");
var row;
var cells;
var grid_div;
var score = 0;
var cell_count = 1;
var result = document.getElementById("resultDisplay");

function addBombs() {
    var count;
    for(count = 0 ; count<11 ; count++){
        var cell_c = Math.floor(Math.random()*9);
        var cell_r = Math.floor(Math.random()*9);
        var cell = grid.rows[cell_r].cells[cell_c];
        cell.setAttribute("bomb-here", "true");
    }
}

function createGrid() {
    var cell_row;
    var cell_column;
    grid.innerHTML = "";
for(var i = 0 ; i<10 ; i++){
    cell_row = i+1;
    row = grid.insertRow(i);
    for(var j = 0 ; j<9 ; j++){
        cell_column = j +1;
        cells = row.insertCell(j);
        var bomb = document.createAttribute("bomb-here");
        bomb.value = "false";
        cells.setAttributeNode(bomb);
        cells.setAttribute("id", "cells_"+(cell_count));
        cells.setAttribute("class", "game_start_mode");
        cell_id = document.getElementById("cells_"+(cell_count));
        cells.onclick = function(){clickCells(this);};
        cell_count += 1;
    }
}   
    grid_div = document.getElementById("grid_div");
    grid_div.setAttribute("class", "unblock_grid");
    score = -1;
    score_add();
    addBombs();
    result.innerHTML = "";
}


function clickCells(cell){
    if(cell.getAttribute("bomb-here")=="true"){
         reveal_bombs();
         game_over();
         result.innerHTML = "game over";}

    else{
        if(cell.getAttribute("class") != "game_no_bomb")
          score_add();
        cell.setAttribute("class", "game_no_bomb");
    }
}

function score_add(){
   score = score + 1;
   var add = document.getElementById("gameScore");
   add.innerHTML = "score: "+score;
   if(score==71){
       game_over();
       result.innerHTML= "win";

   }
}

function reveal_bombs(){
   for(var i = 0 ; i < 9 ; i++){
       for(var j = 0 ; j <9 ; j++){
           var bombs = grid.rows[i].cells[j];
           if(bombs.getAttribute("bomb-here")=="true")
            bombs.setAttribute("class","bomb_here");
       }
   }
}

function game_over(){
    score = 0;
    grid_div= document.getElementById("grid_div");
    grid_div.setAttribute("class", "block_grid");
}

createGrid(); 