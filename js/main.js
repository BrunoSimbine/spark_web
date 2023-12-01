
async function getTokens()
{
  var authToken = localStorage.getItem('token');
  alert(authToken);
  
  var tokens = await fetch('http://23.20.239.207:5000/api/Token/get', {
  method: 'GET',
  headers: {
    'accept': 'text/plain',
    'Authorization': 'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJ1c2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMDhkYmYwMjAtOTdiYy00NjhhLThhOTktMDVmZTk3NDczY2ZkIiwiZXhwIjoxNzAxNTE3MzkzfQ.sY5eOxiwn4JsmD20pkmOHwAT2V5tkfwpybQc2-WZEzuD_EDkPOm0wDEynQ2vkzsLrcGlQIQISZKjJOxKhAsKhw'
       
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
  
      const tokens = await getTokens();
      const tok = [
        { name: 'Emola', account: '860****59' },
        // Adicione mais dados conforme necessário
      ];
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
