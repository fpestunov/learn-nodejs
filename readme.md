# Learn Node.js

Его целью не является разбор всех-всех возможностей и модулей Node.JS, ведь многие из них используются очень редко.

С другой стороны, мы очень подробно разберём основные возможности и средства создания веб-сервисов, включая внутренние особенности самого сервера Node.JS, важные для его работы.

Код: https://github.com/iliakan/nodejs-screencast

Инструменты:
- 1
- 2
- 3

## Что такое Node.js

- Ryan Dahl 2009, https://habr.com/ru/post/413187/
- Node = V8 + i/o + libraries
- V8 (Google) - быстро, экономно, НО! не умеет работать с сетью (TCP, UDP etc), файлами, базами данных ...
- JS работает на клиенте и сервере
- что делает хорошо? большое кол-во соединений - чаты и т.п., но слабо проработаны вычислительные штуки, кт. должны работать параллельно;
- удобный менеджер пакетов `npm`;
- большое сообщество и пакетов/модулей;

## Установка и запуск

- запустим первый скрипт в консоли `node 01.js`
- API Node.js https://nodejs.org/en/docs/
- уровни "стабильности" - от 0 (могут меняться) до 2

## Модули для Node.JS

- создаем первый проект User;
- в браузере подключаем файлы через script, а в node используем require;
- вынесем класс User в отдельный файл;
- в каждом модуле есть объект `exports` в котором необходимо хранить глобальные данные, пч по умолчанию они недоступны;
- а если хотим глобально, то делаем `global`, но на практике обычно не используется, есть инструмент другого подключения глобального;

Виды модулей:
- js
- NODE // для быстрых штук, кт делаем на С++ и требует функций операционки
- json

Сделаем русификацию:
- добавим `ru.json`
- выведем... работает!

Этот формат полезен для хранения данных в простейшем виде в файлах.


