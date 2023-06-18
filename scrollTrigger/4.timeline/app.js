gsap.registerPlugin(ScrollTrigger)

const t1 = gsap.timeline({
    /**
     * 需要在 gsap.timeline() 裡面設定scrollTrigger
     */
    scrollTrigger: {
        trigger: '.box',//觸發點
        markers: true,
        scrub: 0.5,
        start: 'top 80%',
        end: "center 30%",
    }
})

t1.to('.box', {
    x: 500,
    duration: 1,
}).to('.box', {
    y: 500,
    duration: 1,
}).to('.box', {
    x: 0,
    duration: 1,
})