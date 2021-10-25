const hamburgerBtn = document.querySelector("#hamburgerBtn");
const sidebar = document.querySelector(".navbar");
const sidebarLinks = sidebar.querySelectorAll('a');

hamburgerBtn.addEventListener('click', ()=> {
    let active = false;
    sidebar.classList.forEach(value => {
        if (value == 'activeMenu') {
            active = true;
        }
    });
    (active == true) ? sidebar.classList.remove("activeMenu") : sidebar.classList.add("activeMenu");
    active != active;
})

sidebarLinks.forEach(link => {
    link.addEventListener('click' , () => {
        sidebar.classList.remove("activeMenu")
    })
})