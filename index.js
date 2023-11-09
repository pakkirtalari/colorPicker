let containerBg = document.getElementById("mainContainer");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let colorName = document.getElementById("colorName");

function colorPicker1(){
    containerBg.style.backgroundColor = button1.textContent;
    colorName.textContent = button1.textContent;
    colorName.style.color = "#49a6e9";
};

function colorPicker2(){
    containerBg.style.backgroundColor = button2.textContent;
    colorName.textContent = button2.textContent;
    colorName.style.color = "#49a6e9";
};

function colorPicker3(){
    containerBg.style.backgroundColor = button3.textContent;
    colorName.textContent = button3.textContent;
    colorName.style.color = "#49a6e9";
};

function colorPicker4(){
    containerBg.style.backgroundColor = button4.textContent;
    colorName.textContent = button4.textContent;
    colorName.style.color = "#49a6e9";
};