# Desafio Front-end Web - Kinvo
Este projeto foi desenvolvido como parte de um teste técnico para a vaga de Desenvolvedor Front-end na Kinvo. O objetivo é demonstrar habilidades técnicas em desenvolvimento web, utilizando HTML, CSS e JavaScript (ES6), além de boas práticas de versionamento, estruturação de projetos e qualidade de código.

### Índice
### Introdução

* Funcionalidades

* Tecnologias Utilizadas

* Estrutura do Projeto

* Como Executar o Projeto

* Critérios de Avaliação

* Dificuldades e Aprendizados

* Conclusão

* Autor

* Licença

## Introdução

O desafio consiste em criar uma interface que exibe dados de renda fixa obtidos de uma API, permitindo a filtragem e ordenação dos produtos. Além disso, foram implementados gráficos para visualização de dados, seguindo um protótipo fornecido.

Este projeto foi desenvolvido para atender aos seguintes requisitos:

Filtragem de Produtos: Permitir que o usuário filtre os produtos na seção "Minhas Rendas Fixas" com base em um campo de busca.

Ordenação de Produtos: Permitir que o usuário ordene os produtos por nome ou rentabilidade.

Integração com API: Exibir dados reais obtidos da API fornecida.

Gráficos (Opcional): Implementar gráficos para visualização de dados.

Paginação: Implementar paginação para exibir 5 produtos por página.

## Funcionalidades

1. Filtragem de Produtos
O campo de busca permite filtrar os produtos pelo nome.

A filtragem é feita em tempo real, à medida que o usuário digita no campo de busca.

2. Ordenação de Produtos
O menu seletor permite ordenar os produtos por:

Nome: Ordem alfabética.

Rentabilidade: Maior rentabilidade primeiro.

3. Integração com API
Os dados são obtidos da API fornecida e exibidos na interface.

As informações exibidas incluem:

Saldo bruto.

Valor aplicado.

Resultado.

Rentabilidade.

Lista de produtos com nome, classe, rentabilidade e data de vencimento.

4. Gráficos
Foram implementados três gráficos utilizando a biblioteca Chart.js:

Divisão de Carteira por Tipos: Gráfico de rosca (doughnut) que mostra a distribuição da carteira por tipos (Tesouro, CDB, LCI).

Divisão de Carteira por Título: Gráfico de rosca (doughnut) que mostra a distribuição da carteira por títulos (Título A, Título B, Título C).

Rentabilidade dos Títulos: Gráfico de linha (line) que mostra a rentabilidade ao longo do tempo.

5. Paginação
A lista de produtos é paginada, exibindo 5 produtos por página.

A paginação inclui botões estilizados com CSS para navegação entre as páginas.

Tecnologias Utilizadas
HTML: Estruturação da página.

CSS: Estilização da interface, incluindo responsividade e estilos para a paginação.

JavaScript (ES6): Lógica para integração com a API, filtragem, ordenação, paginação e renderização dos gráficos.

Chart.js: Biblioteca utilizada para renderizar os gráficos.

Git: Versionamento do código.

# Estrutura do Projeto

## O projeto está organizado da seguinte forma:



│
├── index.html          # Página principal
├── style.css           # Estilos da aplicação
├── script.js           # Lógica principal (API, filtros, ordenação, paginação)
├── chart.js            # Configuração dos gráficos
└── README.md           # Documentação do projeto
Como Executar o Projeto
Passo a Passo
Clone o repositório:

bash
Copy
git clone https://github.com/seu-usuario/kinvo-frontend-challenge.git
cd kinvo-frontend-challenge
Abra o projeto:

Abra o arquivo index.html em um navegador moderno (Chrome, Firefox, Edge, etc.).

Teste as funcionalidades:

Utilize o campo de busca para filtrar os produtos.

Altere a ordenação dos produtos utilizando o menu seletor.

Navegue entre as páginas utilizando os botões de paginação.

Visualize os gráficos na seção correspondente.

Critérios de Avaliação
O projeto foi desenvolvido com base nos critérios de avaliação propostos pela Kinvo:

1. Versionamento
O projeto foi versionado utilizando Git, com commits descritivos e organizados.

2. Projeto e Estrutura
A estrutura do projeto é clara e organizada, seguindo boas práticas de desenvolvimento.

O código está modularizado, com separação de responsabilidades (HTML, CSS, JavaScript).

3. Qualidade de Código
O código JavaScript segue as boas práticas do ES6.

O CSS está organizado e utiliza classes bem definidas.

O HTML é semântico e acessível.

Dificuldades e Aprendizados
Dificuldades
Integração da API com a interface, garantindo que os dados fossem exibidos corretamente.

Implementação da paginação sem perder as funcionalidades de filtragem e ordenação.

Aprendizados
Utilização da biblioteca Chart.js para criação de gráficos.

Melhoria na organização do código JavaScript, especialmente na manipulação de eventos e renderização dinâmica.

# Conclusão

Este projeto foi uma excelente oportunidade para praticar e demonstrar habilidades em desenvolvimento front-end, especialmente na integração de APIs, manipulação de DOM e criação de interfaces interativas. A implementação dos requisitos propostos no desafio técnico da Kinvo permitiu consolidar conhecimentos e explorar novas ferramentas, como a biblioteca Chart.js.

Agradeço pela oportunidade de participar deste desafio e espero que o resultado atenda às expectativas!

# Autor
Elizeu lima
Linkedin: https://www.linkedin.com/in/elizeu-programador-frontend/
 
 ![pagina inicial](/assets/teste%20tecnico%20pagina%20inicial.png)
 ![filtros e api carregada](/assets/segunda%20seção.png)
 ![graficos](/assets/terceira%20seção.png)

# Licença
Este projeto é open-source e está disponível sob a licença MIT. Sinta-se à vontade para utilizá-lo como referência ou para fins de estudo.
