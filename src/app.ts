const key = document.getElementById('key') as HTMLSpanElement;
const code = document.getElementById('code') as HTMLSpanElement;

document.addEventListener('keypress', (e) => {
    key.innerText = e.key;
    code.innerText = String(e.keyCode);
});