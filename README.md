# Cadastro de notas

### Acesse o site:



<img width="600" alt="Image" src="https://github.com/user-attachments/assets/428153bd-2166-41de-ac7e-d2cc0666a267" />


 ## Instruções para executar o sistema

 clonar o repositorio https://github.com/alicegamartins/notasdti_teste.git

### Frontend

```bash
cd frontend
npm install
npm run dev
```

###Backend

 ```bash
cd backend
npm install
node index.js
```

## Lista de premissas assumidas

- O sistema considera **5 disciplinas fixas** por aluno.
- As **notas** variam de **0 a 10**.
- A **frequência** é registrada em percentual, de **0% a 100%**.
- A **média da turma por disciplina** é calculada com base em todos os alunos cadastrados.
- **Frequência abaixo de 75%** indica que o aluno precisa de atenção especial.

## Decisões de projeto

- Utilização do **React (Vite)** no front-end, pela sua velocidade e organização
- Back-end implementado com **Node.js e Express**, por serem leves e fáceis de integrar com o front-end via API REST.
- Estrutura dividida em pastas separadas (`front-end` e `back-end`) para melhor organização.



