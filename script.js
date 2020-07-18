const hamburgerBtn = document.querySelector("#hamburgerBtn");
const sidebar = document.querySelector(".navbar");

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