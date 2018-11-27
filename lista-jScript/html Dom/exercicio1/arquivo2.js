function addRow() {

    var tabela = document.getElementById("tabela");

    var numOfRows = tabela.rows.length;

    var numOfCols = tabela.rows[numOfRows-1].cells.length;

    var newRow = tabela.insertRow(numOfRows);

    for (var x = 0; x < numOfCols; x++) {

        newCell = newRow.insertCell(x);
        
        newCell.innerHTML = "Linha "+ numOfRows + " – Coluna "+ x;
    }

} 