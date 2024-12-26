function setupScrubberToggle() {
    const markersContainer = document.querySelector('.ytp-progress-bar-container');
    const scrubberButton = document.querySelector('.ytp-scrubber-button');
    
    if (!markersContainer || !scrubberButton) {
        // Try again if elements aren't found
        setTimeout(setupScrubberToggle, 1000);
        return;
    }

    // Initially hide the scrubber
    scrubberButton.style.opacity = '0';

    // Show scrubber on hover
    markersContainer.addEventListener('mouseenter', () => {
        scrubberButton.style.opacity = '1';
    });

    // Hide scrubber when not hovering
    markersContainer.addEventListener('mouseleave', () => {
        scrubberButton.style.opacity = '0';
    });
}

// Run on page load
setupScrubberToggle();

// Run again when navigating between videos
document.addEventListener('yt-navigate-finish', setupScrubberToggle); 