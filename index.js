const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

window.addEventListener('scroll', function() {
    const header = document.querySelector('header'); // Select your header element
    const scrollPosition = window.scrollY; // Get the current scroll position
    
    if (scrollPosition > 50) { // You can adjust this value as needed
        header.classList.add('header-light'); // Add the light background class
    } else {
        header.classList.remove('header-light'); // Remove the light background class
    }
});
