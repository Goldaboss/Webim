const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    babel = require('gulp-babel');


gulp.task('styles', function(){ // Создаем таск "sass"
    return gulp.src('app/style.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts', function() {
    return gulp.src('app/script.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }))

});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', function() {
    gulp.watch('app/style.scss', gulp.parallel('styles')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('html')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/script.js', gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками

});

gulp.task('default', gulp.parallel('styles', 'browser-sync', 'watch'));