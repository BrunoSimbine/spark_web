document.getElementById('loginForm').addEventListener('submit', async function(event) {
      // Impedir o comportamento padrão do formulário
      event.preventDefault();

      // Aqui você pode adicionar seu próprio código para manipular os dados do formulário
      // Por exemplo, você pode pegar os valores do formulário e executar alguma ação com eles
      // Exemplo:
        alert(1);
      await getLogin();
        alert(6);
      window.location.href = 'http://23.20.239.207/';
      
      // Você pode fazer outras operações desejadas com os dados do formulário

      // Não se esqueça de adicionar a lógica necessária para processar os dados do formulário
});


async function getLogin()
{
    alert(2);
    const telefone = document.getElementById('inputPhone').value;
    const senha = document.getElementById('inputPassword').value;
    alert(3);
    var token = await fetch('http://23.20.239.207:5000/api/Auth/login', {
    method: 'POST',
    headers: {
      'accept': '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "phone": telefone,
      "password": senha
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json(); // Extrair a resposta como JSON
    }).then(data => {
        alert(4);
        // Armazenando dados
        localStorage.setItem('token', data.token);
        alert(5);
    })
}