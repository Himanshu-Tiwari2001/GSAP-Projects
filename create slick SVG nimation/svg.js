

var path =`M  10 200 Q 650 200 1200 200`
var finalpath=`M  10 200 Q 650 200 1200 200`


var string =document.querySelector("#string")


string.addEventListener("mousemove", function(dets){
    path= `M  10 200 Q ${dets.x} ${dets.y} 1200 200`

    gsap.to("svg path",{
      attr:{d:path},
      duration:0.5,
      ease:"power3.out"
//refer svg path ease on web 
    })

})

string.addEventListener("mouseleave", function(dets){

    gsap.to("svg path",{
         attr:{d:finalpath},
         duration:1.5,
         ease:"elastic.out(1,0.2)"

    })
})