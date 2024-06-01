// webnav animation

let webnav = gsap.timeline()
webnav.from(".webnav h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
})
webnav.from(".webnav ul a", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})
gsap.from(".webnav .menu", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
})
// responsive nav  animation
document.getElementById("humburger").addEventListener("click", () => {
    gsap.from(".respnav h2", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
    })

    gsap.from(".respnav .cross", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
    })

    gsap.from(".respnav ul a", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })
});

// hero-section animation

gsap.from(".hero-detail h2", {
    x: -1000,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.2
})
gsap.from(" .hero-btn", {
    x: -1000,
    opacity: 0,
    duration: 1,
    delay: 0.8
})
gsap.from(".hero-img-div img", {
    x: 1000,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

// icons animation


gsap.from("#icons .social", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})


// about section animation 

// gsap.from(".about-detail", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: ".about-detail",
//         scroller: "body",
//         start: "top 150%",
//         end: "top 30%",
//         scrub: 2
//     }
// })
// gsap.from(".about-img-div img", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: ".about-img-div img",
//         scroller: "body",
//         start: "top 150%",
//         end: "top 30%",
//         scrub: 2,
//     }
// })


// services section animation 

// gsap.from(".services-outer .row .col", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 0.3,
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: ".services-outer .row .col",
//         scroller: "body",
//         start: "top 150%",
//         end: "top 30%",
//         scrub: 2,
//     }
// })



// skills section animation 

// gsap.from(".skill-outer .skills", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     scrollTrigger: {
//         trigger: ".skill-outer .skills progress",
//         scroller: "body",
//         start: "top 150%",
//         end: "top 30%",
//         scrub: 2,
//     }
// })


// project section animation


// gsap.from("#grid .griditems", {
//     scale:0,
//     opacity: 0,
//     duration: 5,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: "#grid .griditems",
//         scroller: "body",
//         start: "top 180%",
//         markers:true,
//         // end: "top -5%",
//         scrub: 2
//     }
// })












// cursor mover

let body = document.getElementById("body");
let cursor = document.getElementById("cursor");


body.addEventListener("mousemove", function (cur) {
    gsap.to(cursor, {
        x: cur.x,
        y: cur.y
    })
})






