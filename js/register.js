document.getElementById('loginForm').addEventListener('submit', async function(event) {
      // Impedir o comportamento padrão do formulário
      event.preventDefault();

      // Aqui você pode adicionar seu próprio código para manipular os dados do formulário
      // Por exemplo, você pode pegar os valores do formulário e executar alguma ação com eles
        alert(1);
      // Exemplo:
      var user = await createUser();
      window.location.href = 'http://23.20.239.207/login.html';
      
      // Você pode fazer outras operações desejadas com os dados do formulário

      // Não se esqueça de adicionar a lógica necessária para processar os dados do formulário
});




async function createUser()
{
    const nome = document.getElementById('inputName').value;
    const sobrenome = document.getElementById('inputSurname').value;
    const telefone = document.getElementById('inputPhone').value;
    const senha = document.getElementById('inputPassword').value;
    
    var result = await fetch('http://23.20.239.207:5000/api/Auth/register', {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "phone": telefone,
          "name": nome,
          "surname": sobrenome,
          "password": senha
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          return response.text(); // Extrair a resposta como texto
        })
    return result;
}

