const footer = document.querySelector('footer')
const footer_detail = document.querySelectorAll('footer *:not(button')
const form = footer.lastElementChild;
const submit = footer.lastElementChild.lastElementChild;
const costumer_name = document.querySelector('form input');

const push_footer = function() {
    if(costumer_name.value !== "" && costumer_name !== null) {
        footer.style.cssText = ''
        footer.style.bottom = '0px';
        submit.style.backgroundColor = 'var(--main-color)'
        console.log('true')
    }
    else {
        footer.style.bottom = '-150px';
        submit.style.backgroundColor = 'var(--sub-text)'
        console.log(false)
    }
}

costumer_name.addEventListener('keydown', push_footer)
costumer_name.addEventListener('blur', push_footer)
form.addEventListener('submit', (e) => {
    if(costumer_name.value !== "" && costumer_name !== null) {
        console.log(push_footer)
    }
    else {
        e.preventDefault();
    }
})

window.addEventListener('load', push_footer)