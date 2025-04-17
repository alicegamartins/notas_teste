// src/api.js
const API_BASE = 'http://localhost:3001/api';

export async function enviarAluno(student) {
  try {
    const response = await fetch(`${API_BASE}/students`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao enviar aluno:', error);
    throw error;
  }
}

export async function pingServidor() {
  try {
    const response = await fetch(`${API_BASE}/ping`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao pingar servidor:', error);
    return null;
  }
}
