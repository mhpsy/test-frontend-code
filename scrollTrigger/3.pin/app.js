const square = document.querySelector(".square");
const square2 = document.querySelector(".square2");

gsap.registerPlugin(ScrollTrigger);

// gsap.to(square, {
//     x: 500,
//     rotate: 360,
//     duration: 8,
//     scrollTrigger: {
//         trigger: square,
//         pin: true,//这个是用来固定元素的
//         scrub: 1,//这个是用来控制动画的播放速度的
//         // start: "top center",//触发动画的位置 顶部到达视口的20%的时候
//         start: "bottom bottom",
//         end: "top 50%",//触发动画的位置 底部到达视口的20%的时候
//         markers: true,//这个是用来显示触发器的位置的
//     }
// })

gsap.to(square, {
    x: 500,
    rotate: 360,
    duration: 8,
    scrollTrigger: {
        trigger: square2,//监听2 但是固定1
        pin: square,//这个是用来固定元素的
        pinSpacing: false,//这个控制会不会在固定的时候给元素添加margin 也就是占据额外的空间
        scrub: 1,//这个是用来控制动画的播放速度的
        // start: "top center",//触发动画的位置 顶部到达视口的20%的时候
        start: "bottom bottom",
        end: "top 50%",//触发动画的位置 底部到达视口的20%的时候
        markers: true,//这个是用来显示触发器的位置的
    }
})



