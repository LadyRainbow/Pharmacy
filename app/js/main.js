$(document).ready(function () {
    var $desctopApp = $('.desctop');

    // variables for screens heights
    var firstScreenHeight = $('.first-screen').height();

    var secondScreenHeight = $('.second-screen').height();
    var thirdScreenHeight = $('.third-screen').height();
    var fourthScreenHeight = $('.fourth-screen').height();
    var fifthScreenHeight = $('.fifth-screen').height();
    var sixthScreenHeight = $('.sixth-screen').height();
    var seventhScreenHeight = $('.seventh-screen').height();
    var eightthScreenHeight = $('.eightth-screen').height();
    var ninthScreenHeight = $('.ninth-screen').height();
    var tenthScreenHeight = $('.tenth-screen').height();

    // variable for header fixed
    var $btnHeader = $('.btn-header');

    // variables for Animation on first screen
    var $firstScreenSubstrate = $('.first-screen-substrate');
    var $firstScreenBtn = $('.request-quotation-btn');
    var $firstScreenCircles = $('.first-screen .circles-wrp-overflow');
    var $mobileBlock = $('.mobile-block');

    // variables for second screen DOM-elements
    var $secondScreen = $('.second-screen');
    var $secondScreenLeftSection = $('.left-section');
    var $progressLine = $('.second-screen .progress');
    var $textScroll = $('.second-screen .text-scroll');
    var $textInner = $('.second-screen .text-wrp');
    var $titleWrp = $('.second-screen-title-wrp');
    var $arrowToNextBlock = $('.to-next-block');

    // variables for fifth screen FOM-elements
    var $decorColumn = $('.decor-column-wrp');
    var $progressLineFifth = $('.fifth-screen .progress');
    var $textScrollFifth = $('.fifth-screen .text-scroll');
    var $textInnerFifth = $('.fifth-screen .text-wrp');

    // variables for sixth screen FOM-elements
    var $scaleWrp = $('.sixth-screen-content');

    // variables for seventh screen FOM-elements
    var $list = $('.seventh-screen ul li');
    var $seventhScreenBtnOrder = $('.seventh-screen .btn-order');

    // variables for eightth screen FOM-elements
    var $bottomShowHideBtn = $('.bottom-title');
    var $hideBottomBtn = $('.hide-list');
    var $bottomSubstrate = $('.bottom-substrate');
    var $bottomContent = $('.bottom-content');
    var $eightthScreen = $('.eightth-screen');
    var $gradient = $('.background-layer-gradient');

    // variables for tenth screen FOM-elements
    var $tenthScreen = $('.tenth-screen');
    var $textScrollTenth = $('.tenth-screen .text-scroll');
    var textScrollTenthHeight = $('#text-part-1').height();
    var $tenthScreenList_1 = $('.text-container-1 .container-list li');
    var $tenthScreenList_2 = $('.text-container-2 .container-list li');
    var $copyright = $('.copyright-wrp');
    var isAnimating  = false;

    // variables for MENU
    var $menuBtn  = $('.menu-btn-wrp');
    var $menu  = $('.menu');

    // variables for POPUP
    var $getFirstPopUp  = $('.get-first-popup');
    var $getSecondPopUp  = $('.get-second-popup');
    var $popOrder  = $('.pop-up-order');
    var $popThnx  = $('.pop-up-thnx');
    var $popUp  = $('.pop-up');
    var $popUpCloseBtn  = $('.pop-up-close');

    // OPEN/CLOSE POP-UP
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


    function desctopAnimation () {
        if ($(document).width() >= 1224) {
            // Animation for appearance of first screen elements
            (function () {
                // setting box-shadow on the square of the first creen
                $firstScreenSubstrate.addClass('show-inner-square');
                // animation with yellow substrates
                setTimeout(function() {
                  $('.first-screen .wrp-for-animation').addClass('show-wrapp');
                  $firstScreenBtn.addClass('loaded');
              },900);
                setTimeout(function() {
                  $('.first-screen .wrp-for-animation').addClass("hideWrapp");
              },1700);
              $firstScreenCircles.addClass('show-up');
              $mobileBlock.addClass('show-up');
            })();

            // Including script for images changes
            $('.mobile-screen').beforeAfter();

            // quick scroll to the next section due click on the arrow
            $arrowToNextBlock.click(function (e) {
                e.preventDefault();
                $.scrollify.next();
            });

            // Settings Scrollify plugin
            $.scrollify ({
                      section : ".screen",
                      standardScrollElements: '.text-scroll',
                      scrollSpeed: 800,
                      after: function (index, sections) {
                            var currentPage = index + 1;

                            // 2 screen animation
                            if (currentPage == 2) {
                                $secondScreen.addClass('move-sections');
                            };
                            // 3 screen animation
                            if (currentPage == 3) {
                                $('.third-screen .wrp-for-animation').addClass('show-wrapp');
                                $firstScreenBtn.addClass('loaded');
                                setTimeout(function() {
                                      $('.third-screen .wrp-for-animation').addClass("hideWrapp");
                                  }, 800);
                            };
                            // 4 screen animation
                            if (currentPage == 4) {
                                $('.switch-cross').addClass('show-up');
                            };
                            // 5 screen animation
                            if (currentPage == 5) {
                                $decorColumn.addClass('start-animation');
                                $('.fifth-screen .wrp-for-animation').addClass('show-wrapp');
                                setTimeout(function() {
                                    $('.fifth-screen .wrp-for-animation').addClass("hideWrapp");
                                },800);
                            };
                            // 6 screen animation
                            if (currentPage == 6) {
                                $scaleWrp.addClass('animated');
                            };
                            // 7 screen animation
                            if (currentPage == 7) {
                                $seventhScreenBtnOrder.addClass('show-up');
                                $list.addClass('show-up');
                            };
                            // 8 screen animation
                            if (currentPage == 8) {
                                $eightthScreen.addClass('loaded');
                                $gradient.addClass('new-gradient');
                                $bottomSubstrate.removeClass('hide-bottom-content');
                                $bottomContent.removeClass('hide-bottom-content');
                            };
                            // 9 screen animation
                            if (currentPage == 9) {
                                $('.ninth-screen .wrp-for-animation').addClass('show-wrapp');
                                setTimeout(function() {
                                    $('.ninth-screen .wrp-for-animation').addClass("hideWrapp");
                                },800);
                            };
                            // 10 screen animation
                            if (currentPage == 10) {
                                $arrowToNextBlock.attr('href', '#text-part-2');
                                $tenthScreenList_1.addClass('show-up');
                            };

                        },

                  });
            // show and hide button in the fixed header and arrow, that points to the next block
            (function ()     {
                // scroll our  page
                $(window).scroll(function(){
                    if ($(this).scrollTop() >= firstScreenHeight) {
                        // show button in the fixed header
                        $btnHeader.addClass('btn-header-show');
                    } else {
                        // hide button in the fixed header
                        $btnHeader.removeClass('btn-header-show');
                    };

                    if (firstScreenHeight <= $(this).scrollTop() && $(this).scrollTop() < $('#eightth-screen').offset().top) {
                        // show arrow
                        $arrowToNextBlock.fadeIn();
                    }
                    else if ($(this).scrollTop() >= $('#ninth-screen').offset().top) {
                        // show arrow
                        $arrowToNextBlock.fadeIn();
                    }
                    else {
                        // hide arrow
                        $arrowToNextBlock.fadeOut();
                    };
                });
            })();

            // PROGRESS BAR, GRADIENT CHANGING & TITLES CHANGING ON SCROLL IN THE INNER BLOCK OF THE SECOND SCREEN
            $textScroll.scroll(function () {
                var startChangingTitle = $('.start-changing-title').position().top;
                if (startChangingTitle <= 0 ){
                    $titleWrp.addClass('change-title');
                } else {
                    $titleWrp.removeClass('change-title');
                };
                // PROGRESS BAR
                // calculate the width of the progress bar during a scroll:
                // getting maximum scroll top, this will be equal to 100%
                var maxScroll = $textInner.height() - $textScroll.height();
                // taking a percent of the current scroll using the proportion
                var percent = $textScroll.scrollTop() * 100 / maxScroll;
                // substituting received percent to width of progress line
                $progressLine.width(percent + '%');
                // GRADIENT CHANGING
                // Determine the delta start/end position of colors. Let's reduce all coordinates by 50%:
                var deltaEndPercentColor = 50;
                // taking a percent of the gradient scroll using the proportion
                var percentGradient = $textScroll.scrollTop() * deltaEndPercentColor / maxScroll;
                // set the resulting value into css
                $('.second-screen .right-section').css({
                     'background-color': '#007d73', /* Fallback Color */
                      'background-image': '-webkit-gradient(linear, 135deg, from(#00a73f), to(#007d73))', /* Saf4+, Chrome */
                      'background-image': '-webkit-linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%', /* Chrome 10+, Saf5.1+, iOS 5+ */
                      'background-image':    '-moz-linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%', /* FF3.6 */
                     'background-image':     '-ms-linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%', /* IE10 */
                     'background-image':     '-o-linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%', /* Opera 11.10+ */
                      'background':        'linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%',
                });
            });
            // PROGRESS BAR ON SCROLL IN THE INNER BLOCK OF THE FIFTH SCREEN

            $textScrollFifth.scroll(function (e) {
                // PROGRESS BAR
                // calculate the width of the progress bar during a scroll:
                // getting maximum scroll top, this will be equal to 100%
                var percentScroll = $textInnerFifth.height() - $textScrollFifth.height();
                var maxScroll = $textInnerFifth.height() - $textScrollFifth.height();
                // taking a percent of the current scroll using the proportion
                var percent = $textScrollFifth.scrollTop() * 100 / maxScroll;
                // substituting received percent to width of progress line
                $progressLineFifth.width(percent + '%');
                // if ($textScrollFifth.scrollTop() == maxScroll) {
                //     $textScrollFifth.bind('mousewheel', function(e){
                //         if(e.originalEvent.wheelDelta /120 < 0) {
                //             console.log($.scrollify.next());
                //             $.scrollify.next();
                //         }
                //     });
                // };
                // if ($textScrollFifth.scrollTop() <= 1) {
                //     $textScrollFifth.bind('mousewheel', function(e){
                //         if(e.originalEvent.wheelDelta /120 > 0) {
                //             console.log('get up');
                //             $.scrollify.previous();
                //         }
                //     });
                // };

            });

            // SHOW/HIDE BOTTOM OF THE EIGHTTH SCREEN
            $hideBottomBtn.click(function () {
                if ($bottomContent.hasClass('show-bottom')) {
                    $bottomContent.removeClass('show-bottom')
                    $bottomSubstrate.removeClass('show-bottom')
                }
            });
            $bottomShowHideBtn.click(function () {
                if ($bottomContent.hasClass('show-bottom')) {
                    $bottomContent.removeClass('show-bottom');
                    $bottomSubstrate.removeClass('show-bottom');
                } else {
                    $bottomContent.addClass('show-bottom')
                    $bottomSubstrate.addClass('show-bottom')
                }
            });

            $textScrollTenth.scroll(function () {
                var maxHeight = $('.text-container').height()*1.5;
                var deltaEndPercentColor = 50;
                // taking a percent of the gradient scroll using the proportion
                var percentGradient = $textScrollTenth.scrollTop() * deltaEndPercentColor/maxHeight;
                // set the resulting value into css
                $('.tenth-screen').css({
                     'background-color': '#007d73', /* Fallback Color */
                      'background-image': '-webkit-gradient(linear, 135deg, from(#00a73f), to(#007d73))', /* Saf4+, Chrome */
                      'background-image': '-webkit-linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%', /* Chrome 10+, Saf5.1+, iOS 5+ */
                      'background-image':    '-moz-linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%', /* FF3.6 */
                     'background-image':     '-ms-linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%', /* IE10 */
                     'background-image':     '-o-linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%', /* Opera 11.10+ */
                      'background':        'linear-gradient(135deg, #00a73f ' + (0 - percentGradient) + '%, #007d73 ' + (100 - percentGradient) + '%',
                });
                if ($(this).scrollTop() > 1 && $(this).scrollTop() < textScrollTenthHeight/3 && isAnimating  == false) {
                    isAnimating  = true;
                    var destination = $('#text-part-2').position().top + 50;
                    $textScrollTenth.animate({
                        scrollTop: destination
                    }, 800, 'easeOutQuart', function(){
                        $tenthScreenList_2.addClass('show-up');
                        // $tenthScreen.addClass('new-gradient');
                        // show copyright
                        $copyright.addClass('copyright-show');
                        // show arrow
                        $arrowToNextBlock.fadeOut();
                        // change value of flag to the original to allow next action
                        isAnimating  = false;
                    });
                };
                if ($(this).scrollTop() < $('#text-part-2').height() - 10 && $(this).scrollTop() > textScrollTenthHeight/2 && isAnimating  == false) {
                    isAnimating  = true;
                    $textScrollTenth.animate({
                        scrollTop: 0
                    }, 800, 'easeOutQuart', function(){
                        // $tenthScreen.removeClass('new-gradient');
                        // hide copyright
                        $copyright.removeClass('copyright-show');
                        // hide arrow
                        $arrowToNextBlock.fadeIn();
                        // change value of flag to the original to allow next action
                        isAnimating  = false;
                    });
                };
            });
        };
    };

    desctopAnimation();

    // OPEN/CLOSE MENU
    $menuBtn.click(function () {
        if ($(this).hasClass('close-menu')) {
            $(this).removeClass('close-menu');
            $menu.removeClass('open-menu');
        } else {
            $(this).addClass('close-menu');
            $menu.addClass('open-menu');
        }
    });

    $(window).resize(function () {
        desctopAnimation();
    });













});
