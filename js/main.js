async function getLoginToken(){
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
    const token = data.token;

    // Imprimir o token no HTML (por exemplo, em um elemento com o ID 'token')
    return token;
  })
  .catch(error => console.error('Erro:', error));
}
var tok = await getLoginToken();
alert(tok);