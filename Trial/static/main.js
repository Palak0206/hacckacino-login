document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('loginModal');
    const loginBtns = document.querySelectorAll('.login-btn, .cta-button');
    const closeModal = document.querySelector('.close-modal');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    if (modal && loginBtns.length && closeModal) {
        // Show modal only when login button is clicked
        loginBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        });

        // Hide modal when close button is clicked
        closeModal.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });

        // Hide modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });

        // Tab switching functionality
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetForm = tab.dataset.tab;
                authTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                authForms.forEach(form => {
                    form.classList.toggle('hidden', form.id !== `${targetForm}Form`);
                });
            });
        });
    }

    // Form submission handlers
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add login logic here
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add registration logic here
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }

    // Other existing functionality can be added below
});
