let page = 'Log in'
const inside_wrapper = document.getElementsByClassName('inside_wrapper')[0];
const input = document.querySelectorAll('form input');
const submit = document.querySelector('button')
const eyes = document.querySelectorAll('label')
const password_input = document.getElementById('password_input')
const forgotPasswordP = document.querySelector('.password > a');

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
    if (input[0].value === '' || input[0].value === null || password_input.value == '' || password_input.value == null || input[2] === '' || input[2] === null) {
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
    eyes.forEach(eye => {
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
})

const showPassword = function() {
    [password_input, input[2]].forEach(passW => {
        passW.type = (password_input.type === 'password') ?'text' : 'password';
    })
    const opened_eye = `                            <!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>`
    const closed_eye = `                            <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`
    eyes.forEach(eye => {
        eye.innerHTML = (eye.innerHTML === opened_eye) ? closed_eye : opened_eye ;
    })
}

eyes.forEach(eye => {
    eye.addEventListener('click', showPassword)
})