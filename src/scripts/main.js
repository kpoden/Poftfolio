$(document).ready(function () {



    ////**** GSAP SECTION ****////

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'body'
        }
    })


    tl.to('.color1', 0.3, {
        width: '100%',
        ease: "Expo.easeInOut"
    })
    tl.to('.color2', 0.5, {
        width: '100%'
    })
    tl.to('.header__title', 0.4, {
        y: '0',
        ease: "Expo.easeInOut"
    })
    tl.to('.header__subtitle', {
        opacity: '1'
    })


    gsap.from(".skill__el", {
        scrollTrigger: ".skill__el",
        y: '100px',
        stagger: 0.15,
        opacity: 0
    });

    gsap.to(".skill__el", {
        scrollTrigger: ".skill__el",
        y: '0',
        stagger: 0.15,
        opacity: '1'
    });


    gsap.to(".header__image", {
        scrollTrigger: ".header__image",
        scaleX: '1',
        transformOrigin: 'right center',
        delay: .5
    });

    gsap.to(".header__image img", {
        scrollTrigger: ".header__image",
        y: '0',
        delay: 1
    });

    gsap.to(".header-img-wrap", 1.5, {
        scrollTrigger: ".header__image",
        y: '-500',
        ease: "Expo.easeInOut",
        delay: .5
    });

    gsap.to(".header__button", {
        scrollTrigger: ".header__image",
        y: '0',
        opacity: 1,
        ease: "Expo.easeInOut",
        delay: 1.9,
        stagger: 0.15
    });

    gsap.to(".nav__el", 1.2, {
        scrollTrigger: ".header__image",
        y: '0',
        ease: "Power3.easeInOut",
        opacity: 1,
        stagger: -0.1,
        ease: "power2.inOut"
    });



    gsap.from(".work", 1, {
        scrollTrigger: ".work",
        y: '50',
        opacity: 0,
        stagger: 0.3,
        delay: 0.3
    });

    gsap.to(".work", 1, {
        scrollTrigger: ".work",
        y: '0',
        opacity: 1,
        stagger: 0.3,
        delay: 0.3
    });


    gsap.to(".skills__title.block-title", 1, {
        scrollTrigger: ".skills__title",
        y: '0',
        delay: 0.1
    });

    gsap.from(".skills__title + .title-line", .4, {
        scrollTrigger: ".skills__title",
        width: '0',
        delay: 0.2
    });

    gsap.to(".block-title.portfolio__title", 1, {
        scrollTrigger: ".portfolio__title",
        y: '0',
        delay: 0.1
    });

    gsap.from(".portfolio__title + .title-line", .4, {
        scrollTrigger: ".portfolio__title",
        width: '0',
        delay: 0.2
    });

    gsap.to(".block-title.contacts__title", 1, {
        scrollTrigger: ".contacts__title",
        y: '0',
        delay: 0.1
    });

    gsap.from(".contacts__title + .title-line", .4, {
        scrollTrigger: ".contacts__title",
        width: '0',
        delay: 0.2
    });






    ////**** GSAP SECTION END ****////


    /*-----------------------------------------------------------*/


    ////**** MOBILE MENU SECTION ****////

    $('.burger__out').on('click', function () {
        $(this).addClass('burger--active');
        $('.nav__bar').addClass('nav__bar--active');
        $('.dark-bg').addClass('dark-bg--active');
    })
    $('.burger__in').on('click', function () {
        $('.burger__out').removeClass('burger--active');
        $('.nav__bar').removeClass('nav__bar--active');
        $('.dark-bg').removeClass('dark-bg--active');
    })
})

$('.dark-bg').on('click', function () {
    $('.burger__out').removeClass('burger--active');
    $('.nav__bar').removeClass('nav__bar--active');
    $('.dark-bg').removeClass('dark-bg--active');
})

$('.nav__link').on('click', function () {
    if ($(window).width() < 979) {
        $('.burger__out').removeClass('burger--active');
        $('.nav__bar').removeClass('nav__bar--active');
        $('.dark-bg').removeClass('dark-bg--active');
    }
})

window.onresize = function (event) {
    if ($(window).width() > 979) {
        $('.burger__out').removeClass('burger--active');
        $('.nav__bar').removeClass('nav__bar--active');
        $('.dark-bg').removeClass('dark-bg--active');
    }
};

$(window).scroll(function () {
    if ($(this).scrollTop() > 780) {
        $('#up-btn').fadeIn();
    } else $('#up-btn').fadeOut();
});

////**** MOBILE MENU SECTION END****////


/*-----------------------------------------------------------*/


////**** FOOTER FORM SECTION  ****////

window.onload = function () {
    if ($('.form-field').val() !== '' || $('.submit__textarea').val() !== '') {
        $('.form-field').val('');
        $('.submit__textarea').val('');

    }
}

$('.contacts__field, .contacts__msg').val('');

if ($('.contacts__field, .contacts__msg').val !== "") {
    $(this).next().addClass('focused');
}


$('.contacts__field, .contacts__msg').on('focus', function () {
    $(this).next().addClass('focused');
})

$('.contacts__field, .contacts__msg').on('blur', function () {
    if ($(this).val() === '') {
        $(this).next().removeClass('focused');
    }
})
////**** FOOTER FORM SECTION END ****////

/*-----------------------------------------------------------*/

////**** FORM VALIDATE AND SEND CODE ****////

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        removeAlert();
        let error = validateForm(form);

        console.log(error);

        if (error === 0) {
            let response = await fetch('send.php', {
                method: 'POST'
            })
    
            if(response.ok) {
    
                let result = await response.json();
                form.reset();
                console.log(result.message);
                console.log('done');
    
            } else {
                console.log('error');
            }
    
        } else {
            addAlert();
        }
    }
})



let formReq = document.querySelectorAll('.form__field');

// Getting form fields area for inserting allert after it
let formArea = document.getElementsByClassName('textarea-field-wrap')[0];

// Creating error alert
let errAlert = document.createElement('p');
errAlert.id = "_err-alert";
errAlert.innerHTML = "Please fill out all required fields marked in red"


function validateForm(form) {
    let error = 0;


    for (let index = 0; index < formReq.length; index++) {

        const input = formReq[index];

        input.addEventListener('focus', function () {
            removeErr(input);
        })

        if (input.value === '' || input.value === null) {
            addErr(input);
            error++;
        }
    }

    return error;

    
}

// Adding error style for input field
function addErr(input) {
    input.classList.add('_err');
}

// Removing error style for input field
function removeErr(input) {
    input.classList.remove('_err');
}

// Adding alert message
function addAlert() {
    formArea.after(errAlert);
}

// Removing alert message
function removeAlert() {
    let el = document.getElementById('_err-alert');

    if (el) {
        el.remove(el);
    }
}

////**** FORM VALIDATE AND SEND CODE END****////

navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault();

}))


document.getElementById("main").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".main"
        }
    })
})

document.getElementById("up-btn").addEventListener("click", () => {
    gsap.to(window, {
        duration: .5,
        scrollTo: {
            y: ".main"
        }
    })
})

document.getElementById("skills").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".skills"
        }
    })
})
document.getElementById("works").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".portfolio"
        }
    })
})
document.getElementById("contacts").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".contacts"
        }
    })
})
document.getElementById("view-work").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".portfolio"
        }
    })
})
document.getElementById("get-in-touch").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".contacts"
        }
    })
})