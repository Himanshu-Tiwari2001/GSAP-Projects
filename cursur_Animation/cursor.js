
var main = document.querySelector("#main")
var cursor= document.querySelector("#cursor")
var imagediv=document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
 
    gsap.to(cursor,{
     x:dets.x,
     y:dets.y,
     duration:1,
     ease:"back.out",
 })
})
imagediv.addEventListener("mouseenter",function(){
     cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#f0ffff9e",
     }) 
    
})
imagediv.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
       scale:1,
       backgroundColor:"#fff",
    }) 
   
})