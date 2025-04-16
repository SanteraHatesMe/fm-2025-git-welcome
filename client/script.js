const links = document.querySelectorAll('[data-link]');

links.forEach(function (link) {
    link.addEventListener('click', function () {

        links.forEach(function (el) {
            el.classList.remove('active');
        });

        link.classList.add('active');
    });
});