const perguntas = [
    {
        pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
        respostas: [
            "Imprimir mensagens no console do navegador",
            "Iniciar uma operação de loop",
            "Definir uma variável global",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma variável em JavaScript?",
        respostas: [
            "Um valor constante",
            "Uma função",
            "Um nome simbólico para armazenar dados",
        ],
        correta: 2
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "let myVar = 10;",
            "const variable = 'Hello';",
            "ambas as opções acima",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
        respostas: [
            "Um modelo de dados para armazenar informações confidenciais",
            "Uma linguagem de programação",
            "Uma representação hierárquica de elementos HTML/XML",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Ambos comparam valores e tipos de dados, respectivamente",
            "==' compara apenas valores, enquanto '===' compara valores e tipos de dados",
            "Não há diferença, ambos são usados da mesma forma",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o operador '&&' em JavaScript?",
        respostas: [
            "Operador de concatenação de strings",
            "Operador lógico AND (E)",
            "Operador lógico OR (OU)",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a finalidade do comando 'return' em uma função JavaScript?",
        respostas: [
            "Finalizar a execução do programa",
            "Retornar um valor de uma função",
            "Criar uma condição lógica",
        ],
        correta: 1
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Uma função",
            "Uma estrutura de controle de fluxo",
            "Uma coleção ordenada de valores",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um evento em JavaScript?",
        respostas: [
            "Um bloco de código que se repete continuamente",
            "Uma ação desencadeada pelo usuário ou pelo sistema",
            "Uma função assíncrona",
        ],
        correta: 1
    },
    {
        pergunta: "Como comentar código em JavaScript?",
        respostas: [
            "// Este é um comentário de linha única",
            "/* Este é um comentário de bloco */",
            "Ambas as opções acima",
        ],
        correta: 2
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set() // Guarda total de acertos
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    // Clona o template para a constante 'quizItem'
    const quizItem = template.content.cloneNode(true)

    // Modifica o h3 de cada template e mete o item.pergunta de cada pergunta no h3 das várias perguntas
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta // true ou false

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
    
        // Adiciona as possíveis respostas
        quizItem.querySelector('dl').appendChild(dt)
    }

    // Remove o primeiro <dt>
    quizItem.querySelector('dl dt').remove()

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}

