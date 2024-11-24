
var menu= document.querySelector("#nav i")

var cross= document.querySelector(" #full i")


var timeline=gsap.timeline()

timeline.to("#full",{
    right:0,
    duration:0.2,
})

timeline.from("#full h2",{
     x:150,
     opacity:0,
     duration:0.2,
     stagger:0.2,
     
})
timeline.from("#full i",{
    opacity:0
})

timeline.pause()

menu.addEventListener("click",function(){
    timeline.play()
})
cross.addEventListener("click",function(){
  timeline.reverse()
})