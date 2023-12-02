
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


const meuModal = new bootstrap.Modal(document.getElementById('exampleModal'));
const botaoAbrirModal = document.getElementById('btn-modal');

// Adicionar um evento de clique para abrir o modal
botaoAbrirModal.addEventListener('click', function() {
  // Selecionar o modal pelo ID
  // Exibir o modal
  meuModal.show();
});




// Selecionar o botão de fechamento do modal (botão "Fechar")
const botaoFecharModal = document.getElementById('btn-close');

// Adicionar um evento de clique para fechar o modal quando o botão "Fechar" for clicado
botaoFecharModal.addEventListener('click', function() {
  // Fechar o modal
  meuModal.hide();
});





window.onload = preencherLista;
