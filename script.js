$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
function slideNav() {
    var header = document.getElementById('header');
    if(header.className === 'visible') {
        header.className = '';
    }
    else {
        header.className = 'visible';
    }
}
function closeNav() {
    var header = document.getElementById('header');
    header.className = '';
}