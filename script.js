const button = document.querySelector(".calculate")

button.addEventListener("click", function () {
    const weight = Number(document.querySelector(".userWheight").value);
    const height = Number(document.querySelector(".userHeight").value) / 100;

    const imc = weight / (height * height);

    const result = document.querySelector(".resultImc");

   

    let classification;

    if (imc < 18.5) {
        classification = "Abaixo do peso";
        result.style.backgroundColor = "#3498db"
    } else if (imc < 25) {
        classification = "Peso normal";
        result.style.backgroundColor = "#2ecc71"
    } else if (imc < 30) {
        classification = "Sobrepeso";
        result.style.backgroundColor = "#f1c40f"
    } else {
        classification = "Obesidade"
        result.style.backgroundColor = "#e74c3c"
    }

    result.innerText = `IMC: ${imc.toFixed(2)} - ${classification}`;

    if (!weight || !height) {
        result.innerHTML = "[ERRO]Preencha todos os campos!";
        window.alert("[ERRO]Preencha todos os campos!")
        return;
    }

})

