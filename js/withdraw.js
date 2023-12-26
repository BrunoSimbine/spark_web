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
  return response.json();
})
.then(data => {





document.getElementById('spinner').classList.add('d-none');





    
    const transactions = data.items;
    
    
    
    
    
    
    
    
    
    // Create elements
const _divCol = document.createElement('div');
_divCol.classList.add('col-12', 'order-md-last');

const _header = document.createElement('h4');
_header.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-3');

const _spanText = document.createElement('span');
_spanText.classList.add('text-primary');
_spanText.textContent = 'Minhas Transações';

const _spanBadge = document.createElement('span');
_spanBadge.classList.add('badge', 'bg-primary', 'rounded-pill');
_spanBadge.textContent = '3';

const _divListBody = document.createElement('div');
_divListBody.id = 'list-body';

const _divButton = document.createElement('div');
_divButton.classList.add('d-grid', 'gap-2');

const _button = document.createElement('button');
_button.classList.add('btn', 'btn-primary');
_button.setAttribute('type', 'button');
_button.textContent = 'Concluir';

// Append elements to their respective parents
_header.appendChild(_spanText);
_header.appendChild(_spanBadge);

_divCol.appendChild(_header);
_divCol.appendChild(_divListBody);

_divButton.appendChild(_button);
_divCol.appendChild(_divButton);

// Append the created structure to an existing HTML element (assuming there's a div with id "container" where you want to place this structure)
const _container = document.getElementById('container-list');
_container.appendChild(_divCol);

    
    
    
    
    
    
    
    
    
    


    
    const ul = document.createElement('ul');
  ul.className = "list-group mb-3";

  let totalAmount = data.total;

  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between lh-sm";

    const div1 = document.createElement('div');
    const h6 = document.createElement('h6');
    h6.className = "my-0";
    h6.textContent = transaction.name;
    const small = document.createElement('small');
    small.className = "text-body-secondary";
    small.textContent = transaction.provider;
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
    
    var transactionType = "text-success";
    
    if (transaction.amount < 0)
    {
        transactionType = "text-danger";
    }
    
    span2.className = transactionType;
    span2.textContent = `${transaction.amount} MTn`;
    div2.appendChild(span1);
    div2.appendChild(br);
    div2.appendChild(span2);

    li.appendChild(div1);
    li.appendChild(div2);
    ul.appendChild(li);
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










})
.catch(error => {
  console.error('Ocorreu um erro:', error);
});



    }

window.onload = initWithdraw;