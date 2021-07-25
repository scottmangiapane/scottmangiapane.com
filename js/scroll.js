const link = document.getElementById('scroll-link');

link.onclick = (e) => {
    e.preventDefault();
    const hash = link.getAttribute('href');
    const target = document.querySelector(hash);

    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
};