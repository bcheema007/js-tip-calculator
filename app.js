const h1 = document.createElement('h1'); //output the tip amount
document.body.appendChild(h1);

const input = document.createElement('input');
input.setAttribute('type', 'number');
document.body.appendChild(input);

const btn = document.createElement('button');
btn.textContent = "Tip";
document.body.appendChild(btn);

btn.addEventListener('click', getTipAmount);

function getTipAmount() {
    let cost = (input.value * 0.15).toFixed(2); //round to two decimal places
    h1.innerHTML = `You should tip $${cost} on $${input.value}`;
    input.value = "";
}





