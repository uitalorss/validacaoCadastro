let userLogado = JSON.parse(localStorage.getItem('userLogado'));

if(localStorage.getItem('token') === null){
  alert("Você precisa estar logado!!");
  window.location.href = 'index.html';

}

const sair = () =>{
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado');
  window.location.href = 'index.html';
}

 let boasVindas = document.querySelector('.boas-vindas');
 boasVindas.innerHTML = `<p>Bem vindo, ${userLogado.nome}!!</p>`