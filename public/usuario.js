document.getElementById('leadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        descricao_projeto: document.getElementById('descricao').value
    };

    try {
        const response = await fetch('https://seu-negocio-of.onrender.com/clientes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            alert('Enviado com sucesso!');
            document.getElementById('leadForm').reset();
        } else {
            alert('Erro ao enviar.');
        }
    } catch (err) {
        console.error(err);
        alert('Servidor indisponível.');
    }
});