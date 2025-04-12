// Add custom JavaScript here
function runTypingEffect() {
    const text = 'I am Jarosław Krzemiński'
    const secondText = 'Backend Developer | Obsessive Learner'
    const typingElement = document.getElementById('typing-text');
    const typingElement2 = document.getElementById('roles');
    const typingDelay = 100;
    const secondDelay = 500;

    typeText(text, typingElement, typingDelay);
    setTimeout(() => {
        typeText(secondText, typingElement2, typingDelay - 50);
    }, text.length * typingDelay + typingDelay);
}

function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, delay * i)
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
