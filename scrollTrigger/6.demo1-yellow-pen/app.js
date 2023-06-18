gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray("span").forEach((span, i) => {
    ScrollTrigger.create({
        trigger: span,
        start: "top center",
        // toggleClass: "active",
        onEnter: () => span.classList.add("active"),
        markers: true,
        toggleActions: "play none none reverse",
    })

})