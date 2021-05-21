var allBars = document.querySelectorAll('div.progress-bar > div');
var currentPercent = document.querySelector('div.percentage > div.digit');

var inputPasswordField = document.querySelector('input.password');
inputPasswordField.addEventListener('keyup', (e)=>{
    allBars.forEach(bar => {
        bar.style.background = 'none';
        bar.style.border = '1px solid lightgrey';
    });4
    var pwdPercent = getStrengthPercent(inputPasswordField.value);
    if(pwdPercent == 100){
        allBars.forEach(bar => {
            bar.style.background = 'green';
            bar.style.border = '1px solid green';
        });
    } else if(pwdPercent >= 75) {
        for(var i = 0; i < 3; i++){
            allBars[i].style.background = 'gold';
            allBars[i].style.border = '1px solid gold';
        }
    } else if(pwdPercent >= 50) {
        for(var i = 0; i < 2; i++){
            allBars[i].style.background = 'gold';
            allBars[i].style.border = '1px solid gold';
        }
    } else if(pwdPercent >= 25) {
        allBars[0].style.background = 'red';
        allBars[0].style.border = 'red';
    }

    displayPercent(pwdPercent);
});

function displayPercent(pwdPercent){
    var count = currentPercent.textContent;
    var total = pwdPercent;

    document.querySelector('div.percentage').style = '';

    var x = setInterval(function(){
        if(count > total) currentPercent.innerHTML = --count;
        if(count < total) currentPercent.innerHTML = ++count;
        if(count == total) clearInterval(x);
    }, 5);
};

function getStrengthPercent(inputPassword){
    var percent = 0;
    percent = percent + percentByLength(inputPassword);
    percent = percent + (percentByUppercase(inputPassword));
    percent = percent + (percentByChar(inputPassword));
    percent = percent + (percentByNum(inputPassword));

    return percent;
}

function percentByLength(inputPassword){
    if(inputPassword.length >= 10) return 25;
    else if(inputPassword.length >= 8) return 15;
    else if(inputPassword.length > 0) return 5;
    else return 0;
}

function percentByUppercase(inputPassword){
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var noOfUpperCase = [];

    inputPassword.split('').forEach(char => {
        if(letters.includes(char)) noOfUpperCase.push(char);
    });

    if(inputPassword.length - noOfUpperCase.length >= inputPassword.length) return 0;
    else if(inputPassword.length - noOfUpperCase.length >= 8) return 25;
    else if(inputPassword.length - noOfUpperCase.length >= 6) return 15;
    else if(inputPassword.length - noOfUpperCase.length > 0) return 5;
    else return 0;
}

function percentByChar(inputPassword){
    var allChar = '`,.~{}()+_=-!@#$%^&*|\\\'":?';
    var noOfChar = [];

    inputPassword.split('').forEach(char => {
        if(allChar.includes(char)) noOfChar.push(char);
    });

    if(inputPassword.length - noOfChar.length >= inputPassword.length) return 0;
    else if(inputPassword.length - noOfChar.length >= 7) return 25;
    else if(inputPassword.length - noOfChar.length >= 5) return 15;
    else if(inputPassword.length - noOfChar.length > 0) return 5;
    else return 0;
}

function percentByNum(inputPassword){
    var allChar = '1234567890';
    var noOfChar = [];

    inputPassword.split('').forEach(char => {
        if(allChar.includes(char)) noOfChar.push(char);
    });

    if(inputPassword.length - noOfChar.length >= inputPassword.length) return 0;
    else if(inputPassword.length - noOfChar.length >= 7) return 25;
    else if(inputPassword.length - noOfChar.length >= 5) return 15;
    else if(inputPassword.length - noOfChar.length > 0) return 5;
    else return 0;
}







