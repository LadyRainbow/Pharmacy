var gulp = require('gulp'),
    sass = require('gulp-sass'), //Подключаем Sass пакет
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления
    uglify = require('gulp-uglifyjs'),
  	concat = require('gulp-concat'),
    htmlhint = require("gulp-htmlhint"),
    browserSync  = require('browser-sync'); // Подключаем Browser Sync

    const FileInjector = require('./fileInjector');
    const workingDirectoryFI = 'E:\\Codyu\\ITM\\Аптека\\pharmacy\\app\\pages';
    const urlBaseDirectoryFI = 'E:\\Codyu\\ITM\\Аптека\\pharmacy\\app';
    const templatesDirectoryFI = 'E:\\Codyu\\ITM\\Аптека\\pharmacy\\app\\template';


gulp.task('htmlhint', function () {
    return gulp.src('app/pages/output/*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter());
});

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/build/css')) // Выгружаем результата в папку app/css
});

gulp.task('scripts', function() {
    return gulp.src('app/js/*.js')
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify())// Сжимаем JS файл
        .pipe(gulp.dest('app/build/js'));// Выгружаем в папку app/js
});

gulp.task('fileInjector', async () => {

    await FileInjector(workingDirectoryFI, templatesDirectoryFI, urlBaseDirectoryFI);
});

gulp.task('watch', ['sass', 'htmlhint', 'scripts', 'fileInjector'], function(){

    gulp.watch(['app/sass/**/*.scss', 'app/libs/**/*.css'], ['sass']);
    gulp.watch(['app/**/*.html', `${workingDirectoryFI}/configs/*.js`], ['fileInjector']);

    gulp.watch('app/js/**/*.js', ['scripts']); // Наблюдение за JS файлами в папке js
    gulp.watch('app/**/*.html', ['htmlhint']); // Наблюдение за HTML файлами в корне проекта
   //  browserSync.init({
   //     server: "./app"
   // });
   //
   // gulp.watch("app/scss/*.scss").on('change', browserSync.reload);
   // gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);
