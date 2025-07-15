export function forgotPassword() {
    const h1 = document.querySelector('h1').innerText;
    const h1Description = document.querySelector('.top p');
    const pEmail = document.querySelector('.email_input p').innerText;
    const password = document.querySelector('.password');
    const DontForgot = document.querySelector('.password > a');
    const button = document.querySelector('.button_container');
    const loginOption = document.querySelector('.login_option');

    let hideObj = [password, DontForgot, loginOption]
    hideObj.forEach(e => {
        e.style.opacity = '0';
        e.style.maxHeight = '0';
        e.style.padding = '0';
        e.style.width = '0';
        e.style.transition = '0.2s';
    })
    console.log("Switching")
}
