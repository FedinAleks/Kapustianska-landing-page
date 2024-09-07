// FIXED MENU AND BUTTON GO TO TOP//

window.onscroll = function() {
    const header = document.querySelector('header');
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Зміна кольору хедера при скролі
    if (window.pageYOffset > 0) {
        header.style.backgroundColor = '#A53512'; /* Колір хедера при скролі */
    } else {
        header.style.backgroundColor = 'transparent'; /* Початковий колір */
    }

    // Відображення кнопки при скролі вниз
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Функція для переміщення до верхньої частини сторінки
document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// MOBILE MENU 

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
// Закривання меню при натисканні на пункт меню
document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', function() {
        toggleMenu(); // Закриваємо меню
    });
});

// SELECTED BUTTON

const menuLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', function() {
    let fromTop = window.scrollY;

    menuLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// BUTTONS TO PRICE

function scrollToPrice() {
    document.querySelector('#price_block').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// FORM //

function validateForm() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;

        if (!input.checkValidity()) {
            errorMessage.style.display = 'block';
            input.classList.add('error');
            isValid = false;
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Обробник подій для відправлення форми
document.querySelector('form').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Запобігає відправленню форми при невірних даних
    }
});

function submitForm() {
    if (validateForm()) {
        // Тут можеш додати код для відправлення форми, якщо потрібно
        console.log("Форма валідна, можеш відправити дані.");
    }
}



// SLIDER //

document.addEventListener('DOMContentLoaded', () => {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const visibleSlides = 3; // Кількість видимих слайдів
    let currentSlide = 0;

    function updateSlidePosition() {
        const slideWidth = slides[0].offsetWidth;
        slidesWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slides.length - visibleSlides;
        }
        updateSlidePosition();
    });

    nextButton.addEventListener('click', () => {
        if (currentSlide < slides.length - visibleSlides) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlidePosition();
    });

    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const videoUrl = e.target.getAttribute('data-video');
            const video = document.createElement('video');
            video.src = videoUrl;
            video.controls = true;
            video.autoplay = true;
            
            const container = e.target.parentElement;
            container.innerHTML = '';
            container.appendChild(video);
        });
    });

    updateSlidePosition();
});


// F A Q ////////

document.querySelectorAll('.faq_wrapper .question').forEach(function(question) {
    question.addEventListener('click', function() {
        // Знаходимо відповідь, яка йде після цього питання
        const answer = question.nextElementSibling;

        // Перемикаємо відображення відповіді
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            question.classList.remove('active'); // Прибираємо клас 'active'
        } else {
            answer.style.display = 'block';
            question.classList.add('active'); // Додаємо клас 'active'
        }

        // Змінюємо іконку з плюса на мінус
        const icon = question.querySelector('.toggle-icon');
        icon.src = (icon.src.includes('icon-plus.svg')) ? './image/icon-minus.svg' : './image/icon-plus.svg';
    });
});



// LANGUAGE //


