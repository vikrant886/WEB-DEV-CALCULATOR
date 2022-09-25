const text_box = document.querySelector('.text_box');

function dis(v) {
    document.getElementById("text_box").value += v;
}

function cl() {
    document.getElementById("text_box").value = "";
}

function solve() {
    var a = document.getElementById("text_box").value;
    var ans = eval(a);
    document.getElementById("text_box").value = ans;
}