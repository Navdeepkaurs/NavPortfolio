//Smooth scroll!

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function downloadCV() {
    const link = document.createElement('a');
    link.href = './media/cv.pdf';
    link.download = 'cv.pdf';
    link.click();
}


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();




function page4Animation() {
    var elemC = document.querySelector("#work-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem-1")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function LoaderAnimation() {
    var t1 = gsap.timeline();

    // Loader animation sequence
    t1.from("#loader h3", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
    })
        .to("#loader h3", {
            opacity: 0,
            x: -10,
            duration: 1,
            stagger: 0.1,
        })
        .to("#loader", {
            autoAlpha: 0,
            duration: 0.5,
        })
        .to("#loader", {
            display: "none",
            onComplete: startSignatureAnimation
        });
}



// Function to trigger the SVG animation
function startSignatureAnimation() {
    gsap.to("#signature", {
        strokeDashoffset: 0,
        duration: 4, // Length of the animation
        // ease: "expo.out", 
        ease: "linear",
    });
}


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: true,
    });
}

// emailJs

(function () {
    emailjs.init("oCcomOY0OMplo05Ig"); // 🔹 Replace with your actual Public Key from EmailJS
})();

function sendMail() {
    var params = {
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_v0alg8j", "template_lk6v6df", params)
        .then(function (res) {
            alert("Message sent successfully!");
            console.log("Success:", res);

            // Clear the form fields
            document.getElementById("fullname").value = '';
            document.getElementById("email_id").value = '';
            document.getElementById("message").value = '';
        })
        .catch(function (error) {
            alert("Failed to send message. Check console for errors.");
            console.error("Error:", error);
        });
}


// function sendMail() {
//     var params = {
//         from_name: document.getElementById("fullname").value,
//         email_id: document.getElementById("email_id").value,
//         message: document.getElementById("message").value
//     };

//     emailjs.send("service_v0alg8j", "template_lk6v6df", params)
//         .then(function (res) {
//             alert("Message sent successfully!");
//         })
//         .catch(function (error) {
//             alert("Failed to send message. Error: " + error.text);
//         });
// }






LoaderAnimation();
page4Animation();
swiperAnimation();

