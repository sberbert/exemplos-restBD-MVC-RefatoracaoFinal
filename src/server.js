import app from './app.js' //para termos acesso as rotas

const PORT = process.env.PORT || 3000 //porta definida no serviço de hospedagem por ex ou a 3000

//escutar a porta
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})     