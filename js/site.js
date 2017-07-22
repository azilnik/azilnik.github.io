function check(selector)
{
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "blue";
    }
}

new KonamiCode(function () {
	check('fadeInUp');
});