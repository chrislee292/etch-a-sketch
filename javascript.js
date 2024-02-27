// Create grid when webpage opens

function createGrid() {
    const container = document.querySelector('#grid-container');
    const gridLen = 4;
    
    container.innerHTML = '';

    for (let i = 0; i < gridLen ** 2; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
    }
}

function hoverEffect() {
    // Select .grid-item elements within #grid-container
    const gridItems = document.querySelectorAll('#grid-container .grid-item');

    // Attach a 'mouseover' event listener to each .grid-item element
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
    });
}

createGrid();
hoverEffect();