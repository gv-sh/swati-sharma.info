document.addEventListener("DOMContentLoaded", function() {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid-item',
        percentPosition: true
    });
});