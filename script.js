const button = document.querySelector(".calculate")

button.addEventListener("click", function () {
    const weight = Number(document.querySelector(".userWheight").value);
    const height = Number(document.querySelector(".userHeight").value) / 100;

    const imc = weight / (height * height);

    const result = document.querySelector(".resultImc");

    result.innerText = `Seu IMC é: ${imc.toFixed(2)}`;
    console.log(result)

    let classification;

    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc < 25) {
        classification = "Peso normal";
    } else if (imc < 30) {
        classification = "Sobrepeso";
    } else {
        classification = "Obesidade"
    }

    result.innerText = `IMC: ${imc.toFixed(2)} - ${classification}`;

    if (!weight || !height) {
        result.innerHTML = "[ERRO]Preencha todos os campos!";
        window.alert("[ERRO]Preencha todos os campos!")
        return;
    }

})

