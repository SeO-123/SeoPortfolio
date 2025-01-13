window.onload = function () {
    const loader = document.querySelector('.loader');
    const content = document.getElementById('content');

    loader.style.display = 'block'; // Ensure loader is visible on load
    content.style.display = 'none'; // Hide content initially

    setTimeout(() => {
        loader.style.display = 'none'; // Hide loader
        content.style.display = 'block'; // Show content
    }, 3000); // Adjust delay as needed
};
