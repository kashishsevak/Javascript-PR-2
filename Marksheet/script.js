const MyMarksheet = document.getElementById('MyMarksheet');
let isDisplay = false;
const name = document.getElementById('name');
const rollno = document.getElementById('rollno');
const html = document.getElementById('html');
const javascript = document.getElementById('javascript');
const bootstrap = document.getElementById('bootstrap');
const reactjs = document.getElementById('reactjs');

// Display Vraible
const nameDisplay = document.getElementById('name-display');
const rollnoDisplay = document.getElementById('rollno-display');
const enrollmentDisplay = document.getElementById('enrollment-display');
const htmlDisplay = document.getElementById('html-display');
const javascriptDisplay = document.getElementById('javascript-display');
const bootstrapDisplay = document.getElementById('bootstrap-display');
const reactjsDisplay = document.getElementById('reactjs-display');
const total = document.getElementById('total');
const gradeDisplay = document.getElementById('grade-display');
const perDisplay = document.getElementById('per-display');
const resultDisplay = document.getElementById('result-display');

function handleMyMarksheet() {
    if (isDisplay) {
        MyMarksheet.classList.add('d-none');
        isDisplay = false;
    } else {
        MyMarksheet.classList.remove('d-none');
        isDisplay = true;
    }
}

function handleSubmit() {
    nameDisplay.innerText = name.value;
    rollnoDisplay.innerText = rollno.value;
    enrollmentDisplay.innerText = "21BSCIT" + rollno.value;
    htmlDisplay.innerText = html.value;
    javascriptDisplay.innerText = javascript.value;
    bootstrapDisplay.innerText = bootstrap.value;
    reactjsDisplay.innerText = reactjs.value;
    total.innerText = Number(htmlDisplay.innerText) + Number(javascriptDisplay.innerText) + Number(bootstrapDisplay.innerText) + Number(reactjsDisplay.innerText);

    let per = (total.innerText) / 400 * 100;
    perDisplay.innerText = per.toFixed(2) + '%';

    let grade = "";

    if (per >= 80) {
        grade = 'A';
    }else if(per >= 60 && per<=80){
        grade = 'B';
    }else if(per >= 40 && per<=60){
        grade = 'C';
    }else{
        grade = 'D';
    }

    gradeDisplay.innerText = grade;

    let result = "";

    if(per >= 40){
        result = "PASS";
    }else{
        result = "FAIL";
    }

    resultDisplay.innerText = result;
    
}