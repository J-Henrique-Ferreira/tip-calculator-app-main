function splitter(dripPercentage) {
    let inBill = document.getElementById("inBill");
    let bill = Number(inBill.value);

    let amount = bill + dripPercentage * bill;

    return amount;
}

function verify() {
    let inBill = document.getElementById("inBill");
    let bill = Number(inBill.value);
    if (bill == "" || bill == isNaN(bill)) {
        alert("Fill in the account amount.")
        inBill.focus();
    }
}

function clickbt5() {
    verify();
    let inpPeople = document.getElementById("inpPeople");
    let dripPercentage = Number(.05);
    inpPeople.focus();

    splitter(dripPercentage);

}
let bt5 = document.getElementById("bt5");
bt5.addEventListener("click", clickbt5)




function clickbt10() {
    verify();
    let inpPeople = document.getElementById("inpPeople");
    let dripPercentage = .10;
    inpPeople.focus();

    splitter(dripPercentage);

}
let bt10 = document.getElementById("bt10");
bt10.addEventListener("click", clickbt10)




function clickbt15() {
    verify();
    let inpPeople = document.getElementById("inpPeople");
    let dripPercentage = .15;
    inpPeople.focus();

    splitter(dripPercentage);

}
let bt15 = document.getElementById("bt15");
bt15.addEventListener("click", clickbt15)




function clickbt25() {
    verify();
    let inpPeople = document.getElementById("inpPeople");
    let dripPercentage = .25;
    inpPeople.focus();

    splitter(dripPercentage);
}
let bt25 = document.getElementById("bt25");
bt25.addEventListener("click", clickbt25)




function clickbt50() {
    verify();
    let inpPeople = document.getElementById("inpPeople");
    let dripPercentage = .50;
    inpPeople.focus();

    splitter(dripPercentage);

}
let bt50 = document.getElementById("bt50");
bt50.addEventListener("click", clickbt50)



function btCustom() {
    let inCustom = document.getElementById("inCustom")

    let custom = Number(inCustom.value);
    let dripPercentage = custom / 100;

    splitter(dripPercentage);

}



let inCustom = document.getElementById("inCustom")
inCustom.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        let inpPeople = document.getElementById("inpPeople");
        inpPeople.focus();
        btCustom();
        verify();
    }
})


function paymentValues() {
    let inpPeople = document.getElementById("inpPeople");
    let inSpan1 = document.getElementById("span1")
    let inSpan2 = document.getElementById("span2")

    let numberPeople = Number(inpPeople.value);

    let tripAmount =  Number( numberPeople);

    let total = tripAmount * numberPeople;

    alert(splitter())
    inSpan1.textContent = "$ " + tripAmount.toFixed(2);
    inSpan2.textContent = "$ " + total.toFixed(2);
}


let inpPeople = document.getElementById("inpPeople");
inpPeople.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        paymentValues()
        verify();
    }
})














/*  let bt5 = document.getElementById("bt5");
    let bt10 = document.getElementById("bt10");
    let bt15 = document.getElementById("bt10");
    let bt25 = document.getElementById("bt10");
    let bt50 = document.getElementById("bt10");
    let btCustom = document.getElementById("btCustom");
 */