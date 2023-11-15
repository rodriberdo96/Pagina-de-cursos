


$(document).ready(function(){


const existingUsers = [
    { username: "rodri1", password: "password1" },
    { username: "rodri2", password: "password2" },
    { username: "rodri3", password: "password3" }
];


var boton = $('#btn');

boton.click(function(event){

    event.preventDefault();

    const usernameInput = $("#username");
    const passwordInput = $("#password");
    const username = usernameInput.val();
    const password = passwordInput.val();

    const user = existingUsers.find(user => user.username === username && user.password === password);
    if (user) {
        console.log("Logged in as", user.username);
        window.location.href = "progress.html";
    } else {
        const error = $("#error");
        error.text("Invalid username or password");
    }
});

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
    window.location.href = "Progess.html";
});
    
    });