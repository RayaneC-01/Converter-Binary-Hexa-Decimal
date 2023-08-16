//Initial References
const decimalInput = document.getElementById("decimalInput");
const binaireInput = document.getElementById("binaireInput");
const errorMsg = document.getElementById("error-msg");

  // Ajout de l'élément <br> à un élément existant
  let element = document.getElementById("lesBR");
    let nbreBR = 2;
  for (let i = 0; i < nbreBR; i++) {
    let br = document.createElement("br");
    element.appendChild(br);
  }

decimalInput.addEventListener("input", () => {
    //récupère la valeur saisie et convertit en un entier avec la méthode parseInt()
    //La valeur convertit est stockée dans la var decValue
  let decValue = parseInt(decimalInput.value); 
  
  binaireInput.value = decValue.toString(2); //Convertit la valeure décimale en Binaire.
});

binaireInput.addEventListener("input", () => {
  let binValue = binaireInput.value;

  //If the binary number is valid convert it to decimal
  if (verifierBinaire(binValue)) {
    decimalInput.value = parseInt(binValue, 2);
    errorMsg.textContent = "";
    console.log("La valeur binaire est valide !");
  }
  //Else display an error message
  else {
    errorMsg.textContent = "0 ou 1 est pris en compte uniquement !";
    console.log("La valeur binaire n'est pas valide !");

  }

  //Function to check if the binary number is valid i.e it does not contain any number other than 0 and 1
 function verifierBinaire(chaine) {
  if (chaine.length === 0) {
    return false;
  }

  for (let i = 0; i < chaine.length; i++) {
    const caractere = chaine[i];

    if (caractere !== '0' && caractere !== '1') {
      return false;
    }
  }

  return true;
}
  
});