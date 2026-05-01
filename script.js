const button = document.querySelector(".calculate")

button.addEventListener("click", function() {
    const weight = Number(document.querySelector(".userWheight").value);
    const height = Number(document.querySelector(".userHeight").value) / 100;

    const imc = weight / (height * height);

    const result = document.querySelector(".resultImc");

    result.innerText = `Seu IMC é: ${imc.toFixed(2)}`;
    console.log(result)
})