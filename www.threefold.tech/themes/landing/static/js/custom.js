$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $('.partner-member .member-photo').on("mouseenter", function () {
        $(this).parent().find(".partner-member-info-text").css('display', 'block');
    }).on('mouseleave', function () {
        $(this).parent().find(".partner-member-info-text").css('display', 'none');
    });
});