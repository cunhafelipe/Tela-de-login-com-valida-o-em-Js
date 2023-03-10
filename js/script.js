const form = document.querySelector('#form');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTexarea = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  //Verifica se o nome está vazio
  if (inputName.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Erro:',
      text: 'Por favor, digite seu nome!',
    });
    return;
  }

  //Verifica se o e-mail está preenchido e se ele é válido
  if (inputEmail.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Erro:',
      text: 'Por favor, digite seu email!',
    });
    return;
  } else if (!isEmailValid(inputEmail.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Erro:',
      text: 'Por favor, digite um email válido!',
    });
    return;
  }

  //Verifica se a senha está preenchida
  if (!validatePassword(inputPassword.value, 8)) {
    Swal.fire({
      icon: 'error',
      title: 'Erro:',
      text: 'A senha precisa de no mínimo 8 dígitos.',
    });
    return;
  }

  //Verifica se o select foi selecionado
  if (jobSelect.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Erro:',
      text: 'Por favor, preencha sua situação de trabalho.',
    });
    return;
  }

  //Verifica se a mensagem está preenchida
  if (messageTexarea.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Erro:',
      text: 'Por favor, preencha o campo "mensagem".',
    });
    return;
  }

  //Só envia o form caso todos os campos estiverem corretamente preenchidos
  form.submit();
});

//Função para validação do e-mail
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

//Função que válida a senha

function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    //senha válida
    return true;
  } else {
    //senha inválida
    return false;
  }
}

function get_data() {
  const form_data = document.querySelector('form').elements;
  for (const data of form_data) {
    console.log(data.value);
  }
}
