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
    'Authorization': 'bearer ' + authToken
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
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              X
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Imprimir</a></li>
              <li><a class="dropdown-item" href="#">Pagar</a></li>
              <li><a class="dropdown-item" href="#">Eliminar</a></li>
            </ul>
          </div>

        </td>
      `;
      
      // Append the row to the table body
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    // Handle errors during the request
    console.error('There was a problem with the fetch operation:', error);
  });
}

window.onload = fillTable;
