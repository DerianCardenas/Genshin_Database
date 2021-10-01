
const header = ()=>{
    const  menuBtn = document.querySelector('.btn_menu'),
    menu = document.querySelector('.menu_items');

    menuBtn.addEventListener('click',()=>{
        if(menu.classList.contains("active"))
            menu.classList.remove("active");
        else
            menu.classList.add("active");
    });
}

document.addEventListener('DOMContentLoaded',header);