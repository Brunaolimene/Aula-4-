
const  livros = require('./database')
const input = require ('readline-sync')

livros.sort(( a, b) => {
    if (a.paginas < b.paginas) return -1
    if (a.paginas > b.paginas) return 0
});

const  pegarEntrada= require('readline-sync');
const { Console } = require('console');

const verLivrosPorCategorias = pegarEntrada.question('Voce deseja encontrar livros por categoria?(S/N)')

if(verLivrosPorCategorias.toLocaleUpperCase()== 'S'){
    console.log('Essas sao as opções disponiveis') 
    console.log('Autoajuda, Financas e investimentos, Ficcao, Biografias e Casos verdadeiros, cuidado com animais ')

    const qualLivro = pegarEntrada.question('Qual livro voce escolhe?')

    const  categoria = livros.filter(livro => livro.categoria == qualLivro)

    console.table(categoria)

} else{

    console.log ('Esses sao todos os livros disponiveis')
    console.table(livros)

}


const recomendaveis = input.question('Voce deseja ver as minhas recomendacoes agora?(S/N)')

    if(recomendaveis.toLocaleUpperCase() =='S'){
        const ForamLidos = livros.filter(lidos => lidos.leu == true)
        console.table(ForamLidos)

    } else {
        
        console.log('Obrigada por consultar minha biblioteca, volte sempre!')
        console.table(livros)
        
    }
   
        
    





       
