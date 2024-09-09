import './style.scss';

// Initialize the counter
let count = 0;

// Function to update the counter display
function updateCounter() {
    document.getElementById('count').textContent = count;
}

// Event listener for the increment button
document.getElementById('increment').addEventListener('click', () => {
    count++;
    updateCounter();
});


document.getElementById('decrement').addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

// Initial counter display
updateCounter();
