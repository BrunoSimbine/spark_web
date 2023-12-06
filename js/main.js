
function registerToken()
{
      
      
      
      var name = document.getElementById('inputName').value;
      var account = document.getElementById('inputAccount').value;
      var type = document.getElementById('inputBank').value;
      
      var authToken = 'bearer ' + localStorage.getItem('token');
      
      alert("ola");
      /*
      alert(237);
      const url = 'http://23.20.239.207:5000/api/Token/create';
      const headers = {
        'Accept': 'text/plain',
        'Content-Type': 'application/json',
        'Authorization': authToken
      };

      const data = {
        name: name,
        type: type,
        account: account
      };
      
      await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.text(); // ou response.json() se a resposta for JSON
      })
      .then(data => {
        alert(data); // Aqui você pode lidar com a resposta da requisição
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
      */
}

async function getTokens()
{
  var authToken = 'bearer ' + localStorage.getItem('token');
  
  var tokens = await fetch('http://23.20.239.207:5000/api/Token/get', {
  method: 'GET',
  headers: {
    'accept': 'text/plain',
    'Authorization': authToken
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json(); // Extrair a resposta como texto
  })
  .catch(error => {
    // Tratamento de erros
    console.error('Ocorreu um erro:', error);
  });

  return tokens;
}


async function preencherLista() {
  
      document.getElementById('spinner').classList.remove('d-none');
  
      const tokens = await getTokens();
      
      document.getElementById('spinner').classList.add('d-none');
      
      const lista = document.getElementById('tokenList');

      tokens.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-start');

        const divConteudo = document.createElement('div');
        divConteudo.classList.add('ms-2', 'me-auto');

        const divNome = document.createElement('div');
        divNome.classList.add('fw-bold');
        divNome.textContent = item.name;

        const account = document.createTextNode(item.account);

        divConteudo.appendChild(divNome);
        divConteudo.appendChild(account);

        listItem.appendChild(divConteudo);
        lista.appendChild(listItem);
      });
}

window.onload = preencherLista;
