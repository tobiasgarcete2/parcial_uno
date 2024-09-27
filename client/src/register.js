import "./style.css";


const $form = document.getElementById("register-form");

$form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData($form);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    // validar campos vacíos
    if (!username || !email || !password || !confirmPassword) {
        alert("Todos los campos son obligatorios");
        return;
    }
    // validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("El email es inválido");
        return;
    }
    // validar contraseñas
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }
    // validar longitud de contraseña
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }
    // registrar usuario
    try {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });
        if (!response.ok) {
            throw new Error("Error al registrar el usuario");
        }
        alert("Usuario registrado correctamente");
        window.location.href = "/";
    } catch (error) {
        console.error(error);
        alert("Error al registrar el usuario");
    }
    // resetear formulario
    $form.reset();
});
