const menuBtns = document.querySelectorAll('.menu-btn');
const drinkItems = document.querySelectorAll('.drink-item');

let activeBtn = "featured";

showDrinkMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showDrinkMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showDrinkMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    drinkItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}