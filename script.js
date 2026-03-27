document.getElementById("btnGenerar").addEventListener("click", function () {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let tablaHTML = `<div class="tabla"><h2>Tabla del ${i}</h2>`;

        for (let j = 1; j <= 10; j++) {
            tablaHTML += `<p>${i} x ${j} = ${i * j}</p>`;
        }

        tablaHTML += `</div>`;
        resultado.innerHTML += tablaHTML;
    }
});