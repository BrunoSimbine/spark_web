fetch('https://bible-api.com/john%203:16')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao fazer requisição: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      alert('Resposta da requisição: ' + JSON.stringify(data));
      
      // Aqui você pode manipular a resposta recebida após a requisição POST ser concluída
    })
    .catch(error => {
      console.error('Erro:', error);
    });