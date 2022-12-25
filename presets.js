/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

// Проверьте, правильно ли пользователь указали имя для нового шаблона
function createComponentsFiles() {
    if (!process.argv[2]) {
        return console.error(
            `Вы должны указать имя страницы следующим образом:\n\nnpm run create componentName\n\n`
        );
    }
    const requestedPage = process.argv[2];
    const requestedPath = path.join(
        __dirname,
        'src',
        'components',
        requestedPage
    );

    // Проверьте, существует ли уже папка для нужного компонента
    if (fs.existsSync(requestedPath)) {
        /* eslint-disable-next-line */
        return console.console.error('Ошибка, папка уже существует!');
    }

    // Создайте необходимые файлы .pug, .js, .scss и папку images
    fs.mkdirSync(path.join(requestedPath));
    fs.mkdirSync(path.join(requestedPath, 'images'));

    fs.writeFile(
        path.join(requestedPath, `/${requestedPage}.js`),
        '',
        () => console.log(`Файл ${requestedPage}.js - создан`)
    );

    fs.writeFile(
        path.join(requestedPath, `/${requestedPage}.scss`),
        '',
        () => console.log(`Файл ${requestedPage}.scss - создан`)
    );

    fs.writeFile(
        path.join(requestedPath, `/${requestedPage}.pug`),
        '',
        () => console.log(`Файл ${requestedPage}.pug - создан`)
    );
}

createComponentsFiles();
