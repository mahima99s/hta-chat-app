$(document).ready(function () {
    "use strict";
    $("#menu").click(function () {
        if ($(".header").css("width") === '50px') {
            $(".header").animate({width: '200px'}, 300);
            $(".name").fadeIn(350);
            return false;
        } else {
            $(".header").animate({width: '50px'}, 300);
            $(".name").fadeOut(300);
            return true;
        }
    });
});
function loader() {
    var x = "http://sahil.unaux.com/a.php";
    $("#chatbox").attr("src", x);
}
setInterval(loader, 1000);