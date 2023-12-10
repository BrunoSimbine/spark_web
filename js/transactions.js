async function fillTable() {

  // Call the function to fill the table


const url = 'http://3.94.197.194:5000/api/Transaction/get?tokenId=08dbf947-7daa-4bf4-8918-2d4e92d34bae';

const options = {
  method: 'GET',
  headers: {
    'accept': 'text/plain',
    'Authorization': 'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJ1c2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMDhkYmY5NDctNzIxZC00MGVlLThhYWMtNDA1NzAxZjI2NjE4IiwiZXhwIjoxNzAyMjgyNTcxfQ.pYkljztHRqZ_jRgEikW3FiPZbjmZ9X1VR48h3uvEFmGcEUL_3RREy_QI7Kf4THsbnvy58r5dtv8U35MRERlqog'
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
  
    const tbody = document.getElementById("transactionBody");

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
        <td><button class="btn btn-danger btn-sm">X</button></td>
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
