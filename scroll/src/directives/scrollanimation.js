const obIntersection = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {//判断是否进入可视区域
            entry.target.classList.add('enter');
            entry.target.classList.remove('before-enter');
            observer.unobserve(entry.target);//取消观察
        } else {
            //离开可视区域
            entry.target.classList.remove('enter');
            entry.target.classList.add('before-enter');
        }
    })
},{
    // rootMargin: '0px 0px -100px 0px',//上右下左 可以百分比
});

export default {
    beforeMount(el, binding) {
        el.classList.add('scroll-animation');
        el.classList.add('before-enter');
        obIntersection.observe(el);
    }
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