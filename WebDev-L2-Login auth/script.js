let isLoginMode = true;

function toggleMode() {
    isLoginMode = !isLoginMode;
    document.getElementById('form-title').innerText = isLoginMode ? 'Login Dashboard' : 'Register Core Account';
    document.getElementById('submit-btn').innerText = isLoginMode ? 'Sign In' : 'Register Securely';
    document.getElementById('toggle-msg').innerHTML = isLoginMode ? 
        `New User? <span onclick="toggleMode()">Create account</span>` : 
        `Existing operator? <span onclick="toggleMode()">Sign In</span>`;
    document.getElementById('error-feedback').innerText = '';
}

function handleAuth(e) {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;
    const feedback = document.getElementById('error-feedback');

    if (isLoginMode) {
        const storedPass = localStorage.getItem(`user_${user}`);
        if (storedPass && storedPass === pass) {
            document.getElementById('auth-box').classList.add('hidden');
            document.getElementById('secured-page').classList.remove('hidden');
        } else {
            feedback.innerText = "Access Denied. Verification keys failed.";
        }
    } else {
        if(localStorage.getItem(`user_${user}`)) {
            feedback.innerText = "Identity footprint already exists.";
        } else {
            localStorage.setItem(`user_${user}`, pass);
            feedback.style.color = "#4ef24e";
            feedback.innerText = "Registration verified! Redirecting to Sign In...";
            setTimeout(() => { toggleMode(); feedback.style.color = "#f87171"; }, 1500);
        }
    }
}

function logout() {
    document.getElementById('secured-page').classList.add('hidden');
    document.getElementById('auth-box').classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}