function insert_Row() {
    const table = document.getElementById('sampleTable');
    const newRow = document.createElement('tr');
    const leftCell = document.createElement('td');
    const rightCell = document.createElement('td');
    
    leftCell.textContent = 'New Cell1'; 
    
    rightCell.textContent = 'New Cell2';
    
    newRow.appendChild(leftCell);
    newRow.appendChild(rightCell);
    
    table.insertBefore(newRow, table.firstChild);
}
