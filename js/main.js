
function updateLoginToken(){
alert(2);
// Criar o objeto JSON com os campos 'phone' e 'password'
const dados = {
  "phone": "string",
  "password": "string"
};

// Configuração da requisição POST
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dados)
};

// Fazer a requisição para a URL
fetch('http://23.20.239.207:5000/api/Auth/login', requestOptions)
  .then(response => response.json())
  .then(data => {
    // Extrair o valor do campo 'token' da resposta JSON
    const _token = data.token;

    alert(1);
    // Imprimir o token no HTML (por exemplo, em um elemento com o ID 'token')
    // Armazenando dados
    localStorage.setItem('token', _token);
    getTokens();

  })
  .catch(error => console.error('Erro:', error));
}

function getLoginToken()
{
  // Recuperando dados
  let token = localStorage.getItem('token');
  return token;

}

function getTokens()
{
  var apiToken = getLoginToken();
  const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + apiToken
  }
};

// Fazer a requisição para a URL
fetch('http://23.20.239.207:5000/api/Token/get', requestOptions)
  .then(response => response.json())
  .then(data => {
    // Extrair o valor do campo 'token' da resposta JSON
    alert(data);

    // Imprimir o token no HTML (por exemplo, em um elemento com o ID 'token')
    // Armazenando dados

  })
  .catch(error => console.error('Erro:', error));
}

updateLoginToken();



