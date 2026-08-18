const openNav = document.querySelector('#menu-icon');

const mainNav = document.querySelector('.main-nav');

openNav.addEventListener('click' , function (){
    mainNav.classList.toggle('active');
});

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit' , function(event){
    event.preventDefault();

    let isValid = true;

    const nameValue = document.querySelector('#name').value;
    if (nameValue === "") {
    document.querySelector('#name-error').textContent = "Please enter your name";
    isValid = false;
    } else {
    document.querySelector('#name-error').textContent = "";
    }

    const emailValue = document.querySelector('#email').value;
    if (emailValue === "") {
    document.querySelector('#email-error').textContent = "Please enter your email";
    isValid = false;
    } else {
    document.querySelector('#email-error').textContent = "";
    }

    const messageValue = document.querySelector('#message').value;
    if (messageValue === "") {
    document.querySelector('#message-error').textContent = "Please enter your message";
    isValid = false;
    } else {
    document.querySelector('#message-error').textContent = "";
    }
    if (isValid) {
    console.log(nameValue, emailValue, messageValue);
    contactForm.reset();
    }
});

const seeMoreBtn = document.querySelector('#see-more-btn');

const seeMoreSection = document.querySelector('.see-more-project');

seeMoreBtn.addEventListener('click', function(){
    seeMoreSection.classList.toggle('show');

    if (seeMoreSection.classList.contains('show')) {
        seeMoreBtn.textContent = 'See Less';
    } else {
        seeMoreBtn.textContent = 'See More';
    }
});

// تحديد كل العناصر المطلوب تحريكها عند السكرول
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // إضافة كلاس active لما العنصر يدخل الشاشة
            entry.target.classList.add('active');
            
            // إيقاف مراقبة العنصر بعد ظهوره خلاص
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // يشتغل أول ما 15% من العنصر يظهر في الشاشة
});

// تطبيق المراقبة على كل العناصر
revealElements.forEach(el => revealObserver.observe(el));


