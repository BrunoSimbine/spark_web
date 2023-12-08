
document.getElementById('transactionForm').addEventListener('submit', async function(event) {
      // Impedir o comportamento padrão do formulário
      event.preventDefault();
        
        
        
        
        // Obter a query string da URL
        var queryString = window.location.search;
        
        // Criar um objeto com os parâmetros
        var params = new URLSearchParams(queryString);
        
        // Obter valores específicos usando get()
        var idToken = params.get('id');
    
        alert(idToken);   // Saída: 123
        
        
        
        
        
        var authToken = 'bearer ' + localStorage.getItem('token');

        var Name = document.getElementById('inputName').value;
        var Contact = document.getElementById('inputPhone').value + '';
        var Amount = document.getElementById('inputAmount').value;

        var spinner = document.getElementById('btn-spinner');
        spinner.style.display = 'inline-block';
      // Aqui você pode adicionar seu próprio código para manipular os dados do formulário
      // Por exemplo, você pode pegar os valores do formulário e executar alguma ação com eles
      // Exemplo:
      alert(Name + " " + Amount + " " + Contact)
    
    
    
    const url = 'http://3.94.197.194:5000/api/Transaction/create';
    const token = authToken;
    
    const data = {
      amount: Amount,
      contact: Contact,
      tokenId: idToken,
      client: Name
    };
    
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain',
        'Authorization': authToken
      },
      body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Change this based on what response format you expect
      })
      .then(data => {
        // Handle the data from the response
        
      })
      .catch(error => {
        // Handle errors here
        console.error('There was a problem with the fetch operation:', error);
      });

    
    
    
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
      var wrapper = document.createElement('div')
      alertPlaceholder.innerHTML = ''
      wrapper.innerHTML = [
        `<div class="alert alert-success my-3 alert-dismissible" data-bs-dismiss="alert" aria-label="Close" role="alert">`,
        `   <div>Transação criada com sucesso!</div>`,
        '   <button type="button" class="btn-close"></button>',
        '</div>'
      ].join('')
    
      alertPlaceholder.append(wrapper)
    
      spinner.style.display = 'none';
      
      
      // Você pode fazer outras operações desejadas com os dados do formulário

      // Não se esqueça de adicionar a lógica necessária para processar os dados do formulário
});

function copyToken()
{
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
      var wrapper = document.createElement('div')
      alertPlaceholder.innerHTML = ''
      wrapper.innerHTML = [
        `<div class="alert alert-success my-2 alert-dismissible" data-bs-dismiss="alert" aria-label="Close" role="alert">`,
        `   <div>Transação criada com sucesso!</div>`,
        '   <button type="button" class="btn-close"></button>',
        '</div>'
      ].join('')
    
      alertPlaceholder.append(wrapper)
}








