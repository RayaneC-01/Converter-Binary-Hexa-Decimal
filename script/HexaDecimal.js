let hexaInput2 = document.getElementById("hexaInput");
let decIn = document.getElementById("decIn");
let errorMsg2 = document.getElementById("error-msg2");

hexaInput2.addEventListener("input", () => {
  let hexValue2 = hexaInput2.value;

  if (isValidHexadecimal(hexValue2)) {
    let decimalValue = parseInt(hexValue2, 16);
    decIn.value = decimalValue;
  } else {
    decIn.value = "";
  }
});

function isValidHexadecimal(hexNumber) {
  var validCharacters = /^[0-9A-Fa-f]+$/;

  if (validCharacters.test(hexNumber)) {
    console.log("La chaîne hexadécimale est valide.");
    return true;
  } else {
    console.log("La chaîne hexadécimale est invalide.");
    return false;
  }
}
