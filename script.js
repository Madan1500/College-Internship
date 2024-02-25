let menu = document.querySelector('#menu');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let subject = document.querySelector('#subject');
let submit = document.querySelector('#submit');
let close = document.querySelector('#close');
let nav = document.querySelector('.nav');

menu.style.cursor = 'pointer';


menu.addEventListener('click', function () {
    nav.classList.toggle('show');
    menu.style.display = 'none';
    nav.style.position = "relative";
    nav.style.zIndex = "1000";
});
//This is to close when clicked on the cross button
close.addEventListener('click', function () {
    menu.style.display = 'block';
    nav.classList.toggle('show');
});

//This is to close when clicked on something in the nav-bar of phone size
document.querySelectorAll('a').forEach((item) => {
    if (item.getAttribute('href') !== 'tel: 7077313056') {
        item.addEventListener('click', function () {
            menu.style.display = 'block';
            nav.classList.toggle('show');
        });
    }
})
//This is to go to the required position while closing the navigation bar
document.querySelectorAll(".footer-link").forEach((item) => {
    return item.addEventListener('click', () => {
        if (window.innerWidth < 660) {
            nav.classList.remove('show');
            menu.style.display = 'block';
        }
    })
})



//Task--> This will print data in the Console of the user
submit.addEventListener('click', function () {
    if (name.value === '' || email.value === '' || message.value === '' || subject.value === '')
        alert('Please fill in all fields');
    else {
        console.log(name.value);
        console.log(email.value);
        console.log(subject.value);
        console.log(message.value);
    }
});


if(window.innerWidth >= 660){
    // This is first I am setting the previous value
    let prev = window.scrollY;
    window.onscroll = function() {
        if (window.scrollY > prev){
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        prev = window.scrollY;
    };
}