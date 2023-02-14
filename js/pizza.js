const toppings = [
  "Sausage",
  "Pepperoni",
  "Ham",
  "Green Peppers",
  "Mushrooms",
  "Onions",
  "Pineapple",
];

const crusts = ["Regular", "Deep Dish", "Thin"];

const topping = document.getElementById("toppings");
toppings.forEach((t) => {
  topping.innerHTML += `
    <div class="input-group mb-3">
      <div class="input-group-text">
        <input id="${t}" class="form-check-input p-0" name="toppings" type="checkbox" />
      </div>
      <p class="form-control m-0">${t}</p>
    </div>
  `;
});

const crust = document.getElementById("crust");
crusts.forEach((c) => {
  crust.innerHTML += `
    <div class="input-group mb-3">
      <div class="input-group-text">
        <input id="${c}" class="form-check-input p-0" name="crusts" type="radio" />
      </div>
      <p class="form-control m-0">${c}</p>
    </div>
  `;
});
document.getElementById("Regular").checked = true;

const pizza = document.getElementById("pizza");
const prep_pizza = document.getElementById("prep_pizza");
prep_pizza.addEventListener("click", () => {
  pizza.innerHTML = "";

  const checkedToppings = Array.from(
    document.querySelectorAll('input[name="toppings"]:checked')
  ).map((t) => t.parentNode.nextSibling.nextSibling.innerText);

  const selectedCrust = Array.from(
    document.querySelectorAll('input[name="crusts"]:checked')
  ).map((c) => c.parentNode.nextSibling.nextSibling.innerText);

  if (checkedToppings.length > 0) {
    crearNodoTexto("This pizza will have:");

    checkedToppings.forEach((t) => {
      crearNodoTexto(t);
    });

    crearNodoTexto(`${selectedCrust[0]} Crust`);

  } else {
    crearNodoTexto("You must select toppings for the pizza");
  }
});

const crearNodoTexto = (texto) => {
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(texto));
  pizza.appendChild(p);
};
