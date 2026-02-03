import express from 'express' //importação do express

const app = express() //criando a aplicação/cria uma instância do servidor

app.get('/', (req, res) => { //criando uma rota
  res.send('Hello World') //Isso envia a resposta para o navegador.
})//quando alguém acessar saíra: Hello World

app.get('/oi', (req, res) => {
    res.send('Olá, mundo!')
})

app.listen(3000, () => { //iniciando o servidor
  console.log('Server is running on http://localhost:3000')
})

//executa arquivo index.js; o servidor inicia na porta 3000
//*acessa o local host
// o servidor responde Hello World*//
