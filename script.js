function insert_Row() {
    const table = document.getElementById('sampleTable');
    const newRow = document.createElement('tr');
    const leftCell = document.createElement('td');
    const rightCell = document.createElement('td');
    
    leftCell.innerText = ''; 
    
    leftCell.innerText = 'New Cell1'; 
    rightCell.innerText = 'New Cell2';
    
    newRow.appendChild(leftCell);
    newRow.appendChild(rightCell);
    
    table.insertBefore(newRow, table.firstChild);
}
