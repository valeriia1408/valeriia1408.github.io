$(document).ready(function() {
    var navToggle = $('.nav-toggle-icon');
    var nav = $('.nav');

    $(navToggle).on('click', function () {
        $(nav).toggleClass('open');
    });
});
