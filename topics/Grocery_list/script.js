var sr_no = 1;
var sum = 0;

var price = document.getElementById("item-price-input");
var table = document.getElementById("my_table");
var table_row_count = document.getElementsByTagName("tr");


function insertItem() {
    var name = document.getElementById("item-name-input");
   
  
    if(!(name.value == "" || price.value == "")){
    var row = table.insertRow(sr_no);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = sr_no;
    cell2.innerHTML = name.value;
    cell3.innerHTML = price.value;
    grand_total(sr_no);
    sr_no++;
    } 
}

function grand_total(sr_no){
    var total_row;
    var total_cell0;
    var total_cell1;
    var total_cell2; 
    var total_cell;
    var sum = 0;
    if(sr_no==1){
         var row = document.createElement("tr");
         total_row = table.appendChild(row);
         total_cell0 = total_row.insertCell(0);
         total_cell1 = total_row.insertCell(1);
         total_cell2 = total_row.insertCell(2);
         total_cell2.setAttribute("id","total_row");
         total_cell2.setAttribute("data-ns-test","grandTotal")
    }
    total_cell = document.getElementById("total_row");
    for(var i = 1 ; i<table_row_count.length-1 ; i++){
    var cells = table_row_count[i].getElementsByTagName("td");
    var add = parseFloat(cells[2].innerHTML);
        if(!(isNaN(add)))
            sum += add;
    }
    total_cell.innerHTML = sum;
    console.log(total_cell);

}