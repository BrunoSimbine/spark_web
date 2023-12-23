function validarNumero(input) {
  // Remover espaços em branco e caracteres não numéricos
  input.value = input.value.replace(/\D/g, '');

  // Verificar se o número está dentro do intervalo desejado
  let numero = parseInt(input.value, 10);
  if (numero < 820000000 || numero > 879999999) {
    alert('Digite um contacto válido!');
    input.value = ''; // Limpar o campo se estiver fora do intervalo
  }
}



document.getElementById('transactions-btn').addEventListener('click', function(){
    var queryString = window.location.search;
        
        // Criar um objeto com os parâmetros
        var params = new URLSearchParams(queryString);
        
        // Obter valores específicos usando get()
        var idToken = params.get('id');
    var url = `transactions.html?id=${idToken}`;
    window.location.href = url;

});

document.getElementById('btn-withdraw').addEventListener('click', function(){
    var queryString = window.location.search;
        
        // Criar um objeto com os parâmetros
        var params = new URLSearchParams(queryString);
        
        // Obter valores específicos usando get()
        var idToken = params.get('id');
    var url = `withdraw.html?id=${idToken}`;
    window.location.href = url;

});


document.getElementById('btn-delete').addEventListener('click', async function(){
    
    var queryString = window.location.search;
    var params = new URLSearchParams(queryString);
    var idToken = params.get('id');
    var authToken = 'bearer ' + localStorage.getItem('token');
    
    await fetch('http://3.94.197.194:5000/api/Token/delete?Id=' + idToken, {
      method: 'DELETE',
      headers: {
        'Accept': 'text/plain',
        'Authorization': authToken
      }
    })
    .then(response => {
      if (!response.ok) {
        document.write("Falha: " + response.status);
      }
      return response.text();
    })
    .then(data => {
      window.location.href = "index.html"
    })
    .catch(error => {
      document.write(error);
    });


});




document.getElementById('transactionForm').addEventListener('submit', async function(event) {
      // Impedir o comportamento padrão do formulário
      event.preventDefault();
        
        
        
        
        // Obter a query string da URL
        var queryString = window.location.search;
        
        // Criar um objeto com os parâmetros
        var params = new URLSearchParams(queryString);
        
        // Obter valores específicos usando get()
        var idToken = params.get('id');
    
        
        
        
        
        
        var authToken = 'bearer ' + localStorage.getItem('token');

        var Name = document.getElementById('inputName');
        var Contact = document.getElementById('inputPhone');
        var Amount = document.getElementById('inputAmount');

        var spinner = document.getElementById('btn-spinner');
        spinner.style.display = 'inline-block';
      // Aqui você pode adicionar seu próprio código para manipular os dados do formulário
      // Por exemplo, você pode pegar os valores do formulário e executar alguma ação com eles
      // Exemplo:
      
    
    
    const url = 'http://3.94.197.194:5000/api/Transaction/create';
    const token = authToken;
    
    const data = {
      amount: Amount.value,
      contact: Contact.value,
      tokenId: idToken,
      client: Name.value
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
            document.write('falha no servidor: ' + response.status);
        }
        return response.text(); // Change this based on what response format you expect
      })
      .then(data => {
        // Handle the data from the response
        Amount.value = "";
        Contact.value = "";
        Name.value = "";
      })
      .catch(error => {
        // Handle errors here
        document.write('Erro ' + error);
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








