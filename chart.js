document.addEventListener("DOMContentLoaded", () => {
    // Gráfico: Divisão de Carteira por Tipos
    const ctx1 = document.getElementById('carteiraTipos').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ["Tesouro", "CDB", "LCI"],
            datasets: [{
                data: [50, 30, 20], 
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"]
            }]
        }
    });

    // Gráfico: Divisão de Carteira por Título
    const ctx2 = document.getElementById('carteiraTitulos').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ["Título A", "Título B", "Título C"],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ["#4caf50", "#ff9800", "#03a9f4"]
            }]
        }
    });

    // Gráfico: Rentabilidade dos Títulos
    const ctx3 = document.getElementById('rentabilidadeChart').getContext('2d');
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
            datasets: [{
                label: "Rentabilidade (%)",
                data: [2.5, 3.8, 1.2, 4.0, 2.9, 5.5],
                borderColor: "#007bff",
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                fill: true
            }]
        }
    });
});
