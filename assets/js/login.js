let verSenha = document.querySelector("#verSenha");

verSenha.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');
  if(inputSenha.getAttribute('type') === 'password'){
    inputSenha.setAttribute('type', 'text')
  }else{
    inputSenha.setAttribute('type', 'password')
  }
})

const entrar = () =>{
  let user = document.querySelector('#user');
  let labelUser = document.querySelector('#labelUser');

  let senha = document.querySelector('#senha');
  let labelSenha = document.querySelector("#labelSenha");

  let msgError = document.querySelector(".msgError");


  let lista_user = [];
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }

  lista_user = JSON.parse(localStorage.getItem('lista_user'))
  
  //Verifica se o usuário e senha digitados existem no localStorage
  lista_user.forEach((item) => {
    if(user.value === item.user && senha.value === item.senha){
      userValid = {
        nome: item.nome,
        user: item.user,
        senha: senha.value,
      }
    }
  })

  //tratamento para login
  if(user.value === userValid.user && senha.value === userValid.senha){
    window.location.href = 'dashboard.html';
    msgError.setAttribute('style', 'display: none');
    //Atribuindo token de validação
    let token = Math.random().toString(16).substring(2);
    localStorage.setItem('token', token);
    //Passando informações de quem está logando para o localStorage
    localStorage.setItem('userLogado', JSON.stringify(userValid));
  }else{
    labelUser.setAttribute('style', 'color: red');
    user.setAttribute('style', 'border-color: red');
    labelSenha.setAttribute('style', 'color: red');
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<p>Usuário e/ou senha incorretos.</p>'
    user.focus();
  }
}
