$(document).ready(function() {
    //sticky menu
    $(".js--services-section").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky")
        } else {
            $("nav").removeClass("sticky")
        }
    });
    //Mixitup (Portfolio section)
    var mixer = mixitup('.container');

    //SCROLL BEHAVIOUR FOR IE/EDGE/SAFARI
    // $("a").on('click', function(event) {

    //     if (this.hash !== "") {
    //         event.preventDefault();

    //         var hash = this.hash;
    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top
    //         }, 800, function() {
    //             window.location.hash = hash;


    //         })
    //     }
    // })

});



//Hamburger Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



//Form js
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        form.reset()
        status.classList.add("success");
        status.innerHTML = "Thanks for your submission!";

    }).catch(error => {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)