// Usuario predefinido
const predefinedUser = {
    username: 'user',
    password: '1234' 
};

// Obtener el formulario de inicio de sesión
const loginForm = document.getElementById('login-form');

// Manejar el envío del formulario de inicio de sesión
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar las credenciales
    if (username === predefinedUser.username && password === predefinedUser.password) {
        // Redirigir al panel de usuario
        window.location.href = 'views/user/panel.html';
    } else {
        // Mostrar mensaje de error
        document.getElementById('error-message').style.display = 'block';
    }
});
