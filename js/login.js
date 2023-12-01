async function getLogin()
{
    const telefone = document.getElementById('inputPhone').value;
    const senha = document.getElementById('inputPassword').value;
    
    var token = await fetch('http://23.20.239.207:5000/api/Auth/login', {
    method: 'POST',
    headers: {
      'accept': '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "phone": telefone,
      "password": senha
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json(); // Extrair a resposta como JSON
    }).then(data => {
        // Armazenando dados
        localStorage.setItem('token', token.token);
        
    })
}