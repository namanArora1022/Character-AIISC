const key = document.getElementById('key');
const code = document.getElementById('code');

document.addEventListener('keypress' , (e)=>{
    key.innerHTML = e.key;
    code.innerHTML = e.keyCode;
});