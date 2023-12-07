
document.getElementById('transactionForm').addEventListener('submit', async function(event) {
      // Impedir o comportamento padrão do formulário
      event.preventDefault();


        var spinner = document.getElementById('btn-spinner');
        spinner.style.display = 'inline-block';
      // Aqui você pode adicionar seu próprio código para manipular os dados do formulário
      // Por exemplo, você pode pegar os valores do formulário e executar alguma ação com eles
      // Exemplo:
      
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
      var wrapper = document.createElement('div')
      alertPlaceholder.innerHTML = ''
      wrapper.innerHTML = [
        `<div class="alert alert-success my-2 alert-dismissible" data-bs-dismiss="alert" aria-label="Close" role="alert">`,
        `   <div>Transação criada com sucesso!</div>`,
        '   <button type="button" class="btn-close"></button>',
        '</div>'
      ].join('')
    
      alertPlaceholder.append(wrapper)
    
      spinner.style.display = 'none';
      
      
      // Você pode fazer outras operações desejadas com os dados do formulário

      // Não se esqueça de adicionar a lógica necessária para processar os dados do formulário
});

function copyToken()
{
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
      var wrapper = document.createElement('div')
      alertPlaceholder.innerHTML = ''
      wrapper.innerHTML = [
        `<div class="alert alert-success my-2 alert-dismissible" data-bs-dismiss="alert" aria-label="Close" role="alert">`,
        `   <div>Transação criada com sucesso!</div>`,
        '   <button type="button" class="btn-close"></button>',
        '</div>'
      ].join('')
    
      alertPlaceholder.append(wrapper)
}








