// Асинхронная загрузка позволяет браузеру не дожидаться ее загрузки и продолжать загрузку основного HTML и других ресурсов. В результате увеличивается скорость работы сайта для посетителя.

//Или подключать с задержкой, т.к. долгая загрузка скрипта
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var play;

function onYouTubeIframeAPIReady() {
    play = new YT.Player('play', {videoId: '9nFtzdOZtVk',});
}

  // onYouTubeIframeAPIReady() - API вызывает эту функцию после того, как JavaScript для API проигрывателя загружен на страницу. С помощью этой функции можно создаем объекты проигрывателя, которые необходимо отображать при загрузке страницы

function onPlayerReady(event) {
  event.target.playVideo();
} // Функция обозначает, что проигрыватель должен начать воспроизведение видео после того, как он готов к работе. функция будет выполняться, когда вызывается событие.

function playVideo() {
  play.playVideo();
}; // Воспроизведение видео

function pauseVideo() {
  play.pauseVideo();
}

var $videoBtn = $('.video-btn');
var $videoWrp = $('.right-section');
var $videoSection = $('.right-section-gradient');

// $videoBtn.click(function () {
//     if ($videoWrp.hasClass('open-video')) {
//         pauseVideo();
//         setTimeout(function () {
//             $videoWrp.removeClass('open-video');
//         }, 600);
//     } else {
//         $videoWrp.addClass('open-video');
//         setTimeout(playVideo, 600);
//     };
// });

$videoBtn.click(function () {
    if ($videoWrp.hasClass('open-video')) {
        return false;
    } else {
        $videoWrp.addClass('open-video');
        setTimeout(playVideo, 600);
    };
});
$videoSection.click(function () {
    if ($videoWrp.hasClass('open-video')) {
        pauseVideo();
        setTimeout(function () {
            $videoWrp.removeClass('open-video');
        }, 600);
    } else {
        return false;
    };
});
