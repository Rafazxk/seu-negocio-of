console.log("teste")

async function carregarHistorico() {
    const container = document.getElementById('historico-container');
    
    try {
        const response = await fetch('https://seu-negocio-of.onrender.com');
        
        const clientes = await response.json();

        container.innerHTML = clientes.map(c => `
            <div class="card">
                <h3>${c.nome}</h3>
                <p><strong>Projeto:</strong> ${c.descricao}</p>
                <div class="acoes">
                    <a href="https://wa.me/55${c.telefone}?text=Olá ${c.nome}, vi seu interesse em: ${c.descricao}" target="_blank" class="btn whatsapp">WhatsApp</a>
                    <a href="mailto:${c.email}?subject=Sobre seu projeto" class="btn email">E-mail</a>
                    <button onclick="excluirCliente(${c.id})" class="btn excluir">Excluir</button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Erro ao buscar:', error);
    }
}

async function excluirCliente(id) {
    if(confirm('Tem certeza que deseja excluir?')) {
        await fetch(`https://seu-negocio-of.onrender.com/api/clientes/${id}`, { method: 'DELETE' });
        carregarHistorico();
    }
}

carregarHistorico();