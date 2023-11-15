// Definir los usuarios
const existingUsers = [
    { username: "rodri1", password: "password1" },
    { username: "rodri2", password: "password2" },
    { username: "rodri3", password: "password3" }
];

// conseguir el form de login
const form = $("form");
form.submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password input values
    const usernameInput = $("#username");
    const passwordInput = $("#password");
    const username = usernameInput.val();
    const password = passwordInput.val();

    // chequear si el usuario existe
    const user = existingUsers.find(user => user.username === username && user.password === password);
    if (user) {
        // si el usuario existe, guardar el usuario en el local storage
        console.log("Logged in as", user.username);
        // redirigir a la pagina de progreso
        window.location.href = "progress.html";
    } else {
        // si el usuario no existe, mostrar un error
        const error = $("#error");
        error.text("Invalid username or password");
    }
});

// agregar un nuevo usuario
const registerForm = $("#register-form");
registerForm.submit(function(event) {
    event.preventDefault(); 

    // obtener los valores de los inputs
    const usernameInput = $("#register-username");
    const passwordInput = $("#register-password");
    const confirmPasswordInput = $("#confirm-password");
    const username = usernameInput.val();
    const password = passwordInput.val();
    const confirmPassword = confirmPasswordInput.val();

    // chequear si el usuario ya existe
    if (password !== confirmPassword) {
        const error = $("#register-error");
        error.text("Passwords do not match");
        return;
    }

    //agregar el usuario a la lista de usuarios
    existingUsers.push({ username, password });

    // redirigir a la pagina de login
    window.location.href = "login.html";
});




