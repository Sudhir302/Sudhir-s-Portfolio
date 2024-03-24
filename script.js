const slideMenu = document.querySelector("#nav-content");

function closeMenu(){
    slideMenu.style.right = "-300px";
}

function openMenu(){
    slideMenu.style.right = "0";
}


// ------------------------------for msg---------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbxHT8XjqAAJ_YpfejpB5mXrAioUwUJRQXmdtwBa4PVInirOq8W6XCmd9dRjd-uspyBWsw/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById('confirmation');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML= "Message received Successfully";
        setTimeout(function(){
            msg.innerHTML=""},5000);
            form.reset();
        })
    .catch(error => console.error('Error!', error.message))
})