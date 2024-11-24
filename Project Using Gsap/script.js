function page1Animation() {
    var t1 = gsap.timeline()

    t1.from("nav h1, nav h4 ,nav button", {
        y: -40,
        duration: 0.7,
        delay: 1,
        opacity: 0,
        stagger: 0.15,

    })

    t1.from(".center-part1 h1", {
        x: -300,
        duration: 0.5,
        opacity: 0,
    })

    t1.from(".center-part1 p", {
        x: -300,
        duration: 0.5,
        opacity: 0,
    })
    t1.from(".center-part1 button", {
        x: -300,
        duration: 0.2,
        opacity: 0,
    })
    t1.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5,
        x: 200,

    }, "-=0.2")
    // here above property is used run the animation  before 

    t1.from("sectionbottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,

    })

}


function page2Animation(){
    var t12 = gsap.timeline({

        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            markers: true,
            start: "top 130%",
            end: "top 0",
            scrub: 2,
    
        }
    
    })
    t12.from(".sectionbottom img", {
        x: -300,
        opacity: 0,
        stagger: 0.4,
        duration: 0.4,
    
    
    })
    
    t12.from(".services", {
        y: 50,
        opacity: 0,
    })
    
    t12.from(".elem.white1", {
        x: -300,
        opacity: 0,
        duration: 1.5,
    }, "together1")
    
    t12.from(".elem.black1", {
        x: 300,
        opacity: 0,
        duration: 1.5,
    }, "together1")
    t12.from(".elem.black2", {
        x: -300,
        opacity: 0,
        duration: 1.5,
    }, "together2")
    t12.from(".elem.white2", {
        x: 300,
        opacity: 0,
        duration: 1.5,
    }, "together2")

}
page1Animation()
page2Animation()
