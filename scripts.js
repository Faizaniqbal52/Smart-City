// Animation using GreenSock
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        }
    });
});
