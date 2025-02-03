document.addEventListener("DOMContentLoaded", function () {
    const animationArea = document.querySelector(".animation-area");
    
    for (let i = 0; i < 15; i++) {
      let bubble = document.createElement("div");
      bubble.classList.add("bubble");
      animationArea.appendChild(bubble);
      
      const size = Math.random() * 80 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${Math.random() * 6 + 6}s`;
    }
  });
  