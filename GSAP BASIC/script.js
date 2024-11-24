/* GSAP stands for GreenSock Animation Platform, which is a popular JavaScript animation library used
for creating high-performance animations and interactive web content. It provides a wide range of
tools and features for animating HTML elements, SVG, canvas, and more. With GSAP, you can easily
create smooth and complex animations with precise control over timing, easing, and sequencing. */
// gsap.to("#box1", {
//     x:1200,
//     duration: 2,
//     delay: 1,
//     rotate:360,
//     yoyo:true,
//     repeat:-1,
// })


// gsap.to("#box2", {
//     x: 1100,
//     duration: 2,
//     delay: 1,
//     borderRadius: "50%",
//     rotate: 360,
//     repeat:-1,


// })


// gsap.from("#box3", {
//     x: 1200,
//     duration: 3,
//     delay: 1,
//     backgroundColor: "black",
//     repeat:2,

// })

// gsap.from("h1",{
//    opacity:0,
//    duration:1,
//    delay:2,
//    y:30,
//    stagger:-1,
// //    stagger is used to set animation on same tag one by one
// })

// /*gsap.from(,{}) from means-->
//  from final to initial position unlike (gsap.to(,{}))which 
//  is from initial to final */


// //  Gsap timeline---To make the animation syncronize---- that is one after another------------->
// var time=gsap.timeline()
// time.to("#box4", {
//     x:1200,
//     duration: 2,
//     delay: 1,
//     rotate:360,
//     yoyo:true,
//     repeat:-1,
// })


// time.to("#box5", {
//     x: 1100,
//     duration: 2,
//     delay: 1,
//     borderRadius: "50%",
//     rotate: 360,
//     repeat:-1,


// })
var t1=gsap.timeline()

t1.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,

})

t1.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3,

})

t1.from("h1",{
    y:30,
    opacity:0,
   duration:1,
   delay:0.5,
   scale:0.5,

})

