
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});


app.post('/api/students', (req, res) => {
  const student = req.body;
  console.log('Novo aluno:', student);
  res.status(201).json({ message: 'Aluno recebido com sucesso', student });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
