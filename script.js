// AUTOMATIC FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// MOBILE NAVIGATION MENU
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close menu after selecting a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

// Set the automatic message for all WhatsApp buttons
document.addEventListener("DOMContentLoaded", function () {
    const whatsappMessage =
        "Hello Sir Nesters Electrical! I found your website and I'm interested in your electrical services. I would like to make an enquiry. Please assist me. Thank you.";

    document.querySelectorAll(
        'a[href*="wa.me"], a[href*="whatsapp.com"]'
    ).forEach(function (link) {
        const whatsappURL = new URL(link.href);
        whatsappURL.searchParams.set("text", whatsappMessage);
        link.href = whatsappURL.toString();
    });
});
