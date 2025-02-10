document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";
    const searchInput = document.getElementById("search");
    const sortSelect = document.getElementById("sort");
    const productList = document.getElementById("investment-list");

    const pagination = document.getElementById("pagination");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");

    let products = [];
    let currentPage = 1;
    const itemsPerPage = 5;

    async function fetchProducts() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Erro na requisição");

            const jsonData = await response.json();
            if (jsonData.success && jsonData.data) {
                // Atualiza os valores do resumo formatados corretamente
                const formatCurrency = value => new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(value);

                document.getElementById("saldoBruto").textContent = formatCurrency(jsonData.data.snapshotByPortfolio.equity);
                document.getElementById("valorAplicado").textContent = formatCurrency(jsonData.data.snapshotByPortfolio.valueApplied);
                document.getElementById("resultado").textContent = formatCurrency(jsonData.data.snapshotByPortfolio.equityProfit);
                document.getElementById("rentabilidade").textContent = `${jsonData.data.snapshotByPortfolio.percentageProfit.toFixed(2)}%`;

                // Obtendo os produtos
                products = jsonData.data.snapshotByProduct;
                updateView();
            } else {
                console.error("Formato inesperado dos dados da API:", jsonData);
            }
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    function updateView() {
        renderProducts();
        renderPagination();
    }

    function getFilteredProducts() {
        const searchText = searchInput.value.toLowerCase();
        let filteredProducts = products.filter(product => 
            product.fixedIncome.name.toLowerCase().includes(searchText)
        );

        // Ordenação
        if (sortSelect.value === "rate") {
            filteredProducts.sort((a, b) => b.position.profitability - a.position.profitability);
        } else {
            filteredProducts.sort((a, b) => a.fixedIncome.name.localeCompare(b.fixedIncome.name));
        }

        return filteredProducts;
    }

    function renderProducts() {
        if (!Array.isArray(products)) return;
    
        const searchText = searchInput.value.toLowerCase();
        let filteredProducts = products.filter(product => 
            product.fixedIncome.name.toLowerCase().includes(searchText)
        );
    
        if (sortSelect.value === "rate") {
            filteredProducts.sort((a, b) => b.position.profitability - a.position.profitability);
        } else {
            filteredProducts.sort((a, b) => a.fixedIncome.name.localeCompare(b.fixedIncome.name));
        }
    
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
        productList.innerHTML = "";
        paginatedProducts.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("investment-card"); // Classe do CSS para estilizar
    
            div.innerHTML = `
                <div class="title">
                    <p><strong>${product.fixedIncome.name}</strong></p>
                    <p class="category">${product.fixedIncome.bondType}</p>
                </div>
                <div class="details">
                    <p>Rentabilidade: <span class="highlight">${product.position.profitability.toFixed(2)}%</span></p>
                    <p>Valor Investido: <span class="blue">R$ ${product.position.equity.toLocaleString()}</span></p>
                </div>
                <div class="expiration">
                    <p>Vencimento: <span class="green">${product.due.date}</span></p>
                </div>
            `;
            
            productList.appendChild(div);
        });
    }
    

    function renderPagination() {
        const filteredProducts = getFilteredProducts();
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        
        pagination.innerHTML = "";
        
        const createPageButton = (label, isDisabled, onClick) => {
            const button = document.createElement("button");
            button.classList.add("page-btn");
            if (isDisabled) button.setAttribute("disabled", "true");
            button.innerHTML = label;
            button.addEventListener("click", onClick);
            pagination.appendChild(button);
        };

        createPageButton('<i class="fas fa-chevron-left"></i>', currentPage === 1, () => {
            if (currentPage > 1) {
                currentPage--;
                updateView();
            }
        });

        for (let i = 1; i <= totalPages; i++) {
            createPageButton(i, i === currentPage, () => {
                currentPage = i;
                updateView();
            });
        }

        createPageButton('<i class="fas fa-chevron-right"></i>', currentPage === totalPages, () => {
            if (currentPage < totalPages) {
                currentPage++;
                updateView();
            }
        });
    }

    // Eventos
    searchInput.addEventListener("input", () => {
        currentPage = 1;
        updateView();
    });

    sortSelect.addEventListener("change", () => {
        currentPage = 1;
        updateView();
    });

    // Inicializa os dados
    fetchProducts();
});