const translations = {
    ua: {
        menutitle: "Меню",
        aboutme: "Про мене",
        aboutcourse: "Про курс",
        youneedcourse: "Для кого курс",
        pricing: "Тарифи",
        reviews: "Відгуки",
        contacts: "Контакти",

        h1: "Розкутість та гнучкість: <br>мистецтво руху",
        buttonstartnow: "почни зараз",

        aboutmeh3: "Привіт, я Юля - твій майбутній тренер по стретчинг",
        aboutmemaintext: "Я допоможу досягти гнучкості, яка змусить тебе сяяти! Мій курс містить інтегроване поєднання стретчингу та кардіо. Хочеш отримати тіло своєї мрії та розкутість, яка привертає увагу? Тоді почни вже сьогодні!",

        aboutcourseh2: "Що це за курс такий?",
        aboutcoursesubtitle: "Мій курс - це твоя нова реальність! Ти отримаєш:",

        courselisttitle1: "Заняття в записі",
        courselisttext1: "Доступ до відеоуроків, які дозволять тобі займатися в будь-який зручний час",
        courselisttitle2: "Комплекс вправ",
        courselisttext2: "Стретчинг у поєднанні з кардіо тренуваннями забезпечить всебічний розвиток твоєї фізичної форми",
        courselisttitle3: "Впевненість",
        courselisttext3: "Після закінчення курсу твоє тіло, граційність та осанка привертатимуть увагу інших",
        courselisttitle4: "Зниження стресу",
        courselisttext4: "Регулярні вправи допоможуть тобі збільшити рівень енергії та зменшити стрес у повсякденному житті",
        courselisttitle5: "Покращення здоров’я",
        courselisttext5: "Заняття сприятимуть загальному покращенню твого здоров’я та самопочуття",
        courselisttitle6: "Секрети масажу",
        courselisttext6: "Вправи, що допоможуть зменшити або повністю позбутися болю в спині після довгого робочого дня",
        courselbutton: "спробуй безкоштовно",

        youneedh2: "Цей курс підходить тобі, якщо ти:",
        youneedtitletext1: "Мрієш про гарне тіло",
        youneedtext1: "Прагнеш досягти ідеальної форми та підтягнутості",
        youneedtitletext2: "Швидко втомлюєшся",
        youneedtext2: "Прокидаєшся вже виснаженою і відчуваєш нестачу енергії протягом дня",
        youneedtitletext3: "Постійно переживаєш стрес",
        youneedtext3: "Високий рівень стресу негативно впливає на твоє фізичне та психічне здоров'я",
        youneedtitletext4: "Не відчуваєш себе розкутою з партнером",
        youneedtext4: "Вважаєш, що не така пластична, як інші дівчата, і це знижує твою впевненість",
        youneedtitletext5: "Думаєш, що стретчинг - це лише про шпагат",
        youneedtext5: "Переконана, що цей вид тренувань не дасть тобі гарної постави чи підтягнутого тіла",
        youneedbutton: "так, це про мене!",

        programsh2: "Для кого він?",
        program_listtitle1: "Trial <br>(для всіх, хто бажає)",
        program_program1list1: "Сумніваєшся в ефективності онлайн стретчингу: хочеш спробувати формат перед тим, як приймати остаточне рішення.",
        program_program1list2: "Маєш напружений графік: шукаєш спосіб перевірити, чи підходить тобі стретчинг, як метод покращення здоров’я.",

        program_listtitle2: "Basic <br>(для новачків)",
        program_program2list1: "Тільки починаєш знайомство зі стретчингом: хочеш навчитися основам і покращити свою гнучкість.",
        program_program2list2: "Шукаєш методи зниження стресу: прагнеш покращити психічне здоров’я за допомогою простих та ефективних вправ.",

        program_listtitle3: "Pro <br>(для досвідчених)",
        program_program3list1: "Маєш певний рівень фізичної підготовки: хочеш досягти більш високих результатів у стретчингу.",
        program_program3list2: "Хочеш покращити свою гнучкість для спорту чи танців: прагнеш досягти нових висот у своїй фізичній підготовці. Шукаєш нові виклики!",

        priceh2: "Тарифи",
        priceblock1text1: "Доступ на тиждень",
        priceblock1text2: "Pозминка",
        priceblock1text3: "1 тренування з розтяжки",
        priceblock1text4: "2 тренування поперечний шпагат",
        priceblock1text5: "1  тренування «Рухливість суглобів»",
        priceblock1text6: "1 тренування «Здорова спина»",
        priceblock1text7: "Самомасаж",
        priceblock1text8: "Розтяжка в парі",

        priceblockbutton: "оплатити",

        priceblock2text1: "Доступ на місяць",
        priceblock2text2: "Pозминка",
        priceblock2text3: "8 тренувань з розтяжки",
        priceblock2text4: "🎁 ПОДАРУНОК",
        priceblock2text5: "Самомасаж",
        priceblock2text6: "2 тренування поперечний шпагат",
        priceblock2text7: "1  тренування «Рухливість суглобів»",
        priceblock2text8: "1 тренування «Здорова спина»",
        priceblock2text9: "Розтяжка в парі",

        priceblock3text1: "Доступ на 2 місяці",
        priceblock3text2: "Pозминка кардіо + підкачка",
        priceblock3text3: "8 тренувань з розтяжки",
        priceblock3text4: "2 тренування поперечний шпагат",
        priceblock3text5: "1  тренування «Рухливість суглобів»",
        priceblock3text6: "1 тренування «Здорова спина»",
        priceblock3text7: "🎁 ПОДАРУНОК",
        priceblock3text8: "Самомасаж",
        priceblock3text9: "Розтяжка в парі",

        reviewh2: "Вони змогли і ти зможеш!",
        reviewslide1_name: "Олена",
        reviewslide2_name: "Катя",
        reviewslide3_name: "Анастасія",
        reviewslide4_name: "Маша",
        reviewslide5_name: "Маша",
        
        formh3: "Все ще вагаєшся, який рівень обрати?",
        formtext1: "Залиш заявку і я допоможу з вибором!",
        namePlaceholder: "Ім'я*",
        nameError: "Будь ласка, напиши ім'я",
        phonePlaceholder: "Телефон*",
        phoneError: "Будь ласка, напиши номер телефону",
        messengerPlaceholder: "Месенджер для зв'язку*",
        messengerError: "Будь ласка, напиши зручний месенджер для зв'язку",
        formbutton: "надіслати",

        faqh2: "Поширені питання:",
        question1: "Чи підходить цей курс для початківців?",
        answer1: "Так, курс має різні рівні складності, включаючи пробний і базовий рівні, які ідеально підходять для початківців. Ви зможете навчитися основам стретчингу з легкими та зрозумілими поясненнями.",
        question2: "В якому форматі проходить курс?",
        answer2: "Це відео-уроки, з якими ви зможете займатися 24/7 в будь-якій точці світу. Обирайте для себе зручний час та місце для тренувань самостійно, та забудьте про відкладені мрії та плани!",
        question3: "Чи потрібне спеціальне обладнання для занять?",
        answer3: "Так, для більшості вправ вам будуть потрібні килимок, два блоки, мʼячик, рол і еластична стрічка.",
        question4: "Як часто потрібно займатися, щоб побачити результати?",
        answer4: "Рекомендується займатися принаймні 2-3 рази на тиждень для досягнення помітних результатів. Регулярні тренування допоможуть покращити гнучкість, знизити рівень стресу та покращити загальне самоаочуття.",
        question5: "Чи можу я займатися, якщо у мене були травми?",
        answer5: "Перед початком занять рекомендується проконсультуватися з лікаре, особливо якщо у вас були серйозні травми. Я зможу надати модифікації вправ для адаптації до різних фізичних обмежень.",
        question6: "Чи можу я отримати персональні консультації від тренера?",
        answer6: "Якщо у вас виникнуть будь-які питання, я завджи готова надати консультацію для індивідуального підходу та максимального результату. Напишіть мені у будь-який месенджер.",

    },
    en: {
        menutitle: "Menu",
        aboutme: "About Me",
        aboutcourse: "About Course",
        youneedcourse: "Who is the Course For",
        pricing: "Pricing",
        reviews: "Reviews",
        contacts: "Contacts",

        h1: "Freedom and Flexibility: <br>The Art of Movement",
        buttonstartnow: "start now",

        aboutmeh3: "Hello, I'm Yulia—your future stretching coach",
        aboutmemaintext: "I'll help you achieve flexibility that will make you shine! My course offers an integrated combination of stretching and cardio. Do you want to get the body of your dreams and a confidence that turns heads? Start today!",

        aboutcourseh2: "What is this course?",
        aboutcoursesubtitle: "My course is your new reality! You will get:",

        courselisttitle1: "Recorded lessons",
        courselisttext1: "Access to video lessons that allow you to practice at any convenient time",
        courselisttitle2: "Exercise program",
        courselisttext2: "Stretching combined with cardio workouts for comprehensive physical development",
        courselisttitle3: "Health improvement",
        courselisttext3: "Lessons will contribute to overall health and well-being",
        courselisttitle4: "Stress reduction",
        courselisttext4: "Regular exercises will help you increase energy levels and reduce stress in everyday life",
        courselisttitle5: "Confidence",
        courselisttext5: "After completing the course, your body, grace, and posture will attract the attention of others",
        courselisttitle6: "Massage secrets",
        courselisttext6: "Exercises to help reduce or completely eliminate back pain after a long workday",
        courselbutton: "Try for Free",

        youneedh2: "This course is for you if you:",
        youneedtitletext1: "Dream of a beautiful body",
        youneedtext1: "Aspire to achieve ideal shape and tone",
        youneedtitletext2: "Tire quickly",
        youneedtext2: "Wake up already exhausted and feel a lack of energy throughout the day",
        youneedtitletext3: "Constantly stressed",
        youneedtext3: "High stress levels negatively impact your physical and mental health",
        youneedtitletext4: "Don't feel confident with your partner",
        youneedtext4: "Believe you're not as flexible as other women, which lowers your confidence",
        youneedtitletext5: "Think stretching is just about doing the splits",
        youneedtext5: "Convinced that this type of training won’t give you good posture or a toned body",
        youneedbutton: "Yes, that's me!",

        programsh2: "Who is it for?",
        program_listtitle1: "Trial <br>(for all interested)",
        program_program1list1: "Doubt the effectiveness of online stretching: want to try the format before making a final decision.",
        program_program1list2: "Busy schedule: need to see if stretching fits into your routine to improve health.",

        program_listtitle2: "Basic <br>(for beginners)",
        program_program2list1: "Just starting with stretching: want to learn the basics and improve your flexibility.",
        program_program2list2: "Looking for stress reduction methods: aim to enhance mental health with simple and effective exercises.",

        program_listtitle3: "Pro <br>(for experienced)",
        program_program3list1: "Have a certain level of physical fitness: want to achieve higher results in stretching.",
        program_program3list2: "Improve flexibility for sports or dance: aim to reach new heights in your training. Seeking new challenges!",

        priceh2: "Pricing",
        priceblock1text1: "Access for one week",
        priceblock1text2: "Warm-up",
        priceblock1text3: "1 stretching lesson",
        priceblock1text4: "2 split training lessons",
        priceblock1text5: "1 joint mobility lesson",
        priceblock1text6: "1 «Healthy Back» lesson",
        priceblock1text7: "Self-massage",
        priceblock1text8: "Partner stretching",

        priceblockbutton: "Pay Now",

        priceblock2text1: "Access for 1 month",
        priceblock2text2: "Warm-up",
        priceblock2text3: "8 stretching lessons",
        priceblock2text4: "🎁 GIFT",
        priceblock2text5: "Self-massage",
        priceblock2text6: "2 split training lessons",
        priceblock2text7: "1 joint mobility lesson",
        priceblock2text8: "1 «Healthy Back» lesson",
        priceblock2text9: "Partner stretching",

        priceblock3text1: "Access for 2 months",
        priceblock3text2: "Cardio warm-up + toning",
        priceblock3text3: "8 stretching lessons",
        priceblock3text4: "2 split training lessons",
        priceblock3text5: "1 joint mobility lesson",
        priceblock3text6: "1 «Healthy Back» lesson",
        priceblock3text7: "🎁 GIFT",
        priceblock3text8: "Self-massage",
        priceblock3text9: "Partner stretching",

        reviewh2: "They did it, and so can you!",
        reviewslide1_name: "Emma",
        reviewslide2_name: "Emma",
        reviewslide3_name: "Emma",
        reviewslide4_name: "Emma",
        reviewslide5_name: "Emma",

        formh3: "Still unsure which level to choose?",
        formtext1: "Submit your request, and I will help you decide!",
        namePlaceholder: "Name*",
        nameError: "Please enter your name",
        phonePlaceholder: "Phone number*",
        phoneError: "Please enter your phone number",
        messengerPlaceholder: "Preferred messenger*",
        messengerError: "Please enter your preferred messenger for communication",
        formbutton: "send",

        faqh2: "FAQ",
        question1: "Is this course suitable for beginners?",
        answer1: "Yes, the course includes various difficulty levels, including trial and basic levels, which are perfect for beginners. You will learn basic of stretching with easy and clear explanation.",
        question2: "What format is the course in?",
        answer2: "These are video lessons that you can access 24/7 from anywhere in the world. Choose a convenient time and place for your workouts, and forget about postponed dreams and plans!",
        question3: "Do I need special equipment for the exercises?",
        answer3: "Yes, for most exercises you will need a mat, two blocks, a ball, a roller, and a resistance band.",
        question4: "How often should I exercise to see results?",
        answer4: "It is recommended to exersice at least 2-3 times a week to achive noticeable results. Regular training will help improve flexibility, reduce stress levels, and enhance overall well-being.",
        question5: "Can I exercise if I have had injuries?",
        answer5: "It is recommended to consult with a doctor before starting the exercises, especially if you have had serious injuries. I can provide modifications to exercises to adapt to different limitations.",
        question6: "Can I get personal consultations from the coach?",
        answer6: "If you have any questions, I am always ready to provide consultation for an individualized approach and maximum results. Contact me via any messenger.",

    }
};

function setLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        // Використовуємо innerHTML для вставки HTML-контенту, включно з тегами
        element.innerHTML = translations[lang][key];
    });

    // Переклад placeholder атрибутів
    const placeholdersToTranslate = document.querySelectorAll('[data-translate-placeholder]');
    placeholdersToTranslate.forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        input.setAttribute('placeholder', translations[lang][key]);
    });

    // Додаємо підкреслення до вибраної мови
    document.querySelectorAll('.button_language').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(lang).classList.add('active');
}

// Вибір мови за замовчуванням
setLanguage('ua');

