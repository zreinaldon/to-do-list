const input = document.querySelector('input');
const tarefas = document.getElementById('tarefas');

input.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
        criar_elementos();
    }
})

function criar_elementos() {
    const tarefa = document.createElement('div');
    tarefa.className = 'tarefa';

    const p = document.createElement('p');
    p.innerText = input.value;

    const botoes = document.createElement('div');
    botoes.className = 'opcoes';

    const botao = document.createElement('button');
    botao.className = 'botao';
    botao.innerText = 'Finalizada';
    
    const botao2 = document.createElement('button');
    botao2.className = 'botao';
    botao2.innerText = 'Excluir'
    
    add_html(tarefa, p, botoes, botao, botao2);

    return;
}

function add_html(tarefa, p, botoes, botao, botao2) {
    botoes.appendChild(botao);
    botoes.appendChild(botao2);

    tarefa.appendChild(p);
    tarefa.appendChild(botoes);
    tarefas.appendChild(tarefa);

    input.value='';

    finaliza_deleta(botao, botao2, tarefa);

    return;
}

function finaliza_deleta(botao, botao2, tarefa) {
    botao.addEventListener('click', ()=> {
        tarefa.className = 'finalizada';
    })

    botao2.addEventListener('click', ()=> {
       tarefa.parentNode.removeChild(tarefa);
    })

    return;
}