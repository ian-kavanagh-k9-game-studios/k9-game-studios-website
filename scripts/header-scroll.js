document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.getElementById('site-header');

    if (!header) return; // Safety check

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});

