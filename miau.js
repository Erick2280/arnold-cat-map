/*
 * Implementação em JS do Mapa do Gato de Arnold
 * Erick Almeida, 2018
 * 
 * Requisito extra para a disciplina de Álgebra Linear para Computação, do
 * curso de Ciência da Computação da Universidade Federal de Pernambuco
 */

// todo: silvio spinner animate svgize

function startDashboard() {
    document.getElementById("greetings").classList.add("hidden");
    document.getElementById("top-navbar").classList.remove("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

function greet() {
    document.getElementById("greetings").classList.remove("hidden");
    document.getElementById("top-navbar").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
}

var canvas = document.getElementById('arnold-canvas');

// File Upload

function loadImage(){
    function initialize() {

      var fileSelect    = document.getElementById('file-upload'),
          fileDrag      = document.getElementById('file-drag');
  
      fileSelect.addEventListener('change', fileSelectHandler, false);
  
      // Verifica se o XHR2 está disponível
      var xhr = new XMLHttpRequest();
      if (xhr.upload) {
        // Espera pelo arraste do arquivo
        fileDrag.addEventListener('dragover', fileDragHover, false);
        fileDrag.addEventListener('dragleave', fileDragHover, false);
        fileDrag.addEventListener('drop', fileSelectHandler, false);
      }
    }
  
    function fileDragHover(e) {
      var fileDrag = document.getElementById('file-drag');
  
      e.stopPropagation();
      e.preventDefault();
  
      fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
    }
  
    function fileSelectHandler(e) {
      // Salva numa variável o objeto FileList
      var files = e.target.files || e.dataTransfer.files;
  
      // Cancela o evento e animação de hover
      fileDragHover(e);
  
      // Processa o objeto File
      for (var i = 0, f; f = files[i]; i++) {
        parseFile(f);
        uploadFile(f);
      }
    }
  
    // Saída
    function output(msg) {
      // Resposta
      var m = document.getElementById('messages');
      m.innerHTML = msg;
    }
  
    function parseFile(file) {
  
        output(
        'Altere a imagem clicando aqui ou arrastando outra imagem.'
      );
      
      // var fileType = file.type;
      var imageName = file.name;
  
      var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
      if (isGood) {
        document.getElementById('start').classList.add("hidden");
        document.getElementById('response').classList.remove("hidden");
        document.getElementById('notimage').classList.add("hidden");
        // Carrega a visualização da imagem
        document.getElementById('file-image').classList.remove("hidden");
        document.getElementById('file-image').src = URL.createObjectURL(file);
        document.getElementById("panel").classList.remove("hidden");
        loadCanvas();
      }
      else {
        document.getElementById('file-image').classList.add("hidden");
        document.getElementById('notimage').classList.remove("hidden");
        document.getElementById('start').classList.remove("hidden");
        document.getElementById('response').classList.add("hidden");
        document.getElementById("file-upload-form").reset();
        document.getElementById("panel").classList.add("hidden");
      }
    }
  
    // Check for the various File API support.
    if (window.File && window.FileList && window.FileReader) {
      initialize();
    } else {
      document.getElementById('file-drag').style.display = 'none';
    }
  }
  loadImage();




/* "Quando o cachorro encontra o gato 
 *  Um dos dois desaperece 
 *  Isso não acontece quando encontro minha gatinha
 *  Ela é tão bonitinha e 
 *  Eu dou muito carinho
 *  Ela é minha gatinha e eu sou seu cachorrinho
 *  AU AU AU, AU AU AU, MIAU, MIAU, MIAU AU"
 */