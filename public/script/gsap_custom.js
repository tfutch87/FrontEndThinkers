gsap.registerPlugin(TextPlugin);

let tl = gsap.timeline({});

tl.to('.hero-title', {duration: 1, text: "FrontEnd Done Right", ease: "none"});

tl.to('.hero-text', {opacity: 1, y: 0});

tl.to('.hero-button-container', {opacity: 1, y: 0});

gsap.to("#services .services-text", {
    scrollTrigger: {
        trigger: "#services .services-text",
        scrub: true
    }, // start the animation when ".box" enters the viewport (once)
    y: 0,
    opacity: 1,
    
  });

  gsap.set('.logo-container', { opacity: 0, y:20});

  gsap.to('.logo-container', {
    stagger: 0.25,
    scrollTrigger: {
        trigger: "#services .services-text", // start the animation when ".box" enters the viewport (once)
        start: "top center"
    },
    y: 0,
    opacity: 1

  })



//   gsap.set('.technologies-button-container > a', {opacity: 0,y: 20});

//   gsap.to('.technologies-button-container > a',{

//     stagger: 0.25,
//     scrollTrigger: {
//         trigger: ".technologies-button-container ", // start the animation when ".box" enters the viewport (once)
//         start: "top top"
//     },
//     y: 0,
//     opacity: 1
//   })

  gsap.set('#portfolio .card-box', {opacity: 0,y: 20, scale: .6});

  gsap.to('#portfolio .card-box',{

    stagger: 0.25,
    scrollTrigger: {
        trigger: ".technologies-button-container  ", // start the animation when ".box" enters the viewport (once)
        start: "top 20%"
    },
    scale: 1,
    y: 0,
    opacity: 1
  })


  gsap.set('.tab-item', {opacity: 0,y: 20, scale: .6});

  gsap.to('.tab-item',{

    stagger: 0.25,
    scrollTrigger: {
        trigger: "#portfolio", // start the animation when ".box" enters the viewport (once)
        start: "top center"
    },

    scale: 1,
    y: 0,
    opacity: 1
  })

