document.getElementById('lookButton').addEventListener('click', function () {
    window.location.href = './pages/blog.html'; // Замените URL на нужный
});
document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    const languageSelector = document.getElementById('language-selector');
    if (selectedLanguage) {
        languageSelector.value = selectedLanguage;
    }
    translatePage(selectedLanguage);
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });

    // Функция для перевода страницы
    function translatePage(language) {
        document.querySelector('#start-view .phrase').textContent = translations[language].phrase;
        document.querySelector('#start-view .indicator-bottom p').textContent = translations[language].scrollDown;

        document.querySelector('header a[href="./pages/blog.html"]').textContent = translations[language].blog;
        document.querySelector('header a[href="./pages/projects.html"]').textContent = translations[language].projects_header;
        document.querySelector('header a[href="./pages/about.html"]').textContent = translations[language].aboutMe;
        document.querySelector('header a[href="#contact"]').textContent = translations[language].contact;

        document.querySelector('#brief-info .greeting-and-name').textContent = translations[language].hiIm;
        document.querySelector('#brief-info .info-block-flex p:nth-of-type(1)').textContent = translations[language].intro1;
        document.querySelector('#brief-info .info-block-flex p:nth-of-type(2)').textContent = translations[language].intro2;
        document.querySelector('#brief-info .name-block p').textContent = translations[language].name;

        document.querySelector('#contact .text-block p:nth-of-type(1)').textContent = translations[language].readArticles;
        document.querySelector('#contact .text-block p:nth-of-type(2)').textContent = translations[language].checkOut;
        document.querySelector('#contact #lookButton').textContent = translations[language].look;

        const socialItems = document.querySelectorAll('#contact .social-item p');
        socialItems[0].textContent = translations[language].social.tg;
        socialItems[1].textContent = translations[language].social.x;
        socialItems[2].textContent = translations[language].social.tiktok;
        socialItems[3].textContent = translations[language].social.youtube;
        socialItems[4].textContent = translations[language].social.instagram;
        socialItems[5].textContent = translations[language].social.tg2;

        document.querySelector('.footer-text:nth-of-type(1)').textContent = translations[language].footerEmail;
        document.querySelector('.footer-text:nth-of-type(2)').textContent = translations[language].footerRights;
    }

    // При загрузке страницы
    document.addEventListener('DOMContentLoaded', () => {
        const savedLanguage = localStorage.getItem('selectedLanguage'); // Получаем сохраненный язык
        const languageToUse = savedLanguage ? savedLanguage : 'en'; // Если язык сохранен, используем его, иначе 'en'
        document.getElementById('language-selector').value = languageToUse; // Устанавливаем выбранное значение в селекторе
        translatePage(languageToUse);
    });

    // Обработчик изменения выбора языка
    document.getElementById('language-selector').addEventListener('change', function () {
        const selectedLanguage = this.value;
        localStorage.setItem('selectedLanguage', selectedLanguage); // Сохраняем язык в localStorage
        translatePage(selectedLanguage);
    });
});