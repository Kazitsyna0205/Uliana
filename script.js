document.addEventListener('DOMContentLoaded', function() {

    // --- ИНТЕРАКТИВНОСТЬ НА СТРАНИЦЕ "СОВЕТЫ" ---
    const tipButton = document.getElementById('getTipBtn');
    const tipParagraph = document.getElementById('randomTip');
    
    // Большой массив с советами для разнообразия
    const tipsArray = [
        "Не учи всё в ночь перед экзаменом. Лучше повторить структуру.",
        "Скачай приложение для заметок (Notion / Obsidian) и структурируй лекции.",
        "Заведи знакомства со старшекурсниками — помогут с ответами на экзаменах.",
        "Участвуй в научных конференциях — это + в портфолио и опыт выступлений.",
        "Не бойся брать академический отпуск, если чувствуешь выгорание.",
        "Посещай все пары первую неделю — узнаешь требования преподавателей.",
        "Купи удобную обувь. В ТГПУ большие корпусы, много ходить пешком.",
        "Скачай библиотеки города: студенческий дает скидки и бесплатные входы.",
        "В Профкоме можно получить материальную помощь. Не стесняйся спрашивать.",
        "Питайся нормально. Бутерброды в общаге — не выход."
    ];

    if (tipButton) {
        tipButton.addEventListener('click', function() {
            // Генерируем случайное число от 0 до длины массива
            const randomIndex = Math.floor(Math.random() * tipsArray.length);
            const randomAdvice = tipsArray[randomIndex];
            tipParagraph.textContent = randomAdvice;
            
            // Добавляем визуальный эффект (небольшая анимация)
            tipParagraph.style.transform = 'scale(1.02)';
            setTimeout(() => {
                tipParagraph.style.transform = 'scale(1)';
            }, 200);
        });
    }

    // --- ПОДСВЕТКА АКТИВНОЙ ССЫЛКИ ---
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentLocation.split('/').pop()) {
            link.classList.add('active');
        }
    });
});
