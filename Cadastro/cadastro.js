let nome = document.getElementById("nome");
let labelNome = document.getElementById("labelnome")
let validNome = false

let email = document.getElementById("email");
let labelEmail = document.getElementById("labelemail")
let validEmail = false

let senha = document.getElementById("pw");
let labelSenha = document.getElementById("labelpw")
let validSenha = false

let confirmar_senha = document.getElementById("conf_pw");
let labelConf_senha = document.getElementById("labelconf_pw")
let validConf_senha = false

let msgError = document.getElementById("msgError")
let msgSucess = document.getElementById("msgSucess")

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = '<strong>Nome <br/> *insira no minimo 3 Caracteres</strong>'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    nome.setAttribute('style', 'border-color: green')
    labelNome.innerHTML = 'Nome'
    validNome = true
  }
})

email.addEventListener('keyup', () => {
  if(email.value.length <= 9) {
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = '<strong>Email <br/> *insira um email valido</strong>'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: green')
    email.setAttribute('style', 'border-color: green')
    labelEmail.innerHTML = 'Email'
    validEmail = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 7) {
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = '<strong>Senha <br/> *A senha deve conter no minimo 8 caracteres</strong>'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    senha.setAttribute('style', 'border-color: green')
    labelSenha.innerHTML = 'Senha'
    validSenha = true
  }
})

confirmar_senha.addEventListener('keyup', () => {
  if(senha.value != confirmar_senha.value) {
    labelConf_senha.setAttribute('style', 'color: red')
    labelConf_senha.innerHTML = '<strong>Confirmar Senha <br/> *As senhas não conferem</strong>'
    confirmar_senha.setAttribute('style', 'border-color: red')
    validConf_senha = false
  } else {
    labelConf_senha.setAttribute('style', 'color: green')
    confirmar_senha.setAttribute('style', 'border-color: green')
    labelConf_senha.innerHTML = 'Confirmar Senha'
    validConf_senha = true
  }
})

function cadastrar() {
  if(validNome && validEmail && validSenha && validConf_senha) {

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
      {
        nomeCad: nome.value,
        emailCad: email.value,
        senhaCad: senha.value
      }
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSucess.setAttribute('style', 'display: block')
    msgSucess.innerHTML = '<strong>Cadastrado com Sucesso! <br/> Por favor, Aguarde...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    window.open('../Login/index.html');
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de executar o cadastro!</strong>'
    msgSucess.setAttribute('style', 'display: none')
    msgSucess.innerHTML = ''
  }
}

senha.onchange = validatePassword;
confirmar_senha.onkeyup = validatePassword;