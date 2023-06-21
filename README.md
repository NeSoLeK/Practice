# Practice

Алгоритм:
------
На сервере хранится список ключевых слов, которым соответствует несколько URL.
Клиент посылает ключевое слово на сервер.
Сервер передаёт клиенту список URL.
Клиент выбирает один URL из списка и через сервер в многопоточном режиме скачивает контент.
Клиент сохраняет контент в LocalStorage с возможностью чтения оффлайн.

Сервер должен:
--------------
Хранить соответствие ключевых слов с URLами.
При скачивании контента передавать статус загрузки: размер, кол-во запущенных потоков, прогресс загрузки.
Кол-во потоков и скорость на поток должно быть ограничено посредством конфига.


Клиент должен:
--------------
Иметь поле для ввода ключевого слова.
Иметь возможность показа списка URL с возможностью выбора пользователем нужного.
Показывать статус загрузки: размер, кол-во запущенных потоков, прогресс загрузки.
Иметь возможность показа списка загруженного контента с возможностью выбора пользователем нужного.
Показать выбранный загруженный контент.

Требования:
-----------
JavaScript/Node.js
Можно использовать клиентский и серверный фреймворк по своему выбору.
Код задания предоставить в виде репозитория на github\gitlab\bitbucket
В README.md должна содержаться инструкция по запуску
Результат должен быть доступен публично (чтобы не обязательно было разворачивать локально).

## Features

- Вкладка с полным списком всех доступных ключей
- Вкладка со скаченным контентом
- Открытие HTML страницы скачанного сайта в iframe

## Links
Ниже представлены все заготовленные ключи в формате Ключ/Ссылка

| Ключ | Ссылка |
| ------ | ------ |
| Одежда | https://ru.wikipedia.org/wiki/Одежда |
| Одежда | https://www.kant.ru/catalog/clothes/ |
| Одежда | https://www.ozon.ru/category/zhenskaya-odezhda-7501/ |
| Рецепт | https://eda.ru/recepty |
| Рецепт | https://1000.menu/ |
| Рецепт | https://www.gastronom.ru/recipe |
| Спорт | https://www.sports.ru/ |
| Спорт | https://ru.wikipedia.org/wiki/Спорт |
| Спорт | https://news.sportbox.ru/ |


## Tech

В данном проекте были использованы:

- [Bootstrap](https://getbootstrap.com/) - Мощный, расширяемый и функциональный набор инструментов для фронтенда.
- [Node.js](https://nodejs.org/en) - Кроссплатформенная среда выполнения JavaScript с открытым исходным кодом.
- [Express](https://expressjs.com/) - Фреймворк для node.js
- [Axios](https://axios-http.com/ru/docs/intro) - HTTP-клиент, основанный на [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) для node.js и браузера.
- [Cors](https://github.com/expressjs/cors) - это пакет node.js для предоставления промежуточного программного обеспечения Connect/Express, которое может быть использовано для включения CORS с различными опциями


## Installation

Для работы требуется Node.js v10+.

Установите зависимости и запустите сервер.

```sh
cd practice
npm i
node app.js
```

