//                                __   __
//                               |(ª) (*)|
//                               |   #   | 
//                               | '¨¨¨' |
//                                ¨¨¨¨¨¨¨                           
/*--------------------- Coded by @joaof6418 instagram ---------------------*/



function instructions() {
    if (localStorage.getItem("firstVisit")) {
       // let visit = localStorage.getItem("firstVisit").split(";");
       return;
    } else {
        localStorage.setItem("firstVisit", 1);
        alert("               ATTENTION! \n\nPress 'Enter' to add input values.")
    }
}
instructions();



let dripPercentage = 0;

//obtem o valor da conta mais a porcentagem da gorjeta sobre a conta
function splitter(dripPercentage) {
    let inBill = document.getElementById("inBill");
    let bill = Number(inBill.value);

    let amount = bill + (dripPercentage * bill);

    return amount;      // retorna o valor da conta mais gorjeta
}


//-----------------------------------------------------------------------------

//verifica se o campo conta foi preenchido corretamente
function verify() {
    //obtem o valor do input
    let inBill = document.getElementById("inBill");
    let inpPeople = document.getElementById("inpPeople");

    let bill = Number(inBill.value);
    let people = Number(inpPeople.value);

    //faz referência aos ids dos campos de alerta
    let alertBill = document.getElementById("alertBill");
    let alertPercentage = document.getElementById("alertPercentage");
    let alertPeople = document.getElementById("alertPeople");

    let btReset = document.getElementById("btReset");

    //se valor for invalido retorna um alert e modifica sua classe para exibe
    if (bill == "" || bill == isNaN(bill)) {
        alertBill.className = "exibe";
        inBill.focus();
        return;
    } else {
        alertBill.className = "oculta";
    }

    //verifica se a porcentagem foi selecinada
    if (dripPercentage == 0) {
        alertPercentage.className = "exibe";
        alertPercentage.focus();
        return;
    } else {
        alertPercentage.className = "oculta";
        inpPeople.focus();
    }

    //verifica se numero de pessoas foi selecionado
    if (people == "" || people == isNaN(people)) {
        alertPeople.className = "exibe";
        return;
    } else {
        alertPeople.className = "oculta";
        btReset.focus();
    }
}





//-----------------------------------------------------------------------------





//evento click no bt5%
function clickbt5() {
    dripPercentage = Number(.05);

    verify();
    numPeople(dripPercentage);
}
let bt5 = document.getElementById("bt5");
bt5.addEventListener("click", clickbt5)


//evento click no bt10%
function clickbt10() {
    dripPercentage = .10;

    verify();
    numPeople(dripPercentage);//retorna valor da porcentagem para function numPople
}
let bt10 = document.getElementById("bt10");
bt10.addEventListener("click", clickbt10);


//evento click no bt15%
function clickbt15() {
    dripPercentage = .15;

    verify();
    numPeople(dripPercentage);//retorna valor da porcentagem para function numPople

}
let bt15 = document.getElementById("bt15");
bt15.addEventListener("click", clickbt15);


//evento click no bt25%
function clickbt25() {
    dripPercentage = .25;

    verify();
    numPeople(dripPercentage);//retorna valor da porcentagem para function numPople

}
let bt25 = document.getElementById("bt25");
bt25.addEventListener("click", clickbt25);


//evento click no bt50%
function clickbt50() {
    let dripPercentage = .50;

    verify();
    numPeople(dripPercentage); //retorna valor da porcentagem para function numPople
}
let bt50 = document.getElementById("bt50");
bt50.addEventListener("click", clickbt50);


//evento click no btcustom
function btCustom() {
    let inCustom = document.getElementById("inCustom")

    let custom = Number(inCustom.value);
    dripPercentage = custom / 100;

    verify();
    numPeople(dripPercentage);
}

// quando "Enter" for pressinado no input "inCustom"
let inCustom = document.getElementById("inCustom");
inCustom.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        let inpPeople = document.getElementById("inpPeople");
        btCustom();
        verify();
    }
})





//-----------------------------------------------------------------------------





//obtem o numero de pessoas e recebe o parâmetro
//dripPercentage para enviar a function paymentValues
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

// quando "Enter" for pressinado no input "inBill"
let inBill = document.getElementById("inBill");
inBill.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        verify();
        numPeople(dripPercentage);
    }
})

// quando "Enter" for pressinado no input "inpPeople"
let inpPeople = document.getElementById("inpPeople");
inpPeople.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        verify();
        numPeople(dripPercentage);
    }
})





//-----------------------------------------------------------------------------





//function responsavel por calcular e exibir os valores que retornam para o usuário
function paymentValues(dripPercentage, numP) {
    let tripAmount =  (splitter(dripPercentage) - splitter(0)) / numP; 
    let total = splitter(dripPercentage) / numP;

    let inSpan1 = document.getElementById("span1")
    let inSpan2 = document.getElementById("span2")

    inSpan1.textContent = "$" + tripAmount.toFixed(2);
    inSpan2.textContent = "$" + total.toFixed(2);

    verify(); 

    //não permite que os spans devolvam os valores aos usuários
    //até que todos os campos estejam preenchidos
    if (dripPercentage == 0 || numP == 0) {
        inSpan1.textContent = "$0.00";
        inSpan2.textContent = "$0.00";
    }

    exibeButtom(); 
}





//-----------------------------------------------------------------------------





//troca a classe do botão reset para "exibe"
function exibeButtom() {
    let btReset = document.getElementById("btReset");

    btReset.className = "buttom-reset-exibe";
}





//-----------------------------------------------------------------------------





//recarrega a pagina
function reset() {
  location.reload();
}
let btReset = document.getElementById("btReset");
btReset.addEventListener("click", reset);