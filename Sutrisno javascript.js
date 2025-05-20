document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const contentSection = document.querySelector('.content-section');

    if (learnMoreBtn && contentSection) {
        learnMoreBtn.addEventListener('click', () => {
            if (contentSection.style.display === 'none') {
                contentSection.style.display = 'block';
                learnMoreBtn.textContent = 'Hide Details';
            } else {
                contentSection.style.display = 'none';
                learnMoreBtn.textContent = 'Learn More';
            }
        });
    }
});


