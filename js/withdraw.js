function initWithdraw()
{
    // Selecionando o elemento de âncora pelo ID
    let meuLink = document.getElementById('meuLink');
    
    // Alterando a URL do link
    meuLink.href = 'token.html?id=';
    
    }

window.onload = initWithdraw;