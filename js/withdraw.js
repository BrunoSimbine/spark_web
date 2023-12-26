async function initWithdraw()
{
    var queryString = window.location.search;
        
    // Criar um objeto com os parâmetros
    var params = new URLSearchParams(queryString);
            
    // Obter valores específicos usando get()
    var idToken = params.get('id');
    // Selecionando o elemento de âncora pelo ID
    let meuLink = document.getElementById('link-token');
    
    // Alterando a URL do link
    meuLink.href = 'token.html?id=' + idToken;
    
    
    var authToken = 'bearer ' + localStorage.getItem('token');
    
    
    
    await fetch('http://3.94.197.194:5000/api/Token/withdraw?Id='+ idToken + '&Bank=Millennium%20BIM', {
      method: 'POST',
      headers: {
        'accept': 'text/plain',
        'Authorization': authToken
      },
      body: ''
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao fazer a solicitação');
      }
      return response.data();
    })
    .then(data => {
      alert(data);
    
    
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });

    
    }

window.onload = initWithdraw;