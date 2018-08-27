$(document).ready(function () {
    // --------SLIDER FOR FOURTH SCREEN------------------
    // slides variables
    var $slidersWrp = $('.slides-wrp');
    var $slider = $('.slide-block-content');
    var $btnSwitch = $('.btn-switch');
    var countSlides = $slidersWrp.children('.slide-block-content').length;
    var slidesArr = [];
    var currentSlideItem;

    // crosses variables
    var $switchCrossesWrp = $('.switch-crosses-wrp');
    var $switchCross = $('.switch-cross');
    var $switchCross1 = $('.switch-cross-1');
    var $switchCross2 = $('.switch-cross-2');
    var $switchCross3 = $('.switch-cross-3');
    var $switchCross4 = $('.switch-cross-4');
    var crossesArr = [];
    // var currentCrossItem;

    // push all sliders in the array
    $slider.each(function (index) {
        slidesArr.push($(this));
    });

    // push all crosses in the array
    $switchCross.each(function (index) {
        crossesArr.push($(this));
    });
    goToSlide(0);

    function goToSlide(index) {
        currentSlideItem = index;
        // remove class Active from all slides
        slidesArr.forEach(function (item) {
            item.removeClass('active');
        });
        // add class Active to the current slide
        slidesArr[currentSlideItem].addClass('active');
        // remove class Active from all crosses
        crossesArr.forEach(function (item) {
            item.removeClass('active');
        });
        // add class Active to the current cross
        crossesArr[currentSlideItem].addClass('active');
    };

    // switch slides by btn
    $btnSwitch.click(function(){
        var newSlideIndex = currentSlideItem + 1;
        if (newSlideIndex >= countSlides) {
            newSlideIndex = 0;
        }
        goToSlide(newSlideIndex);
    });

    // switch slides by crosses
    $switchCross1.click(function () {
        goToSlide(0);
    });
    $switchCross2.click(function () {
        goToSlide(1);
    });
    $switchCross3.click(function () {
        goToSlide(2);
    });
    $switchCross4.click(function () {
        goToSlide(3);
    });
});
