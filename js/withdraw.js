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
    
    alert(idToken);
    }

window.onload = initWithdraw;