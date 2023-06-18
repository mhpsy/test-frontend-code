const box2I = document.querySelector(".box2I");

gsap.registerPlugin(ScrollTrigger);

gsap.to(box2I, {
    x: 300,
    // y: 300,
    duration: 2,
    scrollTrigger: {
        trigger: box2I,
        // scrub: true,//这个是用来控制动画的播放速度的
        scrub: 4,//这个是用来控制动画的播放速度的
        start: "top 80%",//触发动画的位置 顶部到达视口的20%的时候
        // end: () => "+=" + box2I.offsetHeight,//这个是动态的获取元素的高度
        end: "bottom 40%",//触发动画的位置 底部到达视口的20%的时候
        toggleActions: "play reverse play reverse",//这个是触发动画的时候的动作
        // onEnter: () => console.log("enter"),//这个是进入的时候触发的
        // onLeave: () => console.log("leave"),//这个是离开的时候触发的
        // onEnterBack: () => console.log("enterBack"),//这个是进入的时候触发的
        // onLeaveBack: () => console.log("leaveBack"),//这个是离开的时候触发的
        /**
         * toggleActions的顺序也是
         * onEnter onLeave onEnterBack onLeaveBack
         * 可选项有 play pause resume reset restart complete reverse none
         * resume是从暂停的地方开始播放
         * reset是从头开始播放
         * restart是从头开始播放
         * complete是播放完毕
         * reverse是反向播放
         * none是没有动作
         */
        markers: true,//这个是用来显示触发器的位置的
    }
})


