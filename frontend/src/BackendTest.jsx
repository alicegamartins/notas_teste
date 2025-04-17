// src/BackendTest.jsx
import { useEffect, useState } from 'react';
import { pingServidor, enviarAluno } from './api';

function BackendTest() {
  const [ping, setPing] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    pingServidor().then((res) => {
      setPing(res?.message);
    });
  }, []);

  const alunoFake = {
    name: 'Aluno Backend',
    grades: [8, 7.5, 9, 6, 8.5],
    attendance: 90,
  };

  const handleEnviar = async () => {
    try {
      const res = await enviarAluno(alunoFake);
      setStatus(`Enviado com sucesso: ${res.message}`);
    } catch (error) {
      setStatus('Erro ao enviar aluno.');
    }
  };

  return (
    <div style={{ marginTop: 40, padding: 20, border: '1px solid #ccc' }}>
      <h2>Teste de Conexão com o Backend</h2>
      <p>Status do Ping: {ping || 'Carregando...'}</p>
      <button onClick={handleEnviar}>Enviar aluno fictício pro backend</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default BackendTest;
