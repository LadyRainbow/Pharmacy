$(document).ready(function () {
    var $desctopApp = $('.desctop');
    var $mobileApp = $('.mobile');

    // variables for screens heights
    var firstScreenHeight = $('.first-screen').height();
    var firstScreenHeightMob = $('.first-screen-mob').height();

    var secondScreenHeight = $('.second-screen').height();
    var thirdScreenHeight = $('.third-screen').height();
    var fourthScreenHeight = $('.fourth-screen').height();
    var fifthScreenHeight = $('.fifth-screen').height();
    var sixthScreenHeight = $('.sixth-screen').height();
    var seventhScreenHeight = $('.seventh-screen').height();
    var eightthScreenHeight = $('.eightth-screen').height();
    var ninthScreenHeight = $('.ninth-screen').height();
    var tenthScreenHeight = $('.tenth-screen').height();

    var secondScreenHeightOuter = $('.second-screen').outerHeight();
    var thirdScreenHeightOuter = $('.third-screen').outerHeight();
    var fourthScreenHeightOuter = $('.fourth-screen').outerHeight();
    var fifthScreenHeightOuter = $('.fifth-screen').outerHeight();
    var sixthScreenHeightOuter = $('.sixth-screen').outerHeight();

    var $footer = $('footer');
    // var footerScrollTop = $('footer').offset().top;

    // animation for page about Citizens
    // $firstContentCitizens.addClass('loaded');

    // variable for header fixed
    var $btnHeader = $('.btn-header');
    var $headerFixed = $('.header-mob-wrp-fixed');

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
    $arrowToNextBlock.click(function() {
        event.preventDefault();
        var elementClick = $(this).attr("href");
        // var elementClick = $(this).hash;
        var nextSectionTop = $(elementClick).offset().top + 10;
		$('html, body').animate({
            scrollTop: nextSectionTop
        }, 800, 'easeOutQuart');
	});

    // quick scroll to the next section during scrolling & concomitant animations
    (function () {
        // put the flag which will mark the execution of the action
        var isAnimating  = false;
        // scroll our page
        $(window).scroll(function(){
            // FIRST SCREEN
            // show and hide button in the fixed header and arrow, that points to the next block
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
            else if ($(this).scrollTop() >= $('#ninth-screen').offset().top && $(this).scrollTop() < $('#tenth-screen').offset().top) {
                // show arrow
                $arrowToNextBlock.fadeIn();
            }
            else {
                // hide arrow
                $arrowToNextBlock.fadeOut();
            };

            // FIRST SCREEN, SCROLL DOWN
            // go to the second section
            if ($(this).scrollTop() > 0  && $(this).scrollTop() <= (firstScreenHeight/3) && isAnimating  == false) {
                console.log(firstScreenHeight + ' firstScreenHeight');
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the next screen to the arrow href
                $arrowToNextBlock.attr("href", "#third-screen");
                // setting value for scroll
                var destination = $('#second-screen').offset().top;
                // smooth transition to the second section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // doing animation for elements on the current section after scroll to the second section
                    $secondScreen.addClass('move-sections');
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // SECOND SCREEN, SCROLL UP
            // go back to the first section
            if ($(this).scrollTop() < ($('#second-screen').offset().top)  && $(this).scrollTop() > (firstScreenHeight/3) && isAnimating  == false) {

                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // return to the start of page
                $('html, body').animate({
                    scrollTop: 0
                }, 800, 'easeOutQuart', function(){
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // SECOND SCREEN, SCROLL DOWN
            // go to the third section
            if ($(this).scrollTop() > ($('#second-screen').offset().top)  && $(this).scrollTop() <= (firstScreenHeight + secondScreenHeight/3) && isAnimating  == false) {
                console.log(secondScreenHeight + ' secondScreenHeight');
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the next screen to the arrow href
                $arrowToNextBlock.attr("href", "#fourth-screen");
                // setting value for scroll
                var destination = $('#third-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    $('.third-screen .wrp-for-animation').addClass('show-wrapp');
                    $firstScreenBtn.addClass('loaded');
                    setTimeout(function() {
                      $('.third-screen .wrp-for-animation').addClass("hideWrapp");
                  },800);
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // THIRD SCREEN, SCROLL UP
            // go back to the second section
            if ($(this).scrollTop() < ($('#third-screen').offset().top)  && $(this).scrollTop() > (firstScreenHeight + secondScreenHeight/3) && isAnimating  == false) {
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#third-screen");
                // setting value for scroll
                var destination = $('#second-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // THIRD SCREEN, SCROLL DOWN
            // go to the fourth section
            if ($(this).scrollTop() > ($('#third-screen').offset().top)  && $(this).scrollTop() <= (firstScreenHeight + secondScreenHeight + thirdScreenHeight/3) && isAnimating  == false) {
                console.log(thirdScreenHeight + ' thirdScreenHeight');
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#fifth-screen");
                // setting value for scroll
                var destination = $('#fourth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    $('.switch-cross').addClass('show-up');
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // FOURTH SCREEN, SCROLL UP
            // go back to the third section
            if ($(this).scrollTop() < ($('#fourth-screen').offset().top)  && $(this).scrollTop() > (firstScreenHeight + secondScreenHeight + thirdScreenHeight/3) && isAnimating  == false) {
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#fourth-screen");
                // setting value for scroll
                var destination = $('#third-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // FOURTH SCREEN, SCROLL DOWN
            // go to the fifth section
            if ($(this).scrollTop() > ($('#fourth-screen').offset().top) && $(this).scrollTop() <= (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight/3) && isAnimating  == false) {
                console.log(fourthScreenHeight + ' fourthScreenHeight');
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#sixth-screen");
                // setting value for scroll
                var destination = $('#fifth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    $decorColumn.addClass('start-animation');
                    $('.fifth-screen .wrp-for-animation').addClass('show-wrapp');
                    $firstScreenBtn.addClass('loaded');
                    setTimeout(function() {
                      $('.fifth-screen .wrp-for-animation').addClass("hideWrapp");
                  },800);
                    // change value of flag to the original to allow next action
                    isAnimating  = false;
                });
            };
            // FIFTH SCREEN, SCROLL UP
            // go back to the fourth section
            if ($(this).scrollTop() < ($('#fifth-screen').offset().top)  && $(this).scrollTop() > (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight/2) && isAnimating  == false) {

                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#fifth-screen");
                // setting value for scroll
                var destination = $('#fourth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // FIFTH SCREEN, SCROLL DOWN
            // go to the sixth section
            if ($(this).scrollTop() > ($('#fifth-screen').offset().top)  && $(this).scrollTop() <= (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight/3) && isAnimating  == false) {
                console.log(fifthScreenHeight + ' fifthScreenHeight');
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#seventh-screen");
                // setting value for scroll
                var destination = $('#sixth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    $scaleWrp.addClass('animated');
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // SIXTH SCREEN, SCROLL UP
            // go back to the fifth section
            if ($(this).scrollTop() < ($('#sixth-screen').offset().top)  && $(this).scrollTop() > (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight/3) && isAnimating  == false) {
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#sixth-screen");
                // setting value for scroll
                var destination = $('#fifth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // SIXTH SCREEN, SCROLL DOWN
            // go to the seventh section
            if ($(this).scrollTop() > ($('#sixth-screen').offset().top)  && $(this).scrollTop() <= (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight + sixthScreenHeight/3) && isAnimating  == false) {
                console.log(sixthScreenHeight + ' sixthScreenHeight');

                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#eightth-screen");
                // setting value for scroll
                var destination = $('#seventh-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    $seventhScreenBtnOrder.addClass('show-up');
                    $list.addClass('show-up');
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // SEVENTH SCREEN, SCROLL UP
            // go back to the sixth section
            if ($(this).scrollTop() < ($('#seventh-screen').offset().top)  && $(this).scrollTop() > (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight + sixthScreenHeight/3) && isAnimating  == false) {
                console.log($(this).scrollTop() + ' scrollTop seventh-screen - look it 2');
                console.log(firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight + sixthScreenHeight/2);
                console.log($('#seventh-screen').offset().top - 10 + '#seventh-screen.offset().top');
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#seventh-screen");
                // setting value for scroll
                var destination = $('#sixth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // change value of flag to the original to allow next action
                    isAnimating  = false
                });
            };
            // SEVENTH SCREEN, SCROLL DOWN
            // go to the eightth section
            if ($(this).scrollTop() > ($('#seventh-screen').offset().top)  && $(this).scrollTop() <= (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight + sixthScreenHeight + seventhScreenHeight/3) && isAnimating  == false) {
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                // $arrowToNextBlock.fadeOut();
                console.log(' seventhScreenHeight');
                // setting value for scroll
                var destination = $('#eightth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    $eightthScreen.addClass('loaded');
                    $gradient.addClass('new-gradient');
                    $bottomSubstrate.removeClass('hide-bottom-content');
                    $bottomContent.removeClass('hide-bottom-content');

                    // change value of flag to the original to allow next action
                    isAnimating  = false;
                });
            };
            // EIGHTTH SCREEN, SCROLL UP
            // go back to the seventh section
            if ($(this).scrollTop() < ($('#eightth-screen').offset().top)  && $(this).scrollTop() > (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight + sixthScreenHeight + seventhScreenHeight/3) && isAnimating  == false) {
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#eightth-screen");
                // setting value for scroll
                var destination = $('#seventh-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // $arrowToNextBlock.fadeIn();
                    // change value of flag to the original to allow next action
                    isAnimating  = false;
                });
            };
            // EIGHTTH SCREEN, SCROLL DOWN
            // go to the ninth section
            if ($(this).scrollTop() > ($('#eightth-screen').offset().top)  && $(this).scrollTop() <= (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight + sixthScreenHeight + seventhScreenHeight + eightthScreenHeight/3) && isAnimating  == false) {
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#tenth-screen");
                // setting value for scroll
                var destination = $('#ninth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    $('.ninth-screen .wrp-for-animation').addClass('show-wrapp');
                    setTimeout(function() {
                      $('.ninth-screen .wrp-for-animation').addClass("hideWrapp");
                  },800);
                    // change value of flag to the original to allow next action
                    isAnimating  = false;
                });
            };
            // NINTH SCREEN, SCROLL UP
            // go back to the eightth section
            if ($(this).scrollTop() < ($('#ninth-screen').offset().top)  && $(this).scrollTop() > (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight + sixthScreenHeight + seventhScreenHeight + eightthScreenHeight/3) && isAnimating  == false) {
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting value for scroll
                var destination = $('#eightth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // change value of flag to the original to allow next action
                    isAnimating  = false;
                });
            };
            // NINTH SCREEN, SCROLL DOWN
            // go to the tenth section
            if ($(this).scrollTop() > ($('#ninth-screen').offset().top)  && $(this).scrollTop() <= (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight + sixthScreenHeight + seventhScreenHeight + eightthScreenHeight + ninthScreenHeight/3) && isAnimating  == false) {
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting value for scroll
                var destination = $('#tenth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // change value of flag to the original to allow next action
                    isAnimating  = false;
                });
            };
            // TENTH SCREEN, SCROLL UP
            // go back to the ninth section
            if ($(this).scrollTop() < ($('#tenth-screen').offset().top)  && $(this).scrollTop() > (firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight + sixthScreenHeight + seventhScreenHeight + eightthScreenHeight + ninthScreenHeight/3) && isAnimating  == false) {
                // change value of flag to prevent re-execution of the current action until it is completed
                isAnimating  = true;
                // setting ID of the previous screen to the arrow href
                $arrowToNextBlock.attr("href", "#tenth-screen");
                // setting value for scroll
                var destination = $('#ninth-screen').offset().top;
                // smooth transition to the third section ('easeOutQuart' — name of smooth animation)
                $('html, body').animate({
                    scrollTop: destination
                }, 800, 'easeOutQuart', function(){
                    // change value of flag to the original to allow next action
                    isAnimating  = false;
                });
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
        // console.log($('.start-changing-title').position().top);
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
    $textScrollFifth.scroll(function () {
        // PROGRESS BAR
        // calculate the width of the progress bar during a scroll:
        // getting maximum scroll top, this will be equal to 100%
        var maxScroll = $textInnerFifth.height() - $textScrollFifth.height();
        // taking a percent of the current scroll using the proportion
        var percent = $textScrollFifth.scrollTop() * 100 / maxScroll;
        // substituting received percent to width of progress line
        $progressLineFifth.width(percent + '%');
    });

    // var $bottomShowHideBtn = $('.bottom-title span');
    // var $hideBottomBtn = $('.hide-list');
    // var $bottomContent = $('.bottom-content');
    // var $bottomSubstrate = $('.bottom-substrate');

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




    //
    // (function () {
    //     $(window).scroll(function () {
    //         if($(this).scrollTop() >= firstScreenHeight/2) {
    //             $secondScreenMain.addClass('loaded');
    //         };
    //         if($(this).scrollTop() >= firstScreenHeight + secondScreenHeight/2) {
    //             $thirdContentCitizens.addClass('loaded');
    //         };
    //         if($(this).scrollTop() >= firstScreenHeight + secondScreenHeight + thirdScreenHeight/2) {
    //             $fourthContentCitizens.addClass('loaded');
    //         };
    //         if($(this).scrollTop() >= firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight/2)  {
    //             $fifthContentCitizensImg.addClass('loaded');
    //             $fifthContentCitizensText.addClass('loaded');
    //         };
    //         if($(this).scrollTop() >= firstScreenHeight + secondScreenHeight + thirdScreenHeight + fourthScreenHeight + fifthScreenHeight/2)  {
    //             $sixthContentCitizens.addClass('loaded');
    //         };
    //         if($(this).scrollTop() >= (footerScrollTop - firstScreenHeight))  {
    //             $footer.addClass('loaded');
    //         };
    //     });
    // })();

    // show/hide fixed header mob
    // (function () {
    //     $(window).scroll(function () {
    //         if($(this).scrollTop() >= firstScreenHeightMob) {
    //             $headerFixed.fadeIn();
    //         } else {
    //             $headerFixed.fadeOut();
    //         }
    //     })
    // })();

    // show/hide pop-up
    // (function () {
    //     $btnOrderConsultation.click(function () {
    //         $desctopApp.addClass('open-pop-up');
    //     });
    //     $popUpCloseBtn.click(function () {
    //         $desctopApp.removeClass('open-pop-up');
    //     });
    // })();

    // show/hide pop-up mobile
    // (function () {
    //     $btnOrderConsultationMob.click(function () {
    //         $mobileApp.addClass('open-pop-up');
    //     });
    //     $popUpCloseBtnMob.click(function () {
    //         $mobileApp.removeClass('open-pop-up');
    //     });
    // })();

    // scroll to the second page
    // (function () {
    //     $navigationLink.click(function (event) {
    //         var elementClick = $(this).attr("href");
    //         var destination = $(elementClick).offset().top;
    //         jQuery("html:not(:animated),body:not(:animated)").animate({
    //           scrollTop: destination
    //       }, 1500);
    //         return false;
    //     });
    // })();


});
