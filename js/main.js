

async function registerToken()
{
      
      
      
      var name = document.getElementById('inputName').value;
      var account = document.getElementById('inputAccount').value;
      var type = document.getElementById('inputBank').value;
      
      var authToken = 'bearer ' + localStorage.getItem('token');
      
      
      const url = 'http://3.94.197.194:5000/api/Token/create';
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
          document.write("Problemas de rede: " + response.status);
        }
        return response.text(); // ou response.json() se a resposta for JSON
      })
      .then(data => {
        // Recarregar a página imediatamente
            window.location.reload();

       // Aqui você pode lidar com a resposta da requisição
      })
      .catch(error => {
        document.write(error);
      });
      
}

async function getTokens()
{
  var authToken = 'bearer ' + localStorage.getItem('token');
  
  var tokens = await fetch('http://3.94.197.194:5000/api/Token/get', {
  method: 'GET',
  headers: {
    'accept': 'text/plain',
    'Authorization': authToken
  }
})
  .then(response => {
    if (!response.ok) {
      var url = `login.html`;
      window.location.replace(url);
    }
    return response.json(); // Extrair a resposta como texto
  })
  .catch(error => {
    // Tratamento de erros
    var url = `login.html`;
    window.location.replace(url);
  });

  return tokens;
}


async function preencherLista() {
  
      document.getElementById('spinner').classList.remove('d-none');
  
      var tokens = await getTokens();
      
      document.getElementById('spinner').classList.add('d-none');
      
      var lista = document.getElementById('tokenList');

      tokens.forEach(item => {
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-start');

        var divConteudo = document.createElement('div');
        divConteudo.classList.add('ms-2', 'me-auto');

        var divNome = document.createElement('div');
        divNome.classList.add('fw-bold');
        divNome.textContent = item.name;
                        
        var account = document.createElement('span')
        account.classList.add('item-account');
        account.textContent = item.account;


        var idField = document.createElement('span')
        idField.classList.add('id-field');
        idField.classList.add('d-none');
        idField.textContent = item.id;

        divConteudo.appendChild(divNome);
        divConteudo.appendChild(account);
        divConteudo.appendChild(idField);

        listItem.appendChild(divConteudo);
        lista.appendChild(listItem);
      });
      
      // Seleciona todos os itens da lista pela classe CSS
      var itensLista = document.querySelectorAll('.list-group-item');
      
      // Adiciona um evento de clique a cada item da lista
      itensLista.forEach(item => {
        item.addEventListener('click', function() {
            
      var conteudoItem = item.querySelector('.id-field').textContent.trim();
      var url = `token.html?id=${conteudoItem}`;
      window.location.href = url;
      
    // Exibe o conteúdo do item clicado no console
          // Ação a ser executada quando o item for clicado
          // Aqui você pode realizar outras ações conforme necessário
        });
      });

}


window.onload = preencherLista;
