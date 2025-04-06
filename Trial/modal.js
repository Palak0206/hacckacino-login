// Menu toggle (for responsive view if implemented)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal functionality
const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close-modal');

loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Tab switch for Login/Register
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        authForms.forEach(form => form.classList.add('hidden'));
        const targetForm = document.getElementById(`${tab.dataset.tab}Form`);
        targetForm.classList.remove('hidden');
    });
});

// Optional: Handle form submissions
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle login logic
    alert('Login submitted');
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle registration logic
    alert('Registration submitted');
});
