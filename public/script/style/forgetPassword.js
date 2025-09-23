let page = 'Log in'
const inside_wrapper = document.getElementsByClassName('inside_wrapper')[0];
const input = document.querySelectorAll('form input');
const submit = document.querySelector('button')
let offsetTop = inside_wrapper.getBoundingClientRect().top;
inside_wrapper.style.minHeight = `calc(100vh - ${offsetTop}px)`;

function imgLoaded() {
    const imgs = document.querySelectorAll('img');
    const promises = [];

    imgs.forEach(img => {
        if(!img.complete) {
            promises.push(new Promise(resolve => {
                img.addEventListener('load', resolve);

                img.addEventListener('error', resolve)
            }))
        }
    })
    return(Promise.all(promises))
}
document.addEventListener('DOMContentLoaded', () => {
    Promise.all([imgLoaded(), new Promise(resolve => 
        setTimeout(resolve, 1000)
    )]).then(() => {
        
    })
})

const check = function() {
    if (input[0].value === '' || input[0].value === null) {
        submit.style.backgroundColor = "var(--form-background)"
        submit.style.color = "var(--sub-text)"
        submit.style.height = "60px"
        return(false)
    }
    else{

        submit.style.cssText = '';
        console.log('notEm')
        submit.style.height = "80px"
        return(true)
    }
}

check()
document.querySelector('form').addEventListener('submit',function(e) {
    if(!check()) {
        e.preventDefault();
        console.log('defult')
    }
    else{
        console.log('pass')
    }
})

input.forEach(f => {
    f.addEventListener('focus', () => {
        input.forEach(f => f.style.cssText = '')
        f.style.cssText = '';
        eye.style.cssText = '';
        eye.firstElementChild.style.opacity = '1';
    })
    f.addEventListener('blur', () => {
        eye.firstElementChild.style.opacity = '0';
        check()
    })
    f.addEventListener('keydown', () => {
        check()
    })
})