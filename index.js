const input = document.querySelector(".input");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const title = document.querySelector(".title");


window.addEventListener("keydown", (e)=> {
    text1.textContent = e.key;
    text2.textContent = e.code;
    text3.textContent = e.cancelable;
    title.textContent = e.which;

    if (e.key == " ") {
        text1.textContent = "(Space)";
    }
});