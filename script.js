// Ждем полной загрузки страницы
window.addEventListener('load', function() {
    // Запускаем таймер
    startTimer();
    // Инициализируем слайдер пожеланий
    initWishesSlider();
    // Инициализируем модальное окно с анкетой
    initGuestModal();
    // Анимации при скролле
    initScrollAnimations();
});

function startTimer() {
    const timerElement = document.getElementById('timer');
    
    // Создаем структуру таймера один раз
    timerElement.innerHTML = `
        <div class="time-unit">
            <span class="time-number" id="days">00</span>
            <span class="time-label">дней</span>
        </div>
        <div class="time-unit">
            <span class="time-number" id="hours">00</span>
            <span class="time-label">часов</span>
        </div>
        <div class="time-unit">
            <span class="time-number" id="minutes">00</span>
            <span class="time-label">минут</span>
        </div>
        <div class="time-unit">
            <span class="time-number" id="seconds">00</span>
            <span class="time-label">секунд</span>
        </div>
    `;
    
    // Получаем ссылки на элементы с цифрами
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Целевая дата: 26 июня 2026 года
    const targetDate = new Date(2026, 5, 26, 0, 0, 0);
    
    function updateTimer() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Обновляем только текст, без перерисовки всей структуры
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Остальные функции без изменений...
function initWishesSlider() {
    const wishes = [
        "Просим оставить ваших малышей в надежных руках на день торжества. Чтобы вы могли как следует отдохнуть и повеселиться на нашем празднике.",
        "Будем очень признательны, если Вы воздержитесь от криков «Горько». Ведь поцелуй - это знак выражения чувств, И он не может быть по заказу."
    ];
    
    let currentWishIndex = 0;
    const wishTextElement = document.getElementById('wishText');
    const wishCounterElement = document.getElementById('wishCounter');
    const prevButton = document.getElementById('prevWish');
    const nextButton = document.getElementById('nextWish');
    
    function updateWish() {
        wishTextElement.textContent = wishes[currentWishIndex];
        wishCounterElement.textContent = `${currentWishIndex + 1}/${wishes.length}`;
        
        if (prevButton) {
            prevButton.disabled = currentWishIndex === 0;
        }
        if (nextButton) {
            nextButton.disabled = currentWishIndex === wishes.length - 1;
        }
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentWishIndex > 0) {
                currentWishIndex--;
                updateWish();
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (currentWishIndex < wishes.length - 1) {
                currentWishIndex++;
                updateWish();
            }
        });
    }
    
    updateWish();
}

function initGuestModal() {
    const modal = document.getElementById('guestModal');
    const guestButton = document.getElementById('guestConfirmButton');
    const closeButton = document.getElementById('closeGuestModal');
    const cancelButton = document.getElementById('cancelGuestForm');
    const form = document.getElementById('guestForm');
    
    if (guestButton) {
        guestButton.addEventListener('click', function() {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }
    
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    if (cancelButton) {
        cancelButton.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const fullname = document.getElementById('fullname').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            if (!fullname || !phone) {
                alert('Пожалуйста, заполните обязательные поля (ФИО и телефон)');
                return;
            }
            
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
            }
            
            const alcoholPreferences = [];
            document.querySelectorAll('input[name="alcohol"]:checked').forEach(checkbox => {
                alcoholPreferences.push(checkbox.value);
            });
            
            const alcoholString = alcoholPreferences.join(',');
            
            const formData = new URLSearchParams();
            formData.append('fullname', fullname);
            formData.append('phone', phone);
            formData.append('attendance', document.querySelector('input[name="attendance"]:checked').value);
            formData.append('companion', document.querySelector('input[name="companion"]:checked').value);
            formData.append('alcohol', alcoholString);
            formData.append('wishes', document.getElementById('wishes').value.trim());
            
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbypSkB0uDLrI7aWOI4rl7kdHxP4qKYzPSxWlTRH-4ZsApUzGL7cKsnHz1NwlhUsJIwG/exec';
            
            fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData
            })
            .then(() => {
                alert('Спасибо! Ваша анкета отправлена. До встречи на свадьбе!');
                form.reset();
                closeModal();
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.');
            })
            .finally(() => {
                if (submitButton) {
                    submitButton.disabled = false;
                }
            });
        });
    }
}

function initScrollAnimations() {
    const elements = document.querySelectorAll('.photo-container, .location-section, .timing-section, .wishes-section, .contacts-section, .guest-section');
    
    function checkScroll() {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    
    checkScroll();
    window.addEventListener('scroll', checkScroll);
}
