// mobile_navbar_ham

var ham = document.getElementsByClassName('more-mobile-ham');
var rwd_nav = document.getElementsByClassName('header-mobile');
var rwd_header_img = document.getElementById('mobile-big-img');



function ham_show() {
    // rwd_header_img.classname += 'rwd-show';
    rwd_header_img.style.width = '70%';
    rwd_nav.style.classname += 'rwd-show';
}