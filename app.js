// Hamburger Menu
const listArray=document.getElementsByClassName("nav-items");
const menuList=document.getElementById("menu");
const menuOpen=document.getElementById('open');
const menuClose=document.getElementById('close');

menuOpen.addEventListener("click",()=>{
    for(let item of listArray){
        item.style.paddingTop="2rem";
        item.style.paddingBottom="2rem";
    }
    menuClose.style.display="flex";
    menuList.classList.add("nav-display");
    menuList.style.display="block";
});

menuClose.addEventListener("click",()=>{
    for(let item of listArray){
        item.style.paddingTop="0";
        item.style.paddingBottom="1rem";
    }
    menuClose.style.display="none";
    menuList.classList.remove("nav-display");
    menuList.style.display="none";
});


// Form spree events and sending data using api call

function removeMessage(){
    setTimeout(()=>{
        
        let status = document.getElementById("form-status");
        status.innerHTML="";
    },4000);
}

let form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("form-status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks! I will contact you soon.";
          removeMessage();
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form.";
              removeMessage();
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form.";
        removeMessage();
      });
    }
    form.addEventListener("submit", handleSubmit);


// Card Animation
let card1=document.getElementById("card1");
let card2=document.getElementById("card2");
let card3=document.getElementById("card3");

[card1,card2,card3].forEach((event,index)=>{
    event.addEventListener("mouseover",(evt)=>{
        event.style.transition="all 1.5s";
        cardBackground=document.getElementsByClassName("change");
        cardTitle=document.getElementsByClassName("card-header");
        cardText=document.getElementsByClassName("card-text");
        cardButton=document.getElementsByClassName("link-button");
        cardBackground[index].classList.add("background");
        cardTitle[index].classList.add("hidden");
        cardText[index].classList.remove("hidden");
        cardButton[index].classList.remove("hidden");
    });
});
[card1,card2,card3].forEach((event,index)=>{
    event.addEventListener("mouseout",(evt)=>{
        cardBackground=document.getElementsByClassName("change");
        cardTitle=document.getElementsByClassName("card-header");
        cardText=document.getElementsByClassName("card-text");
        cardButton=document.getElementsByClassName("link-button");
        cardBackground[index].classList.remove("background");
        cardTitle[index].classList.remove("hidden");
        cardText[index].classList.add("hidden");
        cardButton[index].classList.add("hidden");
    });
});