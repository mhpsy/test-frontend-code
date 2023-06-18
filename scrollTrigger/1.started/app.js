const box2I = document.querySelector(".box2I");

gsap.registerPlugin(ScrollTrigger);

// gsap.to(box2I, {
//     x: 300,
//     y: 300,
//     duration: 2,
//     scrollTrigger: ".box3I",//这里如果不用对象的形式，那么这个元素就是触发器 也就是看到这个元素就会触发动画
// })

gsap.to(box2I, {
    // x: 300,
    // y: 300,
    duration: 2,
    scrollTrigger: {
        trigger: box2I,
        // start: 400,//触发动画的位置 也就是滚动到400px的时候触发动画
        // start: "top center",//触发动画的位置 顶部到达视口的中间的时候
        start: "top 50%",//触发动画的位置 顶部到达视口的20%的时候
        // start: "top center",//触发动画的位置 顶部到达视口的20%的时候
        // end: "center 30%",//动画结束的位置 底部到达视口的30%的时候
        // end: "+=300",
        end: () => "+=" + box2I.offsetHeight,//这个是动态的获取元素的高度
        toggleClass: "active",//这个是用来切换类名的
        markers: true,//这个是用来显示触发器的位置的
        // markers: {
        //     startColor: "red",
        //     endColor: "yellow",
        //     fontSize: "12px",
        //     indent: 20,//indent是用来调整marker的位置的
        // }
    }
})


