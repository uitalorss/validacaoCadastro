let userLogado = JSON.parse(localStorage.getItem('userLogado'));

//Tratamento para tentativa de acesso sem login
if(localStorage.getItem('token') === null){
  alert("Você precisa estar logado!!");
  window.location.href = 'index.html';

}

//Limpando do localStorage os itens temporários ao clicar no botão Sair. 
const sair = () =>{
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado');
  window.location.href = 'index.html';
}

 let boasVindas = document.querySelector('.boas-vindas');
 boasVindas.innerHTML = `<p>Bem vindo, ${userLogado.nome}!! Em breve você poderá acessar nosso dashboard para aproveitar ao máximo nossos serviços.</p>`