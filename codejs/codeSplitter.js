let dripPercentage = 0;

//obtem o valor da conta mais a porcentagem da gorjeta sobre a conta
function splitter(dripPercentage) {
    let inBill = document.getElementById("inBill");
    let bill = Number(inBill.value);

    let amount = bill + (dripPercentage * bill);

    return amount;      // retorna o valor da conta mais gorjeta
}


//------------------

//verifica se o campo conta foi preenchido corretamente
function verify() {
    //obtem o valor do input
    let inBill = document.getElementById("inBill");
    let inpPeople = document.getElementById("inpPeople");

    let bill = Number(inBill.value);
    let people = Number(inpPeople.value);

    let alertBill = document.getElementById("alertBill");
    let alertPercentage = document.getElementById("alertPercentage");
    let alertPeople = document.getElementById("alertPeople");

    let btReset = document.getElementById("btReset");

    //se valor for invalido retorna um alert e direciona o foco do cursor
    if (bill == "" || bill == isNaN(bill)) {
        alertBill.className = "exibe";
        inBill.focus();
        return;
    } else {
        alertBill.className = "oculta";
    }

    if (dripPercentage == 0) {
        alertPercentage.className = "exibe";
        alertPercentage.focus();
        return;
    } else {
        alertPercentage.className = "oculta";
        inpPeople.focus();
    }

    if (people == "" || people == isNaN(people)) {
        alertPeople.className = "exibe";
        return;
    } else {
        alertPeople.className = "oculta";
        btReset.focus();
    }
}




//------------------

//evento click no bt5
function clickbt5() {
    dripPercentage = Number(.05);

    numPeople(dripPercentage);
}
let bt5 = document.getElementById("bt5");
bt5.addEventListener("click", clickbt5)

function clickbt10() {
    dripPercentage = .10;

    verify();
    numPeople(dripPercentage);
}
let bt10 = document.getElementById("bt10");
bt10.addEventListener("click", clickbt10);

function clickbt15() {
    dripPercentage = .15;

    verify();
    numPeople(dripPercentage);

}
let bt15 = document.getElementById("bt15");
bt15.addEventListener("click", clickbt15);

function clickbt25() {
    dripPercentage = .25;

    verify();
    numPeople(dripPercentage);

}
let bt25 = document.getElementById("bt25");
bt25.addEventListener("click", clickbt25);

function clickbt50() {
    let dripPercentage = .50;

    verify();
    numPeople(dripPercentage);
}
let bt50 = document.getElementById("bt50");
bt50.addEventListener("click", clickbt50);

function btCustom() {
    let inCustom = document.getElementById("inCustom")

    let custom = Number(inCustom.value);
    dripPercentage = custom / 100;

    verify();
    numPeople(dripPercentage);
}
let inCustom = document.getElementById("inCustom");
inCustom.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        let inpPeople = document.getElementById("inpPeople");
        btCustom();
        verify();
    }
})




//------------------

//obtem o numero de pessoas
function numPeople(dripPercentage) {
    let inpPeople = document.getElementById("inpPeople");
    let numP = Number(inpPeople.value);

    if (numP == 0 || numP == "") {
        verify();
        numPeople(dripPercentage);
    } else {
        paymentValues(dripPercentage, numP);
    }
} 

let inBill = document.getElementById("inBill");
inBill.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        verify();
        numPeople(dripPercentage);
    }
})

let inpPeople = document.getElementById("inpPeople");
inpPeople.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        verify();
        numPeople(dripPercentage);
    }
})


//------------------
function paymentValues(dripPercentage, numP) {
    let tripAmount =  splitter(dripPercentage) / numP; // x = valor numero de pessoas
    let total = tripAmount * numP;

    let inSpan1 = document.getElementById("span1")
    let inSpan2 = document.getElementById("span2")

    inSpan1.textContent = "$ " + tripAmount.toFixed(2);
    inSpan2.textContent = "$ " + total.toFixed(2);

    verify();
    if (dripPercentage == 0 || numP == 0) {
        inSpan1.textContent = "$0.00";
        inSpan2.textContent = "$0.00";
    }

    exibeButtom();
}


function exibeButtom() {
    let btReset = document.getElementById("btReset");

    btReset.className = "buttom-reset-exibe";
}

function reset() {
  location.reload();
}
let btReset = document.getElementById("btReset");
btReset.addEventListener("click", reset);