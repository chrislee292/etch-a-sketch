// Create grid when webpage opens

const slider = document.querySelector('#slider');
let gridLen = slider.value;

slider.addEventListener('input', () => {
    gridLen = slider.value;
    createGrid();
    hoverEffect();
    resetGrid();
});

function createGrid() {

    // Select grid container
    const container = document.querySelector('#grid-container');
    
    // Clear contents of container
    container.innerHTML = '';

    // Create gridLen squared grid items
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

function resetGrid() {
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', () => {
        const gridItems = document.querySelectorAll('#grid-container .grid-item');
    
        gridItems.forEach((gridItem) => {
            gridItem.style.backgroundColor = 'white';
        });
    });
}

createGrid();
hoverEffect();
resetGrid();