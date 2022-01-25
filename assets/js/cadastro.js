let verSenha = document.querySelector("#verSenha");
let verConfirmaSenha = document.querySelector("#verConfirmaSenha");

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false

let user = document.querySelector("#user");
let labelUser = document.querySelector("#labelUser")
let validUser = false


let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false

let confirmaSenha = document.querySelector("#confirma-senha");
let labelConfirmaSenha = document.querySelector("#labelConfirmaSenha");
let validConfirmaSenha = false;

let msgError = document.querySelector(".msgError");
let msgSucess = document.querySelector(".msgSuccess");


//Tratamento para olhar valores do campo senha ao clicar no botão
verSenha.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');
  if(inputSenha.getAttribute('type') === 'password'){
    inputSenha.setAttribute('type', 'text')
  }else{
    inputSenha.setAttribute('type', 'password')
  }
})

//Tratamento para olhar valores do campo confirma senha ao clicar no botão
verConfirmaSenha.addEventListener('click', () => {
  let inputSenha = document.querySelector('#confirma-senha');
  if(inputSenha.getAttribute('type') === 'password'){
    inputSenha.setAttribute('type', 'text')
  }else{
    inputSenha.setAttribute('type', 'password')
  }
})


nome.addEventListener('keyup', () => {
  if(nome.value.length <= 5){
    labelNome.setAttribute('style', 'color: red');
    nome.setAttribute('style', 'border-color: red');
    labelNome.innerHTML = '<strong> Insira no mínimo 5 caracteres </strong>'
    validNome = false;
  }else{
    labelNome.setAttribute('style', 'color: green');
    nome.setAttribute('style', 'border-color: green');
    labelNome.innerHTML = 'Nome';
    validNome = true;
  }
})

user.addEventListener('keyup', () => {
  if(user.value.length <= 5){
    labelUser.setAttribute('style', 'color: red');
    user.setAttribute('style', 'border-color: red');
    labelUser.innerHTML = '<strong> Insira no mínimo 5 caracteres </strong>';
    validUser = false;
  }else{
    labelUser.setAttribute('style', 'color: green');
    user.setAttribute('style', 'border-color: green');
    labelUser.innerHTML = 'Usuário';
    validUser = true;
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length < 6){
    labelSenha.setAttribute('style', 'color: red');
    senha.setAttribute('style', 'border-color: red');
    labelSenha.innerHTML = '<strong> A senha deve ter no mínimo 6 caracteres </strong>'
    validSenha = false;
  }else{
    labelSenha.setAttribute('style', 'color: green');
    senha.setAttribute('style', 'border-color: green');
    labelSenha.innerHTML = 'Senha';
    validSenha = true;
  }
})

confirmaSenha.addEventListener('keyup', () => {
  if(confirmaSenha.value !== senha.value){
    labelConfirmaSenha.setAttribute('style', 'color: red');
    confirmaSenha.setAttribute('style', 'border-color: red');
    labelConfirmaSenha.innerHTML = '<strong> As senhas não conferem. </strong>';
    validConfirmaSenha = false;
  }else{
    labelConfirmaSenha.setAttribute('style', 'color: green');
    confirmaSenha.setAttribute('style', 'border-color: green');
    labelConfirmaSenha.innerHTML = 'Confirma Senha';
    validConfirmaSenha = true;
  }
})

const cadastrar = () => {
  if(validNome && validUser && validSenha && validConfirmaSenha){
    //atribuindo a uma variavel local os valores de localStorage
    let lista_user = JSON.parse(localStorage.getItem('lista_user') || '[]');
    //salvando os valores digitados no formulario como um objeto na lista de usuarios
    lista_user.push({
      nome: nome.value,
      user: user.value,
      senha: senha.value
    });
    //salvando a nova lista de usuarios no localstorage
    localStorage.setItem('lista_user', JSON.stringify(lista_user));
    msgSucess.setAttribute('style', 'display: block');
    msgError.setAttribute('style', 'display: none');
    msgSucess.innerHTML = '<p>Cadastrado com sucesso!!</p>' + '<p>Você será redirecionado...</p>';

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 3000)

  }else{
    msgError.setAttribute('style', 'display: block');
    msgSucess.setAttribute('style', 'display: none');
    msgError.innerHTML = '<p>Preencha todos os campos corretamente.</p>'
  }
}