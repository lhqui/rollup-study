import "./style.scss";

// Initialize the counter
let count = 0;

// Function to update the counter display
function updateCounter() {
  document.getElementById("count")!.textContent = count.toString();
}

if (document.getElementById("counter")) {
  document.getElementById("increment")!.addEventListener("click", () => {
    count++;
    updateCounter();
  });

  document.getElementById("decrement")!.addEventListener("click", () => {
    if (count > 0) {
      count--;
      updateCounter();
    }
  });

  updateCounter();
}
