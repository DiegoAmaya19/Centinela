// Seleccionamos los elementos
const openButtons = document.querySelectorAll("[id^='btn-abrir']");
const closeButtons = document.querySelectorAll(".cerrar-modal");

// Función para abrir el modal correspondiente al botón
openButtons.forEach((button) => {

    button.addEventListener("click", () => {
        const modalId = button.id === "btn-abrir"
            ? "modal-info"
            : button.id.replace("btn-abrir", "modal-info");
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    });

});

// Función para cerrar el modal al dar clic en la (X)
closeButtons.forEach((span) => {
    span.addEventListener("click", () => {
        const modal = span.closest(".modal");
        if (modal) {
            modal.style.display = "none";
        }
    });
});

// Cerrar el modal si el usuario hace clic fuera de la caja blanca
window.addEventListener("click", (event) => {
    document.querySelectorAll(".modal").forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});