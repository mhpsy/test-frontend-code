gsap.registerPlugin(ScrollTrigger)

const t1 = gsap.timeline();

t1.to('.box', {
    x: 500,
    duration: 1,
}).to('.box', {
    y: 500,
    duration: 1,
}).addLabel('label1')
    .to('.box', {
        x: 100,
        rotate: 360,
        duration: 1,
    })


t1.play()

setTimeout(() => {
    t1.play("label1");
    console.log('play label1')
}, 5000);


