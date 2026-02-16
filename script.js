// Ждем полной загрузки страницы
window.addEventListener('load', function() {
    // Запускаем таймер
    startTimer();
    // Инициализируем слайдер пожеланий
    initWishesSlider();
});

function startTimer() {
    const timerElement = document.getElementById('timer');
    
    // Целевая дата: 26 июня 2026 года (в JavaScript месяцы с 0, поэтому 5 = июнь)
    const targetDate = new Date(2026, 5, 26, 0, 0, 0);
    
    function updateTimer() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            timerElement.innerHTML = `
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">дней</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">часов</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">минут</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">секунд</span>
                </div>
            `;
            return;
        }
        
        // Расчет дней, часов, минут и секунд
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Формируем HTML с цифрами и подписями под ними
        timerElement.innerHTML = `
            <div class="time-unit">
                <span class="time-number">${days}</span>
                <span class="time-label">дней</span>
            </div>
            <div class="time-unit">
                <span class="time-number">${hours}</span>
                <span class="time-label">часов</span>
            </div>
            <div class="time-unit">
                <span class="time-number">${minutes}</span>
                <span class="time-label">минут</span>
            </div>
            <div class="time-unit">
                <span class="time-number">${seconds}</span>
                <span class="time-label">секунд</span>
            </div>
        `;
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Функция для слайдера пожеланий
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
        // Обновляем текст
        wishTextElement.textContent = wishes[currentWishIndex];
        
        // Обновляем счетчик
        wishCounterElement.textContent = `${currentWishIndex + 1}/${wishes.length}`;
        
        // Блокируем/разблокируем кнопки
        if (prevButton) {
            prevButton.disabled = currentWishIndex === 0;
        }
        if (nextButton) {
            nextButton.disabled = currentWishIndex === wishes.length - 1;
        }
    }
    
    // Обработчики для кнопок
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
    
    // Инициализация
    updateWish();
}

// Ждем полной загрузки страницы
window.addEventListener('load', function() {
    // Запускаем таймер
    startTimer();
    // Инициализируем слайдер пожеланий
    initWishesSlider();
    // Инициализируем модальное окно со списком подарков
    initGiftModal();
});

function startTimer() {
    const timerElement = document.getElementById('timer');
    
    // Целевая дата: 26 июня 2026 года (в JavaScript месяцы с 0, поэтому 5 = июнь)
    const targetDate = new Date(2026, 5, 26, 0, 0, 0);
    
    function updateTimer() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            timerElement.innerHTML = `
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">дней</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">часов</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">минут</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">секунд</span>
                </div>
            `;
            return;
        }
        
        // Расчет дней, часов, минут и секунд
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Формируем HTML с цифрами и подписями под ними
        timerElement.innerHTML = `
            <div class="time-unit">
                <span class="time-number">${days}</span>
                <span class="time-label">дней</span>
            </div>
            <div class="time-unit">
                <span class="time-number">${hours}</span>
                <span class="time-label">часов</span>
            </div>
            <div class="time-unit">
                <span class="time-number">${minutes}</span>
                <span class="time-label">минут</span>
            </div>
            <div class="time-unit">
                <span class="time-number">${seconds}</span>
                <span class="time-label">секунд</span>
            </div>
        `;
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Функция для слайдера пожеланий
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
        // Обновляем текст
        wishTextElement.textContent = wishes[currentWishIndex];
        
        // Обновляем счетчик
        wishCounterElement.textContent = `${currentWishIndex + 1}/${wishes.length}`;
        
        // Блокируем/разблокируем кнопки
        if (prevButton) {
            prevButton.disabled = currentWishIndex === 0;
        }
        if (nextButton) {
            nextButton.disabled = currentWishIndex === wishes.length - 1;
        }
    }
    
    // Обработчики для кнопок
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
    
    // Инициализация
    updateWish();
}

// Функция для модального окна со списком подарков
function initGiftModal() {
    const modal = document.getElementById('giftModal');
    const giftButton = document.getElementById('giftButton');
    const closeButton = document.getElementById('closeModal');
    
    // Открыть модальное окно при клике на кнопку
    if (giftButton) {
        giftButton.addEventListener('click', function() {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
        });
    }
    
    // Закрыть модальное окно при клике на крестик
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Возвращаем прокрутку
        });
    }
    
    // Закрыть модальное окно при клике вне его
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    // Закрыть по нажатию ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// Инициализация модального окна с анкетой
function initGuestModal() {
    const modal = document.getElementById('guestModal');
    const guestButton = document.getElementById('guestConfirmButton');
    const closeButton = document.getElementById('closeGuestModal');
    const cancelButton = document.getElementById('cancelGuestForm');
    const form = document.getElementById('guestForm');
    
    // Открыть модальное окно при клике на кнопку "ПОДТВЕРДИТЬ"
    if (guestButton) {
        guestButton.addEventListener('click', function() {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
        });
    }
    
    // Функция закрытия модального окна
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Возвращаем прокрутку
    }
    
    // Закрыть при клике на крестик
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    // Закрыть при клике на кнопку "ОТМЕНА"
    if (cancelButton) {
        cancelButton.addEventListener('click', closeModal);
    }
    
    // Закрыть при клике вне окна
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Закрыть по нажатию ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Обработка отправки формы
   // В функции initGuestModal найдите обработчик form.addEventListener('submit')
// и замените сбор данных на:

    // Обработка отправки формы
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем перезагрузку страницы
            
            // Собираем данные из чекбоксов (алкоголь)
            const alcoholPreferences = [];
            document.querySelectorAll('input[name="alcohol"]:checked').forEach(checkbox => {
                alcoholPreferences.push(checkbox.value);
            });
            
            // Собираем данные формы
            const formData = {
                fullname: document.getElementById('fullname').value,
                phone: document.getElementById('phone').value,
                attendance: document.querySelector('input[name="attendance"]:checked').value,
                companion: document.querySelector('input[name="companion"]:checked').value,
                alcohol: alcoholPreferences,
                wishes: document.getElementById('wishes').value
            };
            
            // Проверка обязательных полей
            if (!formData.fullname || !formData.phone) {
                alert('Пожалуйста, заполните обязательные поля (ФИО и телефон)');
                return;
            }
            
            // Здесь можно отправить данные на сервер
            console.log('Данные формы:', formData);
            
            // Показываем сообщение об успехе
            alert('Спасибо! Ваша анкета отправлена.');
            
            // Очищаем форму
            form.reset();
            
            // Закрываем модальное окно
            closeModal();
        });
    }
}

// Обновите window.addEventListener('load', ...)
window.addEventListener('load', function() {
    startTimer();
    initWishesSlider();
    initGiftModal();
    initGuestModal(); // Замените initGuestButton на initGuestModal
});