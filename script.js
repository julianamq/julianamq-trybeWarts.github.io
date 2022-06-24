function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
function clickCheckbox() {
  const checkBox = document.getElementById('agreement');
  document.getElementById('submit-btn').disabled = !checkBox.checked;
}
function contador() {
  const contador = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  textarea.oninput = function ('keyup') {
   contador.innerHTML = (500 - this.value.length);
  }
}
login();
clickCheckbox();
contador();
