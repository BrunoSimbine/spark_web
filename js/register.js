function validarNumero(input) {
  // Remover espaços em branco e caracteres não numéricos
  input.value = input.value.replace(/\D/g, '');

  // Verificar se o número está dentro do intervalo desejado
  let numero = parseInt(input.value, 10);
  if (numero <= 820000000 || numero >= 879999999) {
    alert('Digite um contacto válido!');
    input.value = ''; // Limpar o campo se estiver fora do intervalo
  }
}


document.getElementById('loginForm').addEventListener('submit', async function(event) {
      // Impedir o comportamento padrão do formulário
      event.preventDefault();


        var spinner = document.getElementById('btn-spinner');
        spinner.style.display = 'inline-block';
      // Aqui você pode adicionar seu próprio código para manipular os dados do formulário
      // Por exemplo, você pode pegar os valores do formulário e executar alguma ação com eles
      // Exemplo:
      var user = await createUser();
    
        spinner.style.display = 'none';
      window.location.href = 'http://3.94.197.194/login.html';
      
      // Você pode fazer outras operações desejadas com os dados do formulário

      // Não se esqueça de adicionar a lógica necessária para processar os dados do formulário
});




async function createUser()
{
    const nome = document.getElementById('inputName').value;
    const telefone = document.getElementById('inputPhone').value;
    const senha = document.getElementById('inputPassword').value;
    
    var result = await fetch('http://3.94.197.194:5000/api/Auth/register', {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "phone": telefone,
          "name": nome,
          "password": senha
        })
      })
        .then(response => {
          if (!response.ok) {
            document.write("Falha");
            
          }
          return response.text(); // Extrair a resposta como texto
        })
    return result;
}

