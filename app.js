const h1 = document.createElement('h1'); //output the tip amount
document.body.appendChild(h1);

const percentInput = document.createElement('input');
percentInput.setAttribute('type', 'number');
percentInput.setAttribute('placeholder', 'Enter tip percentage');
document.body.appendChild(percentInput);

const input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('placeholder', 'Enter amount');
input.id = "amount";
document.body.appendChild(input);

const btn = document.createElement('button');
btn.textContent = "Tip";
document.body.appendChild(btn);

btn.addEventListener('click', getTipAmount);

function getTipAmount() {
    let cost = (input.value * (percentInput.value / 100)).toFixed(2); //round to two decimal places
    h1.innerHTML = `You should tip $${cost} on $${input.value}`;
    input.value = "";
    percentInput.value = "";
}





