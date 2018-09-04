$(document).ready(function () {
    var $mobileApp = $('.mobile');
    var firstScreenHeightMob = $('.first-screen-mob').height();
    var $arrowDown = $('.to-second-page');
    var $btnShowList = $('.btn-show-list');
    var $pharmLlist = $('.other-pharm-list');
    var $menuMob = $('.menu-mob');
    var $menuMobBtn = $('.menu-mob-btn');

    // scroll to second page
    $arrowDown.click(function () {
        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top;
        $('html, body').animate({
            scrollTop: destination
        }, 1200);
        return false;
    });

    // Initialize Swiper
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            spaceBetween: -30,
             pagination: {
                 el: '.swiper-pagination',
            },
        });

    // VIDEO POP-UP
    $("a.video-popup").YouTubePopUp(); // Disable autoplay

    // SHOW/HIDE LIST OF THE NINTH SCREEN
    $btnShowList.click(function () {
        if ($pharmLlist.hasClass('open')) {
            $pharmLlist.removeClass('open');
            $('span', $(this)).text('ПОКАЗАТЬ ПОЛНОСТЬЮ');
        } else {
            $pharmLlist.addClass('open');
            $('span', $(this)).text('свернуть');
        }
    });

    // OPEN/CLOSE MOBILE MENU
    $menuMobBtn.click(function () {
        if ($(this).hasClass('menu-mob-close')) {
            $(this).removeClass('menu-mob-close');
            $menuMob.removeClass('open-menu');
            $mobileApp.removeClass('open-menu');
        } else {
            $(this).addClass('menu-mob-close');
            $menuMob.addClass('open-menu');
            $mobileApp.addClass('open-menu');
        }
    });

    // variables for POPUP
    var $getFirstPopUp  = $('.get-first-popup');
    var $getSecondPopUp  = $('.get-second-popup');
    var $popOrder  = $('.pop-up-order');
    var $popThnx  = $('.pop-up-thnx');
    var $popUp  = $('.pop-up');
    var $popUpCloseBtn  = $('.pop-up-close');

    // OPEN/CLOSE MOBILE POP-UP
    $getFirstPopUp.click(function () {
        $popOrder.addClass('show-pop-up');
        $popUp.fadeIn();
    });
    $getSecondPopUp.click(function () {
        $popOrder.removeClass('show-pop-up');
        $popThnx.addClass('show-pop-up');
        $popUp.fadeIn();
    });

    $popUpCloseBtn.click(function () {
        $popThnx.removeClass('show-pop-up');
        $popOrder.removeClass('show-pop-up');
        $popUp.fadeOut();
    });
});
