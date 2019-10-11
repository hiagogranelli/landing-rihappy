/* ======= ANIMACOES SCROLL ======= */
var target = Array.prototype.slice.call(document.querySelectorAll("[data-animation]"), 0);
var animationClass = 'animate';

if (window.innerWidth <= 576) {
  var animeScrollMobile = function animeScrollMobile() {
    var windowTop = window.pageYOffset + window.innerHeight * 3 / 5;
    target.forEach(function (element) {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      }
    });
  };

  animeScrollMobile();

  if (target.length) {
    window.addEventListener('scroll', animeScrollMobile);
  }
}

if (window.innerWidth >= 577) {
  var animeScrollDesktop = function animeScrollDesktop() {
    var windowTop = window.pageYOffset;
    target.forEach(function (element) {
      if (windowTop > element.offsetTop - window.innerHeight / 2.5) {
        element.classList.add(animationClass);
      }
    });
  };

  animeScrollDesktop();

  if (target.length) {
    window.addEventListener('scroll', animeScrollDesktop);
  }
}


/* ======= MENSAGEM RETORNO FORMULARIO ======= */
/* Funcao - Form Restaurante */
var inputFormRestaurante = document.querySelector('.input--restaurante');
var btnFormRestaurante = document.querySelector('.btn--restaurante');

function successRestaurante() {
  inputFormRestaurante.value = '';
  inputFormRestaurante.classList.add('success');
  inputFormRestaurante.placeholder = 'Mensagem Enviada Com Sucesso!';
  setTimeout(function () {
    inputFormRestaurante.classList.remove('success');
    inputFormRestaurante.placeholder = 'Insira Seu E-mail';
    btnFormRestaurante.innerText = 'ENVIAR OUTRO';
  }, 2000);
}

function failedRestaurante() {
  inputFormRestaurante.value = '';
  inputFormRestaurante.classList.add('failed');
  inputFormRestaurante.placeholder = 'Erro! Tente novamente...';
  setTimeout(function () {
    inputFormRestaurante.classList.remove('failed');
    inputFormRestaurante.placeholder = 'Insira Seu E-mail';
  }, 2000);
}


/* Funcao - Form Empresa */
var inputFormEmpresa = document.querySelector('.input--empresa');
var btnFormEmpresa = document.querySelector('.btn--empresa');

function successEmpresa() {
  inputFormEmpresa.value = '';
  inputFormEmpresa.classList.add('success');
  inputFormEmpresa.placeholder = 'Mensagem Enviada Com Sucesso!';
  setTimeout(function () {
    inputFormEmpresa.classList.remove('success');
    inputFormEmpresa.placeholder = 'Insira Seu E-mail';
    btnFormEmpresa.innerText = 'ENVIAR OUTRO';
  }, 2000);
}

function failedEmpresa(event) {
  inputFormEmpresa.value = '';
  inputFormEmpresa.classList.add('failed');
  inputFormEmpresa.placeholder = 'Erro! Tente novamente...';
  setTimeout(function () {
    inputFormEmpresa.classList.remove('failed');
    inputFormEmpresa.placeholder = 'Insira Seu E-mail';
  }, 2000);
}

btnFormRestaurante.addEventListener('click', successRestaurante); // Callback para ativar função
btnFormEmpresa.addEventListener('click', failedEmpresa); // Callback para ativar função
