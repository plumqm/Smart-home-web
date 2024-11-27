// scripts.js

function showPurchaseInfo() {
    alert('感谢您的关注！\n该产品暂时处于展示阶段，购买功能即将开放。');
}

// 特性卡片动画
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .timeline-item, .team-member, .contact-form, .contact-info, .map-container, .product-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.5s ease-out';
    observer.observe(element);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.querySelector('nav');

    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// 表单提交处理
function handleSubmit(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    alert('感谢您的留言！我们会尽快与您联系。');
    event.target.reset();
}

// 表单输入动画
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', () => {
        input.style.transform = 'scale(1)';
    });
});