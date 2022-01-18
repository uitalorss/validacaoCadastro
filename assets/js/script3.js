if(localStorage.getItem('token') === null){
  alert("Você precisa estar logado!!");
  window.location.href = 'index.html';

}

const sair = () =>{
  localStorage.removeItem('token');
  window.location.href = 'index.html';
}
