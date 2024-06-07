/*menu*/
let menu_icon = document.getElementById("menu-icon");
let menu_section = document.getElementById("menu-section");
let cover_div = document.getElementById("cover");
let X_icon = document.getElementById("X_icon");


menu_icon.onclick = () => {
	menu_section.classList.remove("hide");
	cover_div.classList.remove("hide");
	cover_div.classList.remove("cover");
	menu_icon.style.opacity = "0";
};
X_icon.onclick = () => {
	menu_section.classList.add("hide");
	cover_div.classList.add("hide");
	cover_div.classList.add("cover");
	menu_icon.style.opacity = "1";
};
/*menu finishes*/
document.querySelectorAll('[data-link]').forEach(link => {
    link.onclick = (event) => {
        event.preventDefault();
        const page = link.getAttribute('data-link');
        switch(page) {
            case 'home':
                window.location.href = "/restaurant/restaurant.html";
                
                break;
            case 'about':
                window.location.href = "/restaurant/about.html";
                break;
            case 'menu':
                window.location.href = "/restaurant/menu.html";
                break;
            case 'events':
                window.location.href = "/restaurant/events.html";
                break;
            case 'contact':
                window.location.href = "/restaurant/contact.html";
                break;
            case 'reservation':
                window.location.href = "/restaurant/reservation.html";
                break;
            default:
                console.error('Unknown page:', page);
        }
    };
});
