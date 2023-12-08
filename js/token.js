
document.getElementById('transactionForm').addEventListener('submit', async function(event) {
      // Impedir o comportamento padrão do formulário
      event.preventDefault();


        var Name = document.getElementById('inputName').value;
        var Contact = document.getElementById('inputPhone').value;
        var Amount = document.getElementById('inputAmount').value;

        var spinner = document.getElementById('btn-spinner');
        spinner.style.display = 'inline-block';
      // Aqui você pode adicionar seu próprio código para manipular os dados do formulário
      // Por exemplo, você pode pegar os valores do formulário e executar alguma ação com eles
      // Exemplo:
      
    
    
    
    const url = 'http://3.94.197.194:5000/api/Transaction/create';
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJ1c2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMDhkYmY3ZjQtOGE1MC00ODU5LTg2MzAtYjFmYWEwMzEyY2ZlIiwiZXhwIjoxNzAyMTMxMDc4fQ.xdP0editlYtRsYGQrzU1GIwrF2xMCFBBsFVl-1nEybYj4rzkrmpK_nmQpKH5XmZunOt4mqztqSRlNKo9p6432w';
    
    const data = {
      amount: Amount,
      contact: Contact,
      tokenId: '08dbf7f4-9df0-4ce1-8db7-0b4559f1e9b3',
      client: Name
    };
    
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain',
        'Authorization': `bearer ${token}`
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
        alert(data);
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








