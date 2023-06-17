export default {
    bind(el) {
        el.classList.add('before-enter');

    },
}

// el.addEventListener('scroll', function () {
//     let top = el.getBoundingClientRect().top;
//     let windowHeight = window.innerHeight;
//     if (top < windowHeight) {
//         el.classList.add('enter');
//         el.classList.remove('before-enter');
//     } else {
//         el.classList.remove('enter');
//         el.classList.add('before-enter');
//     }
// })