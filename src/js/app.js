import * as functions from "./modules/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
functions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
functions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
functions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
functions.menuOpen();
