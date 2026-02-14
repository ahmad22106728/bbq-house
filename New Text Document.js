

const buttons = document.querySelectorAll(".filter-btn");
const sections = document.querySelectorAll(".menu-section");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        sections.forEach(section => {
            if (filter === "all") {
                section.style.display = "block";
            } else {
                if (section.getAttribute("data-category") === filter) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            }
        });
    });
});



const slider = document.querySelector('.fade-slider');
let slides = Array.from(slider.querySelectorAll('.slide'));
let current = 0;
let intervalId;

// 🔀 دالة الخلط (Fisher–Yates)
function shuffleSlides() {
    for (let i = slides.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [slides[i], slides[j]] = [slides[j], slides[i]];
    }

    // إعادة ترتيب داخل الصفحة
    slides.forEach(slide => slider.appendChild(slide));
}

// ▶️ تشغيل السلايدر
function startSlider() {
    slides.forEach(s => s.classList.remove('active'));
    current = 0;
    slides[0].classList.add('active');

    intervalId = setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000); // تغيير الصورة كل 4 ثواني
}

// ⏹️ إيقاف السلايدر
function stopSlider() {
    clearInterval(intervalId);
}

// تشغيل أول مرة
shuffleSlides();
startSlider();

// 🔁 إعادة الخلط كل 5 دقائق
setInterval(() => {
    stopSlider();
    shuffleSlides();
    startSlider();
}, 300000); // 5 دقائق


let currentLang = 'ar';

document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';

    document.querySelectorAll('[data-ar]').forEach(el => {
        el.textContent = el.dataset[currentLang];
    });

    document.getElementById('langToggle').textContent =
        currentLang === 'ar' ? 'EN' : 'AR';

    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

