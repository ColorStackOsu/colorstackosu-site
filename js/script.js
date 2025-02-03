document.addEventListener("DOMContentLoaded", function () {
    const sponsorTrack = document.querySelector(".sponsor-track div");
    
    // Duplicate the sponsor images for seamless scrolling
    const duplicateSponsors = sponsorTrack.cloneNode(true);
    sponsorTrack.parentNode.appendChild(duplicateSponsors);
  });
  