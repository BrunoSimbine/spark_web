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
    
    
    
    
    
    
    await fetch('http://3.94.197.194:5000/api/Token/withdraw?Id="+ idToken +"&Bank=Millennium%20BIM', {
      method: 'POST',
      headers: {
        'accept': 'text/plain',
        'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJ1c2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMDhkYmZmMTQtMGYzYi00NjUzLTg0OWItZTMxMzA0NTEyNDBkIiwiZXhwIjoxNzAzNjU5NDYyfQ.iisMcvTfHTL6zL6kG_cTD-TLOSox-UJWdlF-uhr60YowH8aDL714pHbZTMBvIT7VVLe-8Y2vX3IADwDXGjQY7w'
      },
      body: ''
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao fazer a solicitação');
      }
      return response.text();
    })
    .then(data => {
      alert(data);
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });

    
    }

window.onload = initWithdraw;