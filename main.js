let btnNum = document.querySelectorAll(".btn-num");
let myScreen = document.querySelector(".screen");
let btnOp = document.querySelectorAll(".btn-op")
let btnDot = document.querySelector(".btn-dot");
let btnEqual = document.querySelector(".btn-equal");
let btnClear = document.querySelector(".btn-clear");
let btnBracket = document.querySelector(".btn-bracket");
let btnBackspace = document.querySelector(".btn-backspace");

let bracketStatus = true;
let btOpStatus = false;
let btnDotStatus = true;
let result = 0;
let equalClick = true;

btnBackspace.addEventListener("click", function () {
    let html = myScreen.innerHTML;
    myScreen.innerHTML = html.substring(0, html.length - 1);
    console.log(html);
})
btnBracket.addEventListener("click", function () {
    if (myScreen.textContent == "0" || equalClick === true) {
        myScreen.textContent = "";
        equalClick = false;
    }
    if (bracketStatus) {
        myScreen.innerHTML += "(";
        bracketStatus = false;
    }
    else if (bracketStatus === false && btOpStatus === true) {
        myScreen.innerHTML += ")";
        bracketStatus = true;
        console.log(bracketStatus + " " + btOpStatus)
    }
})

btnClear.addEventListener("click", function () {
    result = 0;
    myScreen.innerHTML = 0;
    bracketStatus = true;
})

btnEqual.addEventListener("click", function () {
    try {
        result = eval(myScreen.innerHTML);
        myScreen.innerHTML = result;
        equalClick = true;
        btOpStatus = false;
    } catch (error) {
        console.log(error);
        alert("Syntactic error")
    }
})

btnDot.addEventListener("click", function () {
    if (equalClick === false) {
        if (btnDotStatus) {
            myScreen.innerHTML += this.textContent;
            btnDotStatus = false;
        }
        console.log(btnDotStatus)
    }
})

btnNum.forEach(element => {
    element.addEventListener("click", function () {
        if (myScreen.textContent == "0" || equalClick === true) {
            myScreen.textContent = "";
            equalClick = false;
        }
        myScreen.innerHTML += this.textContent;
        btOpStatus = true;
        myScreen.innerHTML = myScreen.innerHTML.replace("*.", "*0.");
        myScreen.innerHTML = myScreen.innerHTML.replace("-.", "-0.");
        myScreen.innerHTML = myScreen.innerHTML.replace("+.", "+0.");
        myScreen.innerHTML = myScreen.innerHTML.replace("/.", "/0.");
    })
});

btnOp.forEach((element) => {
    element.addEventListener("click", function () {
        if (btOpStatus) {
            myScreen.innerHTML += this.textContent;
            btOpStatus = false;
            btnDotStatus = true;
        }
    })
})