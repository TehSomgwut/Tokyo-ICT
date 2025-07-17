const category_container = document.querySelector('.category_container')
const recommend_menu_container = document.querySelector('.recommend_menus_container');
const category = document.querySelectorAll('.category_container > div');
const side_bar = document.querySelector('side');
const menu_icon = document.getElementsByClassName('menu_icon')[0];
const close_sidebar = document.getElementsByClassName('close_sidebar')[0];

[category_container, recommend_menu_container].forEach(container => {
    container.firstElementChild.style.marginLeft = '20px';
})

category.forEach(c => {
    c.addEventListener('click', () => {
        category.forEach(cc => {
            cc.classList.remove('category_selected')
        })
        if(c.classList.contains('category_selected')) {
            c.classList.remove('category_selected');
            console.log('have')
        }
        else {
            c.classList.add('category_selected')
        }
    })
})


menu_icon.addEventListener('click', ()=> {
    side_bar.style.left = '0';
    close_sidebar.style.right = '0';
    close_sidebar.style.backdropFilter = 'blur(5px)';
    close_sidebar.addEventListener('click', () => {
        side_bar.style.left = '-100%';
        close_sidebar.style.right = '-40%';
        close_sidebar.style.backdropFilter = 'blur(0px)';
    })
}) 