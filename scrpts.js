
"use strict";

// ========================================
// 1. MENÚ DE NAVEGACIÓN PARA MÓVILES
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function cerrarMenu() {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
}

menuToggle.addEventListener("click", function () {
    const menuAbierto = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(menuAbierto));
    menuToggle.setAttribute(
        "aria-label",
        menuAbierto ? "Cerrar menú" : "Abrir menú"
    );
});

// Cerrar el menú después de pulsar un enlace.

navLinks.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", cerrarMenu);
});

// Cerrar el menú si se vuelve a una pantalla grande.

window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
        cerrarMenu();
    }
});

// ========================================
// 2. AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
// ========================================

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
