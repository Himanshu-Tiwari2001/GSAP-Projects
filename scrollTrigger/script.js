
gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -500%",
        scrub:1,
        pin:true,
    }
})
//to use pin property we must trigger the parent 