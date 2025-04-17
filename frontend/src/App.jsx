import { useState } from 'react';
import './App.css';



const initialStudent = {
  name: '',
  grades: [0, 0, 0, 0, 0],
  attendance: 100,
};


function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(initialStudent);

  const handleChange = (e, index) => {
    if (index >= 0) {
      const newGrades = [...form.grades];
      newGrades[index] = parseFloat(e.target.value);
      setForm({ ...form, grades: newGrades });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };



  const addStudent = () => {
    setStudents([...students, { ...form, grades: form.grades.map(Number), attendance: Number(form.attendance) }]);
    setForm(initialStudent);
  };

  const classAverages = () => {
    const totals = [0, 0, 0, 0, 0];
    students.forEach((s) => s.grades.forEach((g, i) => (totals[i] += g)));
    return totals.map((total) => (students.length ? total / students.length : 0));
  };

  const disciplineAverages = classAverages();
  const overallClassAverage = disciplineAverages.reduce((a, b) => a + b, 0) / 5;
  const studentsAboveAverage = students.filter((s) => (s.grades.reduce((a, b) => a + b, 0) / s.grades.length) > overallClassAverage);
  const studentsLowAttendance = students.filter((s) => s.attendance < 75);

  return (
    <div className="app">
      <h1>Gestão de Alunos</h1>

      <div className="form">
        <label>Nome do Aluno:</label>
        <input
          name="name"
          placeholder="Nome do aluno"
          value={form.name}
          onChange={handleChange}
        />

        <div className="grades">
          <label>Notas:</label>
          {form.grades.map((grade, i) => (
            <div key={i} className="grade-input">
              <span>Disciplina {i + 1}:</span>
              <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                value={grade}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
          ))}
        </div>

        <label>Frequência (%):</label>
        <input
          type="number"
          name="attendance"
          min="0"
          max="100"
          value={form.attendance}
          onChange={handleChange}
        />

        <button onClick={addStudent}>Adicionar</button>
      </div>

      <h2>Alunos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Média</th>
            <th>Frequência</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => {
            const avg = s.grades.reduce((a, b) => a + b, 0) / s.grades.length;
            const aboveAverage = avg > overallClassAverage;
            const lowAttendance = s.attendance < 75;
            return (
              <tr key={i} className={lowAttendance ? 'alert' : ''}>
                <td>{s.name}</td>
                <td>{avg.toFixed(2)}</td>
                <td>{s.attendance}%</td>
                <td>
  {aboveAverage && <div className="highlight">Acima da média</div>}
  {lowAttendance && <div className="warning">Frequência baixa</div>}
</td>

              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Média da turma por disciplina:</h3>
      <ul>
        {disciplineAverages.map((avg, i) => (
          <li key={i}>Disciplina {i + 1}: {avg.toFixed(2)}</li>
        ))}
      </ul>

      <div className="lists">
        <div className="above-average">
          <h3>Alunos com média acima da turma:</h3>
          <ul>
            {studentsAboveAverage.map((s, i) => (
              <li key={i}>{s.name}</li>
            ))}
            {studentsAboveAverage.length === 0 && <li>(nenhum)</li>}
          </ul>
        </div>

        <div className="low-attendance">
          <h3>Alunos com frequência abaixo de 75%:</h3>
          <ul>
            {studentsLowAttendance.map((s, i) => (
              <li key={i}>{s.name}</li>
            ))}
            {studentsLowAttendance.length === 0 && <li>(nenhum)</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;