const decimalInput = document.getElementById("decimalInput");
const hexInput = document.getElementById("hexInput");
const binaryInput = document.getElementById("binaryInput");


decimalInput.addEventListener("input", () => {
  const decimalValue = parseInt(decimalInput.value);
  hexInput.value = decimalValue.toString(16).toUpperCase();
  binaryInput.value = decimalValue.toString(2);
});

hexInput.addEventListener("input", () => {
  const hexValue = hexInput.value;
  const decimalValue = parseInt(hexValue, 16);
  decimalInput.value = isNaN(decimalValue) ? "" : decimalValue;
  binaryInput.value = decimalValue.toString(2);
});

binaryInput.addEventListener("input", () => {
  const binaryValue = binaryInput.value;
  const decimalValue = parseInt(binaryValue, 2);
  decimalInput.value = isNaN(decimalValue) ? "" : decimalValue;
  hexInput.value = decimalValue.toString(16).toUpperCase();
});

  /*fonction isNaN(decimalValue) vérifie si decimalValue n'est pas un nombre (NaN).
 Si decimalValue est NaN, alors valeur affectée sera "" (une chaîne vide), sinon la valeur affectée sera decimalValue.
Donc, si decimalValue est NaN, le champ d'entrée decimalInput sera vidé, sinon il sera rempli avec la valeur décimale calculée.*/

function supprimerChamps(){
  decimalInput.value = "";
  hexInput.value = "";
  binaryInput.value = "";
}