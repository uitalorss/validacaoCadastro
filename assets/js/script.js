let verSenha = document.querySelector("#verSenha")
let verConfirmaSenha = document.querySelector("#verConfirmaSenha")

verSenha.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');
  if(inputSenha.getAttribute('type') === 'password'){
    inputSenha.setAttribute('type', 'text')
  }else{
    inputSenha.setAttribute('type', 'password')
  }
})

verConfirmaSenha.addEventListener('click', () => {
  let inputSenha = document.querySelector('#confirma-senha');
  if(inputSenha.getAttribute('type') === 'password'){
    inputSenha.setAttribute('type', 'text')
  }else{
    inputSenha.setAttribute('type', 'password')
  }
})