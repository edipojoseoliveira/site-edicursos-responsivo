function toggleMenu() {
    var menu = document.getElementById("menu-principal");
    
    if (menu.classList.contains("menu-escondido")) {
        menu.classList.remove("menu-escondido");
    } else {
        menu.classList.add("menu-escondido");
    }    
}