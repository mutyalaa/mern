function createTable() {
    const tableBody = document.getElementById('tableBody');
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        const numberCell = document.createElement('td');
        const squareCell = document.createElement('td');
        const cubeCell = document.createElement('td');

        numberCell.textContent = i;
        squareCell.textContent = i * i;
        cubeCell.textContent = i * i * i;

        row.appendChild(numberCell);
        row.appendChild(squareCell);
        row.appendChild(cubeCell);

        tableBody.appendChild(row);
    }
}

window.onload = createTable;