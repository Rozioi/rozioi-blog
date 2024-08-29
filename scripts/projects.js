document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage'); // Получаем сохраненный язык
    const languageToUse = savedLanguage ? savedLanguage : 'en';
    document.getElementById('language-selector').value = languageToUse; // Устанавливаем выбранное значение в селекторе
    translatePage(languageToUse);
});

function translatePage(language) {
    document.querySelector('header a[href="./blog.html"]').textContent = translations[language].blog;
    document.querySelector('header a[href="./projects.html"]').textContent = translations[language].projects_header;
    document.querySelector('header a[href="./about.html"]').textContent = translations[language].aboutMe;
    document.querySelector('header a[href="#contact"]').textContent = translations[language].contact;
    const projects = translations[language].projects;
    const projectElements = document.querySelectorAll('.project');

    projectElements.forEach((element, index) => {
        const title = element.querySelector('img').alt; // Используем alt атрибут как заголовок
        const description = projects[index].description;

        element.querySelector('.description').textContent = description;
        element.querySelector('img').alt = title; // Сохраняем альтернативный текст для картинки
    });

}

// Обработчик изменения выбора языка
document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    localStorage.setItem('selectedLanguage', selectedLanguage); // Сохраняем язык в localStorage
    translatePage(selectedLanguage);
});
