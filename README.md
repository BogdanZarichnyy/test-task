# test-task-goit

test-task-goit

https://bogdanzarichnyy.github.io/test-task/

Тестове завдання написане на React.js з використанням Redux Toolkit та modern-normalize.

    Загальна інформація.

Проект містить дві сторінки: домашню "/" та сторінку із картками користувачів "tweets". Посилання на
всі інші маршрути, відмінні від тих які задані в проеті, будуть переадресовувати на домашню
сторінку. При переході на сторінку "tweets" за допомогою кнопки "Go to Tweets page" на домашній
сторінці, із бази даних (БД) підвантажуються перших 8 карток, які після завантаження відображаються
на сторінці. В якості БД використаний сервіс https://mockapi.io, де згенеровані псевдодані для
нашого застосунку - 30 карток. Також ці дані присутні в проекті у файлі "./src/db/users.json",
представлені як масив об'єктів.

    1. Кпонка "Load More".

За допомогою кнопки "Load More" можна підвантажувати решту карток користувачів, по 8 штук за раз,
які присутні в БД, до тих пір поки не будуть завантаженні всі картки, внаслідок чого кнопка "Load
More" зникне із сторінки, оскільки підвантажувати більше нічого. Кнопка "Load More" зникне коли
останнє завантаження із БД біде містити менше 8 карток користувачів або їх не буде взагалі, тобто
прийде пустий масив даних.

    2. Фільтрація даних по категоріях.

На сторінці "tweets" присутній фільтр-селектор (dropdown) у вигляді кнопки, який дозволяє
відфільтрувати дані по категоріях "follow", "following" або "show all" по замовчуванню. Кнопка "Load
More" працює незалежно від вибраного значення фільтру-селектора, будуть підвантажуватися по 8
карток, але відображатися будуть тільки ті, які відповідають вибраному значенню у фільтрі-селектора.

    3. Функціонал кнопок у картках користувачів.

В кожній картці користувача присутня кнопка "follow", яка дозволяє додати себе як підрисника на
даного користувача. При натисканні (активації) на кнопку "follow" в полі "FOLLOWERS" кількість
підписників збільшиться на одиницю, оскіки до цієї кількості буде додано вас як підписника на даного
користувача, а також текст на кнопці активації зміниться з "follow" на "following" і кнопка змінить
колір на світло-зелений. При повторному натисканні на кнопку "following", ви як підписник будете
видалені із кількості підписників у полі "FOLLOWERS", і кількість підписників зменшиться на одиницю,
а також кнопка змінить свій колір на світло-сірий та зміниться текст з "following" на "follow".

    4. Взаємодія із БД.

При натисканні (активації) на кнопку "follow" робиться запит в БД на сервері, внаслідок чого
змінюється статус прапорця "isFollow" з "false" на "true", який присутній в кожній картці, для
даного користувача картки по ID - таким чином зберігаються всі зміни які були внесенні в картки
користувачів навіть після перезавантаженні сторінки браузера. Кількість підписників у полях
"FOLLOWERS" формується в залежності від цього прапорця в картах, а також колір та текст кнопки
"follow".
