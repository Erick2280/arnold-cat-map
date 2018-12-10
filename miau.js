/*
 * Implementação em JS do Mapa do Gato de Arnold
 * Erick Almeida, 2018
 * 
 * Requisito extra para a disciplina de Álgebra Linear para Computação, do
 * curso de Ciência da Computação da Universidade Federal de Pernambuco
 */

// todo: silvio spinner animate svgize

function startDashboard() {
    document.getElementById("greetings").style.display = "none";
    document.getElementById("top-navbar").style.display = "block";
    document.getElementById("dashboard").style.display = "block";
}

function greet() {
    document.getElementById("greetings").style.display = "block";
    document.getElementById("top-navbar").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
}


/* "Quando o cachorro encontra o gato 
 *  Um dos dois desaperece 
 *  Isso não acontece quando encontro minha gatinha
 *  Ela é tão bonitinha e 
 *  Eu dou muito carinho
 *  Ela é minha gatinha e eu sou seu cachorrinho
 *  AU AU AU, AU AU AU, MIAU, MIAU, MIAU AU"
 */