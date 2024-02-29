// Create grid when webpage opens

const slider = document.querySelector('#slider');
let gridLen = slider.value;

slider.addEventListener('input', () => {
    gridLen = slider.value;
    createGrid();
    hoverEffect();
    resetGrid();
    randomColorToggle();
});

let randomColor = false;

function createGrid() {

    // Select grid container
    const container = document.querySelector('#grid-container');
    
    // Clear contents of container
    container.innerHTML = '';

    // Calculate width percentage based on gridLen
    const itemWidth = 100 / gridLen;

    // Create gridLen squared grid items
    for (let i = 0; i < gridLen ** 2; i++) {
        const gridItem = document.createElement('div');
        
        // Initialize or reset the hover counnt for each grid item
        gridItem.setAttribute('data-hover-count', 0);

        // Add class to grid item
        gridItem.classList.add('grid-item');

        // Set flex bases to fill up the row evenly based on the slider value
        gridItem.style.flexBasis = `${itemWidth}%`;
        
        container.appendChild(gridItem);
    }
}

function hoverEffect() {
    // Select .grid-item elements within #grid-container
    const gridItems = document.querySelectorAll('#grid-container .grid-item');

    // Attach a 'mouseover' event listener to each .grid-item element
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            // Change background color of grid item
            if (randomColor) {
                // Random color background 
                gridItem.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            } else {
                
                // Increment hover count for grid item
                let count = parseInt(gridItem.getAttribute('data-hover-count'));
                count++;
                gridItem.setAttribute('data-hover-count', count);

                // Adjust darkness based on hover count, maxing out at 10
                let darkness = Math.min(count * 10, 100);
                gridItem.style.backgroundColor = `rgba(0, 0, 0, ${darkness}%)`;
            }
        });
    });
}

// Add event listener to reset button
function resetGrid() {
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', () => {
        // Select all grid items
        const gridItems = document.querySelectorAll('#grid-container .grid-item');
        
        // Reset hover count for each grid item
        gridItems.forEach((gridItem) => {
            gridItem.style.backgroundColor = 'white';
        });
    });
}

function randomColorToggle() {
    const randomColorButton = document.querySelector('#color');

    randomColorButton.addEventListener('click', () => {
        randomColor = !randomColor;
    });
}

createGrid();
hoverEffect();
resetGrid();
randomColorToggle();