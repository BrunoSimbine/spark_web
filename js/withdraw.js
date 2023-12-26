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
    
    
    
    
    
    
    await fetch('http://3.94.197.194:5000/api/Token/withdraw?Id=08dc0006-98c0-4d25-80f1-f1d70dd01f15&Bank=Millennium%20BIM', {
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

    
    
    
    
    
    
    
    
    
    const transactions = [
  {
    name: "Bruno Simbine",
    method: "Paypal",
    originalAmount: 1200,
    discountedAmount: 1180
  },
  {
    name: "Arlindo Simbine",
    method: "IZI Transfer",
    originalAmount: 800,
    discountedAmount: 780
  },
  {
    name: "Helena Gaspar",
    method: "Bitcoin",
    originalAmount: 500,
    discountedAmount: 480
  }
];


    
    const ul = document.createElement('ul');
  ul.className = "list-group mb-3";

  let totalAmount = 0;

  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between lh-sm";

    const div1 = document.createElement('div');
    const h6 = document.createElement('h6');
    h6.className = "my-0";
    h6.textContent = transaction.name;
    const small = document.createElement('small');
    small.className = "text-body-secondary";
    small.textContent = transaction.method;
    div1.appendChild(h6);
    div1.appendChild(small);

    const div2 = document.createElement('div');
    const span1 = document.createElement('span');
    span1.className = "text-body-secondary";
    const del = document.createElement('del');
    del.textContent = `${transaction.originalAmount} MTn `;
    span1.appendChild(del);
    const br = document.createElement('br');
    const span2 = document.createElement('span');
    span2.className = "text-success";
    span2.textContent = `${transaction.discountedAmount} MTn`;
    div2.appendChild(span1);
    div2.appendChild(br);
    div2.appendChild(span2);

    li.appendChild(div1);
    li.appendChild(div2);
    ul.appendChild(li);

    totalAmount += transaction.discountedAmount;
  });

  const totalLi = document.createElement('li');
  totalLi.className = "list-group-item d-flex justify-content-between";
  const totalSpan = document.createElement('span');
  totalSpan.textContent = "Total";
  const strong = document.createElement('strong');
  strong.textContent = `${totalAmount} MTn`;
  totalLi.appendChild(totalSpan);
  totalLi.appendChild(strong);
  ul.appendChild(totalLi);

document.getElementById('list-body').appendChild(ul);



    }

window.onload = initWithdraw;