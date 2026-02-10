import express from 'express' //importação do express

const app = express() //criando a aplicação/cria uma instância do servidor

app.get('/', (req, res) => { //criando uma rota
  res.send('Hello World') //Isso envia a resposta para o navegador.
})//quando alguém acessar saíra: Hello World

app.get('/oi', (req, res) => {
    res.send('Olá, mundo!')
})

const lista = ['Rick Sanchez', 'Morty Smith', 'Beth Smith']

app.get('/personagens', (req, res) => {
  res.send(lista)
})

app.get('/personagens/:id', (req, res) => {
  const id = req.params.id
    
  const personagem = lista[id - 1]
    
  res.send(personagem)
})

// Informo ao express que o Body da requisição será em formato JSON
app.use(express.json())

app.post('/personagens', (req, res) => {
  const novoPersonagem = req.body.nome
  
  lista.push(novoPersonagem)

  res.send("Personagem adicionado com sucesso: " + novoPersonagem)
})

app.put('/personagens/:id', (req, res) => {
  const id = req.params.id
  const nomeAtualizado = req.body.nome

  lista[id - 1] = nomeAtualizado

  res.send("Personagem atualizado com sucesso: " + nomeAtualizado)
})

app.listen(3000, () => { //iniciando o servidor
  console.log('Server is running on http://localhost:3000')
})

//executa arquivo index.js; o servidor inicia na porta 3000
//*acessa o local host
// o servidor responde Hello World*//
