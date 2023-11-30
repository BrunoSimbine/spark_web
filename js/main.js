document.addEventListener('DOMContentLoaded', function() {
  // Coloque aqui o código que deseja executar quando a página terminar de carregar
  alert('A página foi carregada!');
  // Ou qualquer outra lógica que você queira realizar ao carregar a página


// Dados a serem enviados no corpo da requisição
const dataToSend = {
  phone: 'string',
  password: 'string'
};

// Configurações da requisição POST
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // Especifica o tipo de conteúdo enviado (JSON neste caso)
  },
  body: JSON.stringify(dataToSend) // Converte os dados para formato JSON
};

// Fazendo a requisição POST usando fetch
fetch('http://23.20.239.207:5000/api/auth/login', requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao fazer requisição: ' + response.status);
    }
    alert('Ola mundi 1');
    return response.json();
  })
  .then(data => {
    alert('Ola mundi');
    console.log(data); // Aqui você pode manipular a resposta recebida
  })
  .catch(error => {
    console.error('Erro:', error);
});

});
