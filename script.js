let menu = document.querySelector('#menu');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let subject = document.querySelector('#subject');
let submit = document.querySelector('#submit');
let close = document.querySelector('#close');
let nav = document.querySelector('.nav');
let box=document.querySelector('.question-Box');
let botCross=document.querySelector('#bot-cross');
let bot=document.querySelector('.question-bot');
let chat=document.querySelector('.chat-input');
let chatBox=document.querySelector('.data-field');
let myForm=document.querySelector('#myForm')


bot.addEventListener('click',()=>{
    box.style.display="block"
})

botCross.addEventListener('click',()=>{
    box.style.display="none"
})

menu.style.cursor = 'pointer';


menu.addEventListener('click', function () {
    nav.classList.remove('none')
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

myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    //FormData converts the data as key/value pair
    let formData=new FormData(e.target);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    name.value="";
    email.value="";
    message.value="";
    subject.value="";
    alert("Printed on the Console Successfully");
})

let prev = window.scrollY;
if(window.innerWidth>=660){
    window.addEventListener('scroll', () => {
        let current = window.scrollY;
        if (current > prev) {
            nav.style.top = "-100px";
            nav.style.transition = "top 0.5s";
        } else {
            nav.style.top = "0px";
            nav.style.transition = "top 0.5s";
        }
        prev = current;
    })
}


chat.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        chatBox.innerHTML+=`<p class="user-data">${chat.value}</p>`;
        chat.value="";
    }
})

