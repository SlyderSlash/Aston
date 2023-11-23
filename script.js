let message2=document.getElementById('message1');
let message1=document.querySelector('#message2');
let remy=document.getElementsByClassName('remy');
const alertPass = document.getElementById('alertpass')
const inputPass = document.getElementById('pass')
inputPass.addEventListener('change', (e) => {
    if(e.target.value.length <= 4) {
        alertPass.style.visibility = "visible"
    }
    else {
        alertPass.style.visibility = "hidden"
    }
})
for(let i = 0; i < remy.length; i++){
    remy[i].style.color = 'blue'
}