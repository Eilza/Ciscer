#Ciscer

Программа для успешного написания тестов CCNA без заучивания ответов.

_**Замечание.** Компьютерные сети - крайне важная дисциплина. Программа лишь избавляет от необходимости заучивать ответы._

##Установка

1. Установите плагин [GreaseMonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey/) для Firefox. После установки справа на панели инструментов должна появиться иконка с изображением довольной обезьянки.
2. В меню плагина выберите пункт «создать скрипт». В появившемся диалоговом окне в поля «название» и «пространство имён» введите mipt, все остальные поля оставьте пустыми. Нажмите «OK».
3. В открывшийся редактор скопируйте код из файла `client.js` и сохраните.
4. Протестируйте скрипт: откройте какую-нибудь страницу, нажмите `Ctrl+Space` и выделите любой текст. Если в левом нижнем углу экрана появилась надпись, например, `not found`, то всё работает.

##Использование

Активируйте скрипт клавишами `Ctrl+Space`. Из репозитория загрузятся модули с ответами к тесту.
Далее мышкой выделяйте вопросы теста (или их части), и скрипт будет показывать ответы в левом нижнем углу экрана. В программе задано соответствие «вопрос — правильные ответы». После выделения вами текста скрипт ищет в своеё базе вопрос, содержащий этот текст. Если не удаётся найти вопрос по какой-то его части, попробуйте выделить другую часть.

####Горячие клавиши
+ `Ctrl+Shift` — включить/выключить незаметное выделение текста
+ `Ctrl+Alt + ↑` — переместить подсказку вверх/вниз
+ `Ctrl+Space` — расставить точки перед правильными ответами*
+ `Ctrl+Alt + ←/→` или `Ctrl+Alt + колёсико мыши`— показать предыдущую/следующую подсказку к лабораторной работе или вопросу на соответствие

\*Точки перед ответами появятся только в тех вопросах теста, которые уже были вами просмотрены (связано это с тем, что вопросы загружаются на страницу только по мере их открытия).

##Добавление тестов

Вопросы и ответы к тесту программа берёт из файла `answers.js`. Соответственно, перед каждым тестом этот файл нужно обновлять. Структура его следующая.

После строки `var add = tests.add;` указываются все вопросы с выбором ответа и вопросы с пропуском ответа. Формат такой:
`add('question', 'answer0', 'answer1', ...);`
Первый аргумент - вопрос, за ним - правильные ответы.

После строки `var add = prompts.add;` указываются подсказки к вопросам на соответствиее (grad-and-drop) и к лабораторной работе в формате:
`add('prompt');`
Например,
`add('full operating system > flash');`
`add('limited operating system > ROM');`

Вопросы и ответы к тестам можно найти, например, на сайте ccna5.net.