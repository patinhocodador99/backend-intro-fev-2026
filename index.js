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
  const id = Number(req.params.id)

  if (!Number.isInteger(id) || id < 1 || id > lista.length) {
    return res.status(404).send({ error: 'Personagem não encontrado' })
  }

  const personagem = lista[id - 1]

  res.send(personagem)
})

// Informo ao express que o Body da requisição será em formato JSON
app.use(express.json())

app.post('/personagens', (req, res) => {
  const novoPersonagem = req.body.nome

  if (!novoPersonagem || typeof novoPersonagem !== 'string' || novoPersonagem.trim() === '') {
    return res.status(400).send({ error: 'Nome inválido' })
  }

  const nomeTrim = novoPersonagem.trim()
  lista.push(nomeTrim)

  res.status(201).send({ message: 'Personagem adicionado com sucesso', nome: nomeTrim })
})

app.put('/personagens/:id', (req, res) => {
  const id = Number(req.params.id)
  const nomeAtualizado = req.body.nome

  if (!Number.isInteger(id) || id < 1 || id > lista.length) {
    return res.status(404).send({ error: 'Personagem não encontrado' })
  }

  if (!nomeAtualizado || typeof nomeAtualizado !== 'string' || nomeAtualizado.trim() === '') {
    return res.status(400).send({ error: 'Nome inválido' })
  }

  const nomeTrim = nomeAtualizado.trim()
  lista[id - 1] = nomeTrim

  res.send({ message: 'Personagem atualizado com sucesso', nome: nomeTrim })
})

app.delete('/personagens/:id', (req, res) => {
  const id = Number(req.params.id)

  if (!Number.isInteger(id) || id < 1 || id > lista.length) {
    return res.status(404).send({ error: 'Personagem não encontrado' })
  }

  const removed = lista.splice(id - 1, 1)

  res.send({ message: 'Personagem removido com sucesso!', removed: removed[0] })
})

app.listen(3000, () => { //iniciando o servidor
  console.log('Server is running on http://localhost:3000')
})

//executa arquivo index.js; o servidor inicia na porta 3000
//*acessa o local host
// o servidor responde Hello World*//
