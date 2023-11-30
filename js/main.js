function getLoginToken()
{
    const dataToSend = {
        phone: 'string',
        password: 'string'
    };
    
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    };

    fetch('http://23.20.239.207:5000/api/auth/login', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao fazer requisição: ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          return JSON.stringify(data);
          // Aqui você pode manipular a resposta recebida após a requisição POST ser concluída
        })
        .catch(error => {
          console.error('Erro:', error);
        });
}

alert(getLoginToken());