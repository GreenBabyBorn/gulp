const enBtn = document.querySelector(".language-select__eng");
const ruBtn = document.querySelector(".language-select__ru");
const allLang = ["en", "ru"];

const wordsToTranslate = {
  en: {
    title: "Denis Novik",
    ".main__name": "Denis <br> Novik",
    ".main__text": "UX | UI designer <br> 24 years old, Minsk",
    ".about__title": "About me",
    "#about__text_1":
      "Hi, I'm Denis – UX/UI designer from Minsk. <br> I'm interested in design and everything connected with it.",
    "#about__text_2":
      'I\'m studying at courses "Web and mobile design interfaces" in IT-Academy.',
    "#about__text_3":
      "Ready to implement excellent projects <br> with wonderful people.",
    ".skills__title": "Skills",
    ".skills__text": "I work in such programs as",
    ".portfolio__title": "Portfolio",
    ".footer__title": "Contacts",
    ".footer__text": "Want to know more or just chat? <br> You are welcome!",
    ".footer__button": "Send message",
    ".footer__caption": "Like me on <br> LinkedIn, Instagram, Behance, Dribble",
    '.menu__item[data-goto="main"] a': "Home",
    '.menu__item[data-goto="about"] a': "About",
    '.menu__item[data-goto="skills"] a': "Skills",
    '.menu__item[data-goto="portfolio"] a': "Portfolio",
    '.menu__item[data-goto="contact"] a': "Contacts",
    ".language-select__eng": "ENG",
    ".language-select__ru": "RUS",
  },
  ru: {
    title: "Денис Новик",
    ".main__name": "Денис <br> Новик",
    ".main__text": "UX | UI дизайнер <br> 24 года, Минск",
    ".about__title": "Обо мне",
    "#about__text_1":
      "Привет, я Денис – UX/UI дизайнер из Минска. <br> Я интересуюсь дизайном и всем, что с ним связано.",
    "#about__text_2":
      'Я обучался на курсах "Интерфейсы веб и мобильного дизайна" в IT-академии.',
    "#about__text_3":
      "Готов реализовывать отличные проекты с замечательными людьми.",
    ".skills__title": "Скиллы",
    ".portfolio__title": "Портфолио",
    ".skills__text": "Я работаю в таких программах как",
    ".footer__title": "Контакты",
    ".footer__text":
      "Хотите узнать больше или просто поболтать? <br> Добро пожаловать!",
    ".footer__button": "Отправить сообщение",
    ".footer__caption": "Я на <br> LinkedIn, Instagram, Behance, Dribble",
    '.menu__item[data-goto="main"] a': "Главная",
    '.menu__item[data-goto="about"] a': "Обо мне",
    '.menu__item[data-goto="skills"] a': "Скиллы",
    '.menu__item[data-goto="portfolio"] a': "Портфолио",
    '.menu__item[data-goto="contact"] a': "Контакты",
    ".language-select__eng": "АНГЛ",
    ".language-select__ru": "РУС",
  },
};

changeLanguage();

ruBtn.addEventListener("click", (item) => {
  enBtn.classList.remove("_active");
  ruBtn.classList.add("_active");
  location.href = window.location.pathname + "#ru";
  // changeLanguage();
  window.location.reload();
});
enBtn.addEventListener("click", (item) => {
  ruBtn.classList.remove("_active");
  enBtn.classList.add("_active");
  location.href = window.location.pathname + "#en";
  // changeLanguage();
  window.location.reload();
});

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (hash === "en") {
    ruBtn.classList.remove("_active");
    enBtn.classList.add("_active");
  }
  if (hash === "ru") {
    enBtn.classList.remove("_active");
    ruBtn.classList.add("_active");
  }
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  for (let key in wordsToTranslate[hash]) {
    let elem = document.querySelector(key);
    if (elem) {
      elem.innerHTML = wordsToTranslate[hash][key];
    }
  }
}
