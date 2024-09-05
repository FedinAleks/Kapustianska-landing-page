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
