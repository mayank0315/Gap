
Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("i", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
//loader

function loaderAnimation(){
  gsap.from(".clip-top, .clip-bottom", 1, {
    delay: 1,
    height: "50vh",
    ease: "Power4.inOut",
})

gsap.to(".marquee", 3,{
    delay:0.75,
    top:"50%",
    ease: "power4.inOut",
})
gsap.from(".clip-top .marquee, .clip-bottom .marquee", 4,{
    delay:1,
    left:"100%",
    ease: "power3.inOut",
})
gsap.from(".clip-center .marquee", 4,{
    delay:1,
    left:"-50%",
    ease: "power3.inOut",
})
gsap.to(".clip-top", .7,{
    delay:6,
    clipPath:"inset(0 0 100% 0)",
    ease:"power4.inOut",
})
gsap.to(".clip-bottom", .7,{
    delay:6,
    clipPath:"inset(100% 0 0 0)",
    ease:"power4.inOut",
})
gsap.to(".clip-center", 1,{
    delay:6,
    opacity:0,
    ease:"power4.inOut",
    display:"none"
})
}
loaderAnimation()




// navigation bar
let isOpen = false;
function toggleNav() {
    if (isOpen) {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("menuBtn").style.display = "inline";
    } else {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("menuBtn").style.display = "none";
    }
    isOpen = !isOpen;
}
//1


function page1Image() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      // scroller: "#main",

      // markers:true,
      start: "top 50%",
      end: "top -20%",
      scrub: 1,
    },
  });
  tl.to(
    "#page2 #image",
    {
      transform: "translate(-50%,-50%)",

      // y:20,
    },
    "sa"
  );
  tl.to(
    "#page2 img",
    {
      // transform: "translate(-50%,-50%)",
      scale: 1,

      // y:20,
    },
    "sa"
  );
}
page1Image();

function page2Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      // scroller: "#main",
      // markers: true,
      start: "top 0",
      end: "top -100%",
      scrub: 1,
      pin: true,
    },
  });

  tl.from(
    "#leftimages",
    {
      y: -700,
      // rotate:-45,
      duration: 1,
      opacity: 0,
    },
    "ani"
  );

  tl.from(
    "#rightimages",
    {
      y: 700,
      // rotate:45,
      duration: 1,
      opacity: 0,
    },
    "ani"
  );
}
page2Animation();




//section 2 - video marketting
function section2(){
    document.addEventListener('DOMContentLoaded', function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo("#video", 
            { width: "250px", height: "250px" }, 
            {
                width: "100vw",
                height: "100vh",
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: "#section2",
                    start: "top 60%",
                    end: "top 0%",
                    scrub: true,
                    onUpdate: self => {
                        const progress = self.progress;
                        const description = document.getElementById("description");
                        if (progress > 0.5) {
                            description.style.opacity = 0;
                        } else {
                            description.style.opacity = 1;
                        }
                    }
                }
            }
        );
    });
    
}
section2()


//section3 
function section3(){
    document.addEventListener('DOMContentLoaded', function() {
        const categories = {
            "women": "./assets/3women.jpeg",
            "men": "./assets/2men.jpeg",
            "girls": "./assets/3girls.jpeg",
            "boys": "./assets/3boys.jpeg",
            "toddlers": "./assets/3toddler.jpeg",
            "baby": "./assets/3baby.jpeg"
        };
    
        const mainImage = document.getElementById('mainImage');
    
      
        const categoryHeadings = document.querySelectorAll('.category');
        categoryHeadings.forEach(heading => {
            heading.addEventListener('mouseenter', () => {
                const category = heading.getAttribute('data-category');
                mainImage.src = categories[category];
            });
        });
    });
    
}
section3()

/* <!-- section4 --> */

function colorChangeAnime4(){
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      // scroller: "#main",
  
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
      // markers:true
    },
  });
  tl.to("#section4 #page4_1", {
    backgroundColor: "#000000",
   
  }),"aniii";
  tl.to("#section4 #page4_2", {
    backgroundColor: "#000000",

  }),"aniii";
  tl.to("#section4 #page4_3", {
    backgroundColor: "#000000",
   
  }),"aniii";
 

}
colorChangeAnime4()

function section4Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      // scroller: "#main",
      start: "top 0%",
      // markers:true,
      end: "top -100%",
      ease: 1,
      scrub: true,
      pin: true,
    },
  });

  tl.to(
    "#section4 #text #text-h1",
    {
      y: -160,
    },
    "ani"
  );
  tl.to(
    "#page4_3 h1",
    {
      y: -55,
    },
    "ani"
  );

  tl.to(
    "#section4 video",
    {
      y: -610,
    },
    "ani"
  );


 
}
section4Animation();


// section6


function section6Animation(){
  
document.addEventListener("DOMContentLoaded", function() {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: "#section6",
          start: "top 0", 
          end: "top -80%", 
          pin: true, 
          scrub: true, 
        
          // loop:true,
          
      }
  });

  tl.to(sliderWrapper, {
      x: -(slides.length * (375)), 
      ease: "none"
  });
});
}
section6Animation()


