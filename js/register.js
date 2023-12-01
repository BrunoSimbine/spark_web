async function createUser()
{
    const nome = document.getElementById('inputName').value;
    const sobrenome = document.getElementById('inputSurname').value;
    const telefone = document.getElementById('inputPhone').value;
    const senha = document.getElementById('inputPassword').value;
    
    var result = await fetch('http://23.20.239.207:5000/api/Auth/register', {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "phone": telefone,
          "name": nome,
          "surname": sobrenome,
          "password": senha
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          return response.text(); // Extrair a resposta como texto
        })
    return result;
}

