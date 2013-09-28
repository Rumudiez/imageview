var body = document.getElementsByTagName("body");
var img = document.getElementsByTagName("img");
document.addEventListener('DOMContentLoaded', function() {
    body[0].setAttribute("style","margin:0;text-align:center;background:url('" + chrome.extension.getURL("background.gif") + "');box-shadow:inset 0 0 20px #000;");
    (img[0].getAttribute("style") == "-webkit-user-select: none; cursor: -webkit-zoom-in;") ? img[0].setAttribute("style","position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;box-shadow:10px 10px 20px #000;cursor:-webkit-zoom-in;") : img[0].setAttribute("style","position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;box-shadow:0 0 20px #000") ;
});