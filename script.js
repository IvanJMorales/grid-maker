// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;


// Add a row
function addR() {
    let table = document.getElementById("grid");

    if (numRows == 0) {
        
        let row = table.insertRow(-1);
        let cell = row.insertCell(-1);
    
        row.className = "row";
        row.id = "row";
        cell.className = "cell";

        numRows++;
        numCols++;
    }
    else if (numCols >= 1) {
        let row = table.insertRow(-1);

        for (let i = 0; i < numCols; i++) {
            let cell = row.insertCell(-1);
            row.className = "row";
            row.id = "row";
            cell.className = "cell";
        }
        numRows++;
    }
    else {
        let row = table.insertRow(-1);
        let cell = row.insertCell(-1);
    
        row.className = "row";
        row.id = "row";
        cell.className = "cell";

        numRows++;
    }

    console.log(numRows)
    console.log(numCols)
}

// Add a column
function addC() {
    let rows = document.querySelectorAll('tr');

    rows.forEach(row => {
        let cell = row.insertCell(-1);
        cell.className = "cell";
    })
    numCols++;

    console.log(numRows)
    console.log(numCols)
}

// Remove a row
function removeR() {
    document.getElementById("grid").deleteRow(-1);
    numRows--;
}

// Remove a column
function removeC() {
    let rows = document.querySelectorAll('tr');

    rows.forEach(row => {
        row.deleteCell(-1);
    })
    numCols--;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored");
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

