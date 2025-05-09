# INLINE_TestTask

## Описание
Это тестовое задание включает в себя реализацию веб-приложения с функционалом табов и слайдера для карточек продуктов. Проект выполнен с использованием методологии БЭМ и библиотеки Swiper.

## Установка

1. Склонируйте репозиторий:
```bash
git clone https://github.com/WebFLomD/INLINE_TestTask.git
```
2. Перейдите в директорию проекта:

```bash
cd INLINE_TestTask
```
3. Откройте файл `index.html` в вашем браузере или можете посмотреть [готовый проект](https://webflomd.github.io/TestTask_INLINE/).
## Функционал
- __Табы:__ Реализованы с помощью JavaScript. Доступны три вкладки: "ОПИСАНИЕ", "ОТЗЫВЫ", "ОТКУДА?".
- __Слайдер:__ Используется библиотека Swiper для отображения карточек продуктов. Слайдер активируется при сужении экрана, если карточки не помещаются на экран.
## Пример использования табов
```js
const links = document.querySelectorAll('.header__link');
const items = document.querySelectorAll('.main__item');

links.forEach(link => {
    link.addEventListener('click', function(event) {
    event.preventDefault(); 

    
    items.forEach(item => item.classList.remove('main__item--active'));
    
    const targetId = this.getAttribute('href');
    const targetItem = document.querySelector(targetId);
    targetItem.classList.add('main__item--active');


    links.forEach(link => link.classList.remove('header__link--active'));

    this.classList.add('header__link--active');
    });
}); 
```

## Контакты
Если у вас есть вопросы или предложения, пожалуйста, свяжитесь со мной. Я открыт для обсуждения и всегда рад новым возможностям.

- Email: sashaplay9@gmail.com
- Telegram: @zzakharovv
- Резюме hh.ru: [Резюме](https://hh.ru/resume/8c91e0e1ff0d81cbff0039ed1f4b5477584833)

### Спасибо за внимание!
