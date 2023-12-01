


function getTokens()
{
  
  var tokenList = document.getElementById("");
  
  
  
  fetch('http://23.20.239.207:5000/api/Token/get', {
  method: 'GET',
  headers: {
    'accept': 'text/plain',
    'Authorization': 'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJ1c2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMDhkYmYwMjAtOTdiYy00NjhhLThhOTktMDVmZTk3NDczY2ZkIiwiZXhwIjoxNzAxNTA0NTAwfQ.stDRkHvgfT007VQkpQjAkYUABi9WYy4vjUXRJfq0VXBig9qp6EORcwLccevLl0KQlenJVjKSYKWvxSJu-htTzw'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.text(); // Extrair a resposta como texto
  })
  .then(data => {
    // Manipular os dados recebidos da resposta
    console.log('Dados recebidos:', data);
  })
  .catch(error => {
    // Tratamento de erros
    console.error('Ocorreu um erro:', error);
  });
  
}
