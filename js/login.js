document.getElementById('loginForm').addEventListener('submit', async function(event) {
      // Impedir o comportamento padrão do formulário
      event.preventDefault();

        var spinner = document.getElementById('btn-spinner');
        spinner.style.display = 'inline-block';
      // Aqui você pode adicionar seu próprio código para manipular os dados do formulário
      // Por exemplo, você pode pegar os valores do formulário e executar alguma ação com eles
      // Exemplo
      await getLogin();
      spinner.style.display = 'none';
      
      // Você pode fazer outras operações desejadas com os dados do formulário

      // Não se esqueça de adicionar a lógica necessária para processar os dados do formulário
});


function validarNumero(input) {
  // Remover espaços em branco e caracteres não numéricos
  input.value = input.value.replace(/\D/g, '');

  // Verificar se o número está dentro do intervalo desejado
  let numero = parseInt(input.value, 10);
  if (numero < 820000000 || numero > 879999999) {
    alert('Digite um contacto válido.');
    input.value = ''; // Limpar o campo se estiver fora do intervalo
  }
}


async function getLogin()
{
    const telefone = document.getElementById('inputPhone').value;
    const senha = document.getElementById('inputPassword').value;
    var token = await fetch('http://3.94.197.194:5000/api/Auth/login', {
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
        document.write("Falha");
        throw new Error('Erro na requisição');
      }
      return response.json(); // Extrair a resposta como JSON
    }).then(data => {
        
        // Armazenando dados
        localStorage.setItem('token', data.token);
        window.location.href = 'index.html'
        
    })
}