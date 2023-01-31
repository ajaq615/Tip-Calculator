let billTotal = document.getElementById('billTotalInput');
let tip = document.getElementById('tipInput');
let numberPeople = document.getElementById('numberOfPeople');
let personTotal = document.getElementById('perPersonTotal');

let numPeople = Number(numberPeople.innerText);
//console.log(Number(billTotal.value))

const calculateBill = () => {
  let bill = Number(billTotal.value);
  let tipPercent = Number(tip.value / 100);
  let tipTotal = bill * tipPercent;
  let totalBill = bill + tipTotal;
  let perPersonBill = totalBill / numPeople;
  personTotal.innerText = `$${perPersonBill.toFixed(2)}`;
};

const increasePeople = () => {
  numPeople += 1;
  //console.log(numPeople)
  numberPeople.innerText = numPeople;
  calculateBill();
};

const decreasePeople = () => {
  if (numPeople <= 1) {
    return;
  } else {
    numPeople -= 1;
    numberPeople.innerText = numPeople;
    calculateBill();
  }
};
