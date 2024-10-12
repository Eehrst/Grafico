const uri = 'https://www.githubusercontent.com/guilhermoenalis/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(uri)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const tempoMedio = (dados.tempo_medio)
    const horas = Math.trunc(tempoMedio)
    const minutos = Math.round((tempoMedio - horas) * 100).toFixed(2)
    const porcentagemConectada = (pessoasConectadas / pessoasNoMundo * 100).toFixed(2)
    
    const paragrafo = document.createElement('p')
    const container = document.getElementById('graficos-container')
    
    paragrafo.innerHTML = "Você sabia que o mundo tem <span>$ {pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social."
    
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais()