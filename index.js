const btnEl = document.getElementById("calculate");

const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const totalSpan = document.getElementById('total')

function calculateTotal(){
    const billValue = billEl.value;
    const tipValue = tipEl.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText =  totalValue.toFixed(2); 
    console.log(billValue)
}

btnEl.addEventListener('click', calculateTotal)