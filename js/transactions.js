async function fillTable() {

  // Call the function to fill the table

var queryString = window.location.search;
        
// Criar um objeto com os parâmetros
var params = new URLSearchParams(queryString);
        
// Obter valores específicos usando get()
var idToken = params.get('id');
        
var authToken = 'bearer ' + localStorage.getItem('token');
const url = 'http://3.94.197.194:5000/api/Transaction/get?tokenId=' + idToken;


 
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
    // Handle the data received from the API


  
  // Function to fill the table with transaction data
  
    const tbody = document.getElementById("transactionsBody");

    data.forEach(transaction => {
      const row = document.createElement("tr");
      var id_transaction = transaction.id;
      
      // Fill in data for each column
      row.innerHTML = `
        <th scope="row">${transaction.number}</th>
        <td>${transaction.client}</td>
        <td><span class="badge rounded-pill text-bg-primary">M-Pesa</span></td>
        <td>${transaction.amount}</td>
        <td>${transaction.created}</td>
        <td>${transaction.paid}</td>
        <td>${transaction.finished}</td>
        <td>${transaction.contact}</td>
        <td><span class="badge rounded-pill text-bg-primary">${transaction.status}</span></td>
        <td>
        
          <div class="dropdown">
            <span data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-three-dots-vertical"></i>
            </span>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Imprimir</a></li>
              <li><a class="dropdown-item" href="#">Pagar</a></li>
              <li class="id-transaction" data-transaction-id="${transaction.id}" ><span class="dropdown-item">Eliminar</span></li>
            </ul>
          </div>

        </td>
      `;
      tbody.appendChild(row);

      
      // Append the row to the table body
      
    });
    
      var transactionItems = document.querySelectorAll('.id-transaction');
      // Itera por cada elemento <li> e adiciona um ouvinte de evento de clique a cada um
      transactionItems.forEach(item => {
        item.addEventListener('click', function() {
          
          // Obtém o ID da transação a partir do atributo 'data-transaction-id'
          var transactionId = item.getAttribute('data-transaction-id');
          payTransaction(transactionId);
        });
      });
      
  })
  .catch(error => {
    // Handle errors during the request
    console.error('There was a problem with the fetch operation:', error);
  });
}




async function payTransaction(transactionId)
{
  
  var authToken = 'bearer ' + localStorage.getItem('token');
  await fetch('http://3.94.197.194:5000/api/Token/Id=' + transactionId, {
  method: 'DELETE',
  headers: {
    'accept': 'text/plain',
    'Authorization': authToken
  }
}).then(response => {
    // Handle the response here
    return response.text();
  }).then(data => {
    // Handle the response here
    alert(data + ": Eliminado com sucesso");
  }).catch(error => {
    // Handle errors here
    console.error('Request failed:', error);
  });
  

}

window.onload = fillTable;
