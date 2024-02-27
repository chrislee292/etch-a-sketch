function createGrid() {
    const container = document.querySelector('#grid-container');
    const gridSize = 16;
    
    container.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
    }
}

createGrid();