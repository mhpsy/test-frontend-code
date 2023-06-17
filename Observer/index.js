const element = document.querySelector('.box');
console.log(element)

// const observer = new IntersectionObserver((entries) => {
//     console.log(entries)
//     if (entries[0].isIntersecting) {
//         console.log('Element is visible in screen')
//     } else {
//         console.log('Element is not visible in screen')
//     }
// }, {
//     threshold: 0.5,// 0.5 = 50%
// })

const obMutation = new MutationObserver((mutationsList, observer) => {
    console.log(mutationsList);

    for (let mutation of mutationsList) {
        console.log(mutation.type);
        console.log(mutation.target)
    }

})

obMutation.observe(element, {
    childList: true,// 监听子元素
    attributes: true,// 监听属性
    subtree: true,// 监听子元素的子元素
    characterData: true,// 监听文本内容
})

setInterval(() => {
    const ul = element.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = ul.querySelectorAll('li').length + 1;
    ul.appendChild(li);
}, 1000)