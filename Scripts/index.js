var tl = gsap.timeline({ defaults: { duration: 2, delay: 1 } })
tl.to('.blob', { y: 10, repeat: -1, yoyoEase: true, })

var tl2 = gsap.timeline({ defaults: { duration: 1 } })

tl2.from('.contentAnim', { y: -50, opacity: 0, ease: 'Power2.easeInOut' })
    .from('.rightRowAnim', { x: 50, stagger: 0.6, opacity: 0 })

