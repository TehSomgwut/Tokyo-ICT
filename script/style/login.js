const inside_wrapper = document.getElementsByClassName('inside_wrapper')[0];
const eye = document.querySelectorAll('label')[0];
const password_input = document.querySelectorAll('#password_input')[0]

let offsetTop = inside_wrapper.getBoundingClientRect().top;
inside_wrapper.style.minHeight = `calc(100vh - ${offsetTop}px)`
// password_input.addEventListener('focus', () => {
//     eye.style.height = '40px'
// })