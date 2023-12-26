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

document.body.appendChild(ul);



    }

window.onload = initWithdraw;