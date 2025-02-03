document.addEventListener("DOMContentLoaded", function () {
    const sponsorTrack = document.querySelector(".sponsor-track div");
    
    // Duplicate the sponsor images for seamless scrolling
    const duplicateSponsors = sponsorTrack.cloneNode(true);
    sponsorTrack.parentNode.appendChild(duplicateSponsors);
  });
  document.addEventListener("DOMContentLoaded", function () {
    const animationArea = document.querySelector(".animation-area");
    
    for (let i = 15; i > 0; i--) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        animationArea.appendChild(bubble);

        // Random bubble size
        const size = Math.random() * 60 + 20; 
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        // Random horizontal position
        bubble.style.left = `${Math.random() * 100}vw`;

        // Random animation duration
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
    }
});
