console.log("Script loaded");

const btn = document.querySelector("#button");
const fancyRadio = document.querySelector("#fancyShmancy");
const boringRadio = document.querySelector("#boringBetty");
const moo = document.querySelector("#moo");

btn.addEventListener("click", helloWorld);
fancyRadio.addEventListener("change", fancify);
boringRadio.addEventListener("change", boringify);
moo.addEventListener("click", mooFunc);

function helloWorld(){
    document.getElementById("inputSection").style.fontSize = "2em";
}

function fancify(){
    document.getElementById("inputSection").style.fontWeight = "bold";
    document.getElementById("inputSection").style.color = "blue";
    document.getElementById("inputSection").style.textDecoration = "underline";
}

function boringify(){
    document.getElementById("inputSection").style.fontWeight = "normal";
    document.getElementById("inputSection").style.color = "black";
    document.getElementById("inputSection").style.textDecoration = "none";
}

function mooFunc(){
    document.getElementById("inputSection").value = document.getElementById("inputSection").value.toUpperCase();
    var str = document.getElementById("inputSection").value;
    var parts = str.split(".");
    str = parts[0] + "-Moo."
    document.getElementById("inputSection").value = str;
}