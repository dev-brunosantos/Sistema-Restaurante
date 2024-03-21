const menu = document.querySelectorAll('.menu')
const tela = document.getElementById('conteudo')

menu.forEach(link => {
    link.addEventListener('click', () => {
        if(link.textContent = 'Instalação') {
            return (
                tela.innerHTML = `
                <h1> Seja bem vindo a nossa 
                    <span> API PEDIDOS </span>
                <h1>
                `
            )
        }
        return (
            tela.textContent = `
            h1 PAGINA 2 DA  
                span API PEDIDOS
            `
        )
    })
})