document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentIndex = 0;
    let intervalId;

    // Show the current carousel item
    function showItem(index) {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    // Show next item
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    // Show previous item
    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    // Start auto-advancing the carousel
    function startAutoAdvance() {
        intervalId = setInterval(nextItem, 5000);
    }

    // Stop auto-advancing the carousel
    function stopAutoAdvance() {
        clearInterval(intervalId);
    }

    // Handle button clicks
    nextBtn.addEventListener('click', () => {
        stopAutoAdvance();
        nextItem();
        startAutoAdvance();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoAdvance();
        prevItem();
        startAutoAdvance();
    });

    // Initialize auto-advance on page load
    startAutoAdvance();

    // Optional: Handle the "View Menu" button click, which will scroll to the menu section
    const viewMenuButton = document.querySelector('.btn[href="#menu"]');
    if (viewMenuButton) {
        viewMenuButton.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent default anchor link behavior
            const menuSection = document.querySelector('#menu');
            window.scrollTo({
                top: menuSection.offsetTop - 60, // Adjust scroll position to account for navbar
                behavior: 'smooth'
            });
        });
    }
});
