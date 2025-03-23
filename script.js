document.addEventListener("DOMContentLoaded", function() {
    const planetInfo = [
        { name: "Mercúrio", description: "O planeta mais próximo do Sol." },
        { name: "Vênus", description: "Conhecido como o planeta irmão da Terra." },
        { name: "Terra", description: "O único planeta conhecido que abriga vida." },
        { name: "Marte", description: "Conhecido como o planeta vermelho." },
        { name: "Júpiter", description: "O maior planeta do sistema solar." },
        { name: "Saturno", description: "Famoso por seus anéis." },
        { name: "Urano", description: "Um gigante gasoso com um tom azul." },
        { name: "Netuno", description: "O planeta mais distante do Sol." }
    ];

    const galaxyInfo = [
        { name: "Via Láctea", description: "A galáxia que contém o sistema solar." },
        { name: "Andrômeda", description: "A galáxia mais próxima da Via Láctea." },
        { name: "Galáxia do Sombrero", description: "Uma galáxia espiral famosa." }
    ];

    const starInfo = [
        { name: "Sol", description: "A estrela central do nosso sistema solar." },
        { name: "Sirius", description: "A estrela mais brilhante no céu noturno." },
        { name: "Betelgeuse", description: "Uma supergigante vermelha na constelação de Órion." }
    ];

    function displayInfo(infoArray, elementId) {
        const container = document.getElementById(elementId);
        container.innerHTML = ""; // Limpa o conteúdo anterior
        infoArray.forEach(item => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${item.name}</strong>: ${item.description}`;
            container.appendChild(div);
        });
    }

    // Chama as funções para exibir as informações
    displayInfo(planetInfo, "planet-info");
    displayInfo(galaxyInfo, "galaxy-info");
    displayInfo(starInfo, "star-info");
});