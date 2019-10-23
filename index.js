window.addEventListener("load", function() {
    var f = document.getElementById('underscore');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 650);

}, false);