# Ciscer

Программа для успешного написания тестов CCNA без заучивания ответов.

_**Замечание.** Компьютерные сети - крайне важная дисциплина._

## Установка

1. Установите плагин [GreaseMonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey/) для Firefox. После установки справа на панели инструментов должна появиться иконка с изображением довольной обезьянки.
2. В меню плагина выберите пункт «создать скрипт». В появившемся диалоговом окне в поля «название» и «пространство имён» введите `mipt`, все остальные поля оставьте пустыми. Нажмите «OK».
3. В открывшийся редактор скопируйте код из файла [http://umath.ru/cs.js](http://umath.ru/cs.js) (обфусцированная версия файла `client.js`) и сохраните.
4. Протестируйте скрипт: откройте какую-нибудь страницу, нажмите `Ctrl+Space` и выделите любой текст. Если в левом нижнем углу экрана появилась надпись, например, `not found`, то всё работает.

## Использование

Перейдите на страницу тестирования и активируйте скрипт клавишами `Ctrl+Space`. Из репозитория загрузятся модули с ответами к тесту.
Далее мышкой выделяйте вопросы теста (или их части), и в левом нижнем углу экрана будут показываться ответы. В программе задано соответствие «вопрос - правильные ответы». После выделения вами текста скрипт ищет в своей базе вопрос, содержащий этот текст. Если не удаётся найти вопрос по какой-то его части, попробуйте выделить другую часть. Для поиска ответа длина выделенного текста должна быть не меньше 10 символов.

#### Горячие клавиши
+ `Ctrl+Shift` — включить/выключить незаметное выделение текста
+ `Ctrl+Alt + ↑` — переместить подсказку вверх/вниз
+ `Ctrl+Space` — расставить точки перед правильными ответами*
+ `Ctrl+Alt + ←/→` или `Ctrl+Alt + колёсико мыши`— показать предыдущую/следующую подсказку к лабораторной работе или вопросу на соответствие

Точки перед правильными ответами выглядят вот так (на картинке правильный ответ - последний):

![Right answer point](http://umath.ru/img/ciscer_point.png)

\*Точки перед ответами появятся только в тех вопросах теста, которые уже были вами просмотрены (связано это с тем, что вопросы загружаются на страницу только по мере их открытия).

## Добавление тестов

Вопросы и ответы к тесту программа загружает из репозитория из файла `answers.js`. Соответственно, перед каждым занятием в этом файле должны находиться ответы на текущий тест. Структура его следующая.

После строки `var add = tests.add;` указываются все вопросы с выбором ответа и вопросы с пропуском. Формат такой:
```javascript
add('question', 'answer0', 'answer1', ...);
```
Первый аргумент - вопрос, за ним - правильные ответы.

После строки `var add = prompts.add;` указываются подсказки к вопросам на соответствиее (*grad-and-drop*) и к лабораторной работе в формате:
```javascript
add('prompt');
```
Например,
```javascript
add('full operating system > flash');
add('limited operating system > ROM');
```

Вопросы и ответы к тестам можно найти на сайте ccna5.net.
Внутри одинарных кавычек не должно быть никаких скобок. Их нужно удалять.

## Внесение изменений в репозиторий

Итак, перед каждым занятием в файле `answers.js` репозитория должны быть вопросы и ответы на текущий тест. Если вы хотите иметь возможность обновлять этот файл, напишите [мне](http://vk.com/id170372339), прикрепив ссылку на свой аккаунт на GitHub, и я дам вам права на редактирование репозитория.

#### Правила редактирования репозитория:

1. Изменять разрешается только файлы `answers.js` и `answers_archive.js`.
2. Перед сохранением изменений в `answers.js` убедитесь в их валидности.
3. Ваши изменения в файле `answers.js` не должны мешать другим группам: если вы пишете тест `X`, а другая группа пишет тест `Y`, то не удаляйте тест `Y`.
4. Желательно, чтобы файл `answers.js` не содержал лишних тестов.
5. При удалении написанного теста из файла `answers.js` добавляйте этот тест в файл `answers_archive.js` - заботьтесь о следующих поколениях :).
6. Примеры commit message: `Added ccna1-chapter4, deleted ccna1-chapter2`, `Edited ccna1-chapter3`.

Если что-то не работает или работает не так, или у вас есть предложение по улучшению программы - добро пожаловать на вкладку Issues.

Если вы знаете JavaScript, и вам самим хочется что-то поменять/добавить в коде (`core.js`, `client.js`), то делайте fork репозитория, редактируйте и создавайте pull request.
