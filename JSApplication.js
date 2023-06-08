window.onload = generate_table;
function functionName() {
  alert("podu okkali");
}

function generate_table() {
  // creates a <table> element and a <tbody> element
  const tblBody = document.getElementById("table-body");

  // creating all cells
  for (let i = 0; i < 25; i++) {
    const row = document.createElement("tr");
    row.className = "data-row";

    for (let j = 0; j < 4; j++) {
      if (j === 0) {
        const cell = document.createElement("td");
        const checkBoxinput = document.createElement("input");
        checkBoxinput.type = "checkbox";
        checkBoxinput.id = "checkbox-" + i;
        cell.className = "column1";
        cell.appendChild(checkBoxinput);
        row.appendChild(cell);
      } else if (j === 1) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode("Jayasurya");
        cell.className = "column2";
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (j === 2) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode("Web dev for Comp");
        cell.className = "column3";
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(
          "Description added for the employee to check how the table looks in the UI and once the UI is done will create JS and work on it."
        );
        cell.className = "column4";
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }
    tblBody.appendChild(row);
  }
};

function selectAll() {
  if (document.getElementById("select-all").checked == true) {
    for (let i = 0; i < 25; i++) {
      document.getElementById("checkbox-" + i).checked = true;
    }
  } else {
    for (let i = 0; i < 25; i++) {
      document.getElementById("checkbox-" + i).checked = false;
    }
  }
}
