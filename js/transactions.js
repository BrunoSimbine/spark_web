async function fillTable() {
document.getElementById('spinner').classList.remove('d-none');

// Selecionando o elemento de âncora pelo ID
let meuLink = document.getElementById('link-token');

// Alterando a URL do link



  // Call the function to fill the table

var queryString = window.location.search;
        
// Criar um objeto com os parâmetros
var params = new URLSearchParams(queryString);
        
// Obter valores específicos usando get()
var idToken = params.get('id');
meuLink.href = 'token.html?id=' + idToken;
        
var authToken = 'bearer ' + localStorage.getItem('token');
var url = 'http://3.94.197.194:5000/api/Transaction/get?tokenId=' + idToken;


 
const options = {
  method: 'GET',
  headers: {
    'accept': 'text/plain',
    'Authorization': authToken
  }
};

await fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json(); // Change to .json() if the response is JSON
  })
  .then(data => {
    
    document.getElementById('spinner').classList.add('d-none');
    // Handle the data received from the API
   // Supondo que você tenha um array com os nomes das colunas
    var columnNames = ["#", "Name", "Method", "Amount", "Created", "Paid", "Finished", "Contact", "Status", ""];
    
    // Referência à tabela
    var table = document.querySelector('.table');
    
    // Criar o elemento thead
    var thead = document.createElement('thead');
    
    // Criar uma linha na thead
    var headRow = document.createElement('tr');
    
    // Iterar sobre os nomes das colunas e criar os elementos th correspondentes
    columnNames.forEach(column => {
        var th = document.createElement('th');
        th.textContent = column;
        headRow.appendChild(th);
    });
    
    // Adicionar a linha na thead
    thead.appendChild(headRow);
    
    // Adicionar a thead na tabela
    table.appendChild(thead);

  
  // Function to fill the table with transaction data
  
    const tbody = document.getElementById("transactionsBody");

    data.forEach(transaction => {
      const row = document.createElement("tr");
      
      var paid = "";
      var finished = "";
      
      if (transaction.paid != "01/01/0001 00:00")
      {
        paid = transaction.paid;
      }
      
      if (transaction.finished != "01/01/0001 00:00")
      {
        finished = transaction.finished;
      }
      // Fill in data for each column
      row.innerHTML = `
        <th scope="row">${transaction.id}</th>
        <td>${transaction.client}</td>
        <td><span class="badge rounded-pill text-bg-primary">${transaction.provider}</span></td>
        <td>${transaction.amount}</td>
        <td>${transaction.created}</td>
        <td>${paid}</td>
        <td>${finished}</td>
        <td>${transaction.contact}</td>
        <td><span class="badge rounded-pill text-bg-primary">${transaction.status}</span></td>
        <td>
        
          <div class="dropdown">
            <span data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-three-dots-vertical"></i>
            </span>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Imprimir</a></li>
              <li class="update-transaction" data-transaction-id="${transaction.id}"><span class="dropdown-item">Pagar</span></li>
              <li class="delete-transaction" data-transaction-id="${transaction.id}"><span class="dropdown-item">Eliminar</span></li>
            </ul>
          </div>

        </td>
      `;
      tbody.appendChild(row);

      
      // Append the row to the table body
      
    });
    
      var transactionItems = document.querySelectorAll('.delete-transaction');
      // Itera por cada elemento <li> e adiciona um ouvinte de evento de clique a cada um
      transactionItems.forEach(item => {
        item.addEventListener('click', function() {
          
          // Obtém o ID da transação a partir do atributo 'data-transaction-id'
          var transactionId = item.getAttribute('data-transaction-id');
          deleteTransaction(transactionId);
        });
      });
      
      var transactionItemsUpdate = document.querySelectorAll('.update-transaction');
      // Itera por cada elemento <li> e adiciona um ouvinte de evento de clique a cada um
      transactionItemsUpdate.forEach(item => {
        item.addEventListener('click', function() {
          
          // Obtém o ID da transação a partir do atributo 'data-transaction-id'
          var transactionId = item.getAttribute('data-transaction-id');
          updateTransaction(transactionId);
        });
      });
      
  })
  .catch(error => {
    // Handle errors during the request
    console.error('There was a problem with the fetch operation:', error);
  });
}




async function deleteTransaction(transactionId)
{
  
  var authToken = 'bearer ' + localStorage.getItem('token');
  await fetch('http://3.94.197.194:5000/api/Transaction/delete?Id=' + transactionId, {
  method: 'DELETE',
  headers: {
    'accept': 'text/plain',
    'Authorization': authToken
  }
}).then(response => {
    // Handle the response here

    if (!response.ok)
    {
      document.write("Erro "+ response.status);
    }
    return response.text();
  }).then(data2 => {
    // Handle the response here
    window.location.reload();
  }).catch(error => {
    // Handle errors here
    document.write(error);
  });
  

}




async function updateTransaction(transactionId)
{
  
  var authToken = 'bearer ' + localStorage.getItem('token');
  await fetch('http://3.94.197.194:5000/api/Transaction/pay/direct?Id=' + transactionId, {
  method: 'PUT',
  headers: {
    'accept': 'text/plain',
    'Authorization': authToken
  }
}).then(response2 => {
    // Handle the response here
    if (!response2.ok)
    {
      document.write("Erro: "+ response2.status);
    }
    return response2.text();
  }).then(data2 => {
    // Handle the response here
    window.location.reload();
  }).catch(error => {
    // Handle errors here
    document.write(error);
  });
  
}

window.onload = fillTable;
