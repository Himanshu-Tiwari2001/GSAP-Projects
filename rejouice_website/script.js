function locomotivescroll() {
    gsap.registerPlugin(ScrollTrigger);


    // --- SETUP START ---
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: "#main" });
    // --- SETUP END ---







    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

//  locomotivescroll()





function cursorEffect() {
    var page1Content = document.querySelector("#page1-content")

    var cursor = document.querySelector("#cursor")

    // page1Content.addEventListener("mousemove",function(dets){
    //   cursor.style.left=dets.x+"px"
    //   cursor.style.top=dets.y+"px"
    //  ** this is using javascript concept**
    // })

    page1Content.addEventListener("mousemove", function (dets) {

        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
        })
    })

    page1Content.addEventListener("mouseenter", function () {

        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        })
    })

    page1Content.addEventListener("mouseleave", function () {

        gsap.to(cursor, {
            scale: 0,
            opacity: 0

        })
    })
}


function page2Animation() {
    gsap.from(".elem h1", {
        y: 150,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            opacity: 0,
            start: "top 25%",
            end: "top 23%",
            // markers: true,
            scrub: 2
        }

    })
    gsap.from("#page2-top", {
        y: 60,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            opacity: 0,
            start: "top 25%",
            end: "top 23%",
            // markers: true,
            scrub: 2,
        }

    })
}
cursorEffect()
page2Animation()

function sliderAmimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView:1,
        spaceBetween: 30,
        loop: true,

        autoplay: {
            // delay: 2500,
            delay:0,
            disableOnInteraction:false,
        },
        speed:10000,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
sliderAmimation()

var tl = gsap.timeline()

function loaderpageInOutAnimation(){
    tl.from("#loaderpage #loaderimage img", {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 1,
    
    }, "start")
    
    tl.from("#loaderpage h2", {
        y: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "elastic.out(1,0.3)",
    }, "start")
    
    
    
    tl.to("#loaderpage h2", {
        opacity: 0,
        x: 200,
        duration: 2,
        stagger: -0.2,
    
    
    }, "vanish")
    tl.to("#loaderpage #loaderimage img", {
        x: -200,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
    }, "vanish")
    
    tl.to("#loaderpage", {
        opacity: 0,
    })
    
    //  this is used to make the main page work because after opacity:0 still the loader page is there 
    tl.to("#loaderpage", {
        display: "none"
    })

    tl.from("#page1-content h1 span",{
        y:100,
        opacity:0,
        stagger:0.2,
    })
    
}
loaderpageInOutAnimation()

var menu=document.querySelector("nav h4")
var close=document.querySelector("#navbarAnimation h3")
var texthover=document.querySelectorAll(" #navbarAnimation h2")
var videoover=document.querySelector("#navbarAnimation video")
var closeover=document.querySelector("#navbarAnimation h3")
var playreel=document.querySelector("nav h2")
var closereel=document.querySelector("#close")



timeline =gsap.timeline()

timeline.pause()

timeline.to("#navbarAnimation",{
    top:0,
    opacity:1,
    
    duration:1

})

timeline.from("#navbarAnimation h2",{
    y:-40,
    opacity:0,
    
    stagger:0.1,
    duration:0.6,
    scrub:1,
    ease: "elastic.inOut(1,0.3)",
})
timeline.from("#navbarAnimation video",{
    x:400,
    opacity:0,
    
    stagger:0.1,
    duration:1,
    delay:-1,
    scrub:1,
    ease: "power4.out",
})

menu.addEventListener("click", function(){
       timeline.play()
});
close.addEventListener("click",function(){
    timeline.reverse()
});

timelineplayreel=gsap.timeline()
timelineplayreel.pause()

timelineplayreel.to("#playreelAnimationbox",{
    left:0,
    opacity:1,
    duration:1,

})

playreel.addEventListener("click",function(){
    timelineplayreel.play()
    
});
closereel.addEventListener("click",function(){
    timelineplayreel.reverse()
})


texthover.forEach(texthover=>{
    texthover.addEventListener("mouseenter",function(){
       gsap.to(texthover,{
        scale:1.2,
        duration:0.2,
        ease: "power2.out",
        rotation: 2, 
        backgroundColor: "#e74c3c",
        color:"#fff",
        
      });
    });
});
texthover.forEach(texthover=>{
    texthover.addEventListener("mouseleave",function(){
       gsap.to(texthover,{
        scale:1,
        duration:0.2,
        rotation:0,
        backgroundColor: "#fff",
        color:"#a52a2a"

        
        });
    });
});

videoover.addEventListener("mouseenter",function(){

    gsap.to(videoover,{
        scale:1.5,
        duration:0.2,
        
        ease: "power2.out",
        rotation:360, 
        
        backgroundColor: "#e74c3c",
        
        
      });

})

videoover.addEventListener("mouseleave",function(){

    gsap.to(videoover,{
        scale:1,
        duration:0.2,
        rotation:0,
        backgroundColor: "#fff",
        rotation:0,
        paddingLeft:"0vw",
    

        
        });

})

closeover.addEventListener("mouseenter",function(){

    gsap.to(closeover,{
        scale:1.2,
        duration:0.2,
        ease: "power2.out",
        rotation: 2, 
        backgroundColor: "#e74c3c",
        color:"#fff",
        
        
      });

})

closeover.addEventListener("mouseleave",function(){

    gsap.to(closeover,{
        scale:1,
        duration:0.2,
        rotation:0,
        backgroundColor: "#fff",
        color:"#a52a2a"
    

        
        });

})


    


    

   
    
  
    








