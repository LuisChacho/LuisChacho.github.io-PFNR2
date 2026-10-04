const questions = [
  // --- PORCENTAJES Y DESCUENTOS SUCESIVOS (1-4) ---
  { id: 1, topic: "Porcentajes", text: "1. ¿Cuál es el 25% del 40% de 1200?", options: ["120", "150", "180", "200"], answer: 0 },
  { id: 2, topic: "Porcentajes", text: "2. Si un producto de $200 recibe un descuento del 20% y luego otro del 10% sobre el saldo, ¿cuál es el precio final?", options: ["$140", "$144", "$150", "$160"], answer: 1 },
  { id: 3, topic: "Porcentajes", text: "3. En un curso de 40 estudiantes, el 65% son mujeres. ¿Cuántos hombres hay?", options: ["12", "14", "16", "26"], answer: 1 },
  { id: 4, topic: "Porcentajes", text: "4. Un comerciante compra un objeto en $60 y lo vende en $90. ¿Cuál fue el porcentaje de ganancia sobre el costo?", options: ["30%", "33.3%", "50%", "66.6%"], answer: 2 },

  // --- REGLA DE TRES SIMPLE Y COMPUESTA (5-7) ---
  { id: 5, topic: "Regla de Tres", text: "5. Si 6 obreros construyen una obra en 10 días, ¿cuántos días tardarán 15 obreros con el mismo ritmo?", options: ["4 días", "5 días", "6 días", "8 días"], answer: 0 },
  { id: 6, topic: "Regla de Tres", text: "6. Tres impresoras imprimen 300 páginas en 20 minutos. ¿Cuántas páginas imprimirán 5 impresoras en 10 minutos?", options: ["250", "300", "350", "400"], answer: 0 },
  { id: 7, topic: "Regla de Tres", text: "7. Un grupo de 8 personas realiza una obra en 15 días. ¿Cuántas personas adicionales se necesitan para hacerla en 10 días?", options: ["2", "4", "6", "12"], answer: 1 },

  // --- POTENCIACIÓN Y RADICACIÓN - LEYES Y SIMPLIFICACIÓN (8-16) ---
  { id: 8, topic: "Potencias y Radicación", text: "8. Simplifique la expresión: (2³ × 2⁴) ÷ 2⁵", options: ["2", "4", "8", "16"], answer: 1 },
  { id: 9, topic: "Potencias y Radicación", text: "9. Al simplificar (a³ × b²)² ÷ (a⁴ × b³), se obtiene:", options: ["a²b", "a² / b", "a / b²", "ab²"], answer: 1 },
  { id: 10, topic: "Potencias y Radicación", text: "10. Calcule el valor equivalente de: √(32) + √(50) - √(18)", options: ["4√2", "5√2", "6√2", "7√2"], answer: 2 },
  { id: 11, topic: "Potencias y Radicación", text: "11. Exprese con exponente positivo la expresión: (x⁻³ × y²)⁻²", options: ["x⁶ / y⁴", "x⁻⁶ / y⁴", "y⁴ / x⁶", "x⁶ y⁴"], answer: 0 },
  { id: 12, topic: "Potencias y Radicación", text: "12. Simplifique la expresión con radicales: ∛(x⁶ y⁹)", options: ["x² y³", "x³ y²", "x y³", "x² y⁶"], answer: 0 },
  { id: 13, topic: "Potencias y Radicación", text: "13. Determine el valor simplificado de: (27)^(2/3)", options: ["3", "6", "9", "18"], answer: 2 },
  { id: 14, topic: "Potencias y Radicación", text: "14. Al simplificar √(72) / √(2), el resultado es:", options: ["3", "6", "12", "36"], answer: 1 },
  { id: 15, topic: "Potencias y Radicación", text: "15. Exprese en una sola potencia: (3² × 3⁻⁵) ÷ 3⁻⁴", options: ["3⁻⁷", "3⁻¹", "3¹", "3³"], answer: 2 },
  { id: 16, topic: "Potencias y Radicación", text: "16. Al simplificar ∜(16 x⁸ y¹²), se obtiene:", options: ["2 x² y³", "4 x² y³", "2 x⁴ y⁶", "4 x⁴ y³"], answer: 0 },

  // --- ECUACIONES Y PLANTEO DE PROBLEMAS (17-21) ---
  { id: 17, topic: "Ecuaciones y Planteo", text: "17. La suma de tres números consecutivos es 72. ¿Cuál es el número mayor?", options: ["23", "24", "25", "26"], answer: 2 },
  { id: 18, topic: "Ecuaciones y Planteo", text: "18. El triple de un número aumentado en 8 equivale al doble del mismo número aumentado en 15. ¿Cuál es el número?", options: ["5", "6", "7", "8"], answer: 2 },
  { id: 19, topic: "Ecuaciones y Planteo", text: "19. ¿Qué número multiplicado por 4 y dividido para 6 da como resultado 12?", options: ["16", "18", "20", "24"], answer: 1 },
  { id: 20, topic: "Ecuaciones y Planteo", text: "20. Tres personas reúnen $180. La primera aporta el doble que la segunda, y la tercera aporta el triple que la segunda. ¿Cuánto aportó la segunda?", options: ["$30", "$40", "$60", "$90"], answer: 0 },
  { id: 21, topic: "Ecuaciones y Planteo", text: "21. ¿Cuál es el menor de tres números enteros impares consecutivos cuya suma es 57?", options: ["15", "17", "19", "21"], answer: 1 },

  // --- PROBLEMAS DE EDADES (22-23) ---
  { id: 22, topic: "Problemas de Edades", text: "22. Juan tiene el triple de la edad de Pedro. Si dentro de 10 años la suma de sus edades será 60 años, ¿qué edad tiene Juan hoy?", options: ["10 años", "20 años", "30 años", "40 años"], answer: 2 },
  { id: 23, topic: "Problemas de Edades", text: "23. La edad de María hace 5 años era la mitad de la edad que tendrá dentro de 7 años. ¿Cuántos años tiene ahora?", options: ["15 años", "17 años", "19 años", "21 años"], answer: 1 },

  // --- FRACCIONES Y TRABAJO CONJUNTO (24-27) ---
  { id: 24, topic: "Fracciones", text: "24. El grifo A llena un tanque en 4 horas y el grifo B en 6 horas. Si se abren juntos, ¿en cuánto tiempo llenarán el tanque?", options: ["2.4 horas", "3 horas", "5 horas", "10 horas"], answer: 0 },
  { id: 25, topic: "Fracciones", text: "25. Un estudiante resuelve 2/5 de una guía el lunes y 1/3 del resto el martes. ¿Qué fracción del total le queda por resolver?", options: ["2/5", "1/5", "3/5", "4/15"], answer: 0 },
  { id: 26, topic: "Fracciones", text: "26. Un tanque está lleno hasta sus 3/4 partes. Si se le extraen 15 litros queda a la mitad. ¿Cuál es la capacidad del tanque?", options: ["50 litros", "60 litros", "75 litros", "80 litros"], answer: 1 },
  { id: 27, topic: "Fracciones", text: "27. Se tienen 5 piezas de tela de 20m cada una. Si se venden 3/5 del total, ¿cuántos metros quedan?", options: ["30 m", "40 m", "50 m", "60 m"], answer: 1 },

  // --- REPARTOS PROPORCIONALES Y RAZONES (28-30) ---
  { id: 28, topic: "Razones y Proporciones", text: "28. Se reparte una herencia de $12,000 entre dos hermanos en razón de 3:5. ¿Cuánto recibe el menor?", options: ["$4,000", "$4,500", "$7,500", "$8,000"], answer: 1 },
  { id: 29, topic: "Razones y Proporciones", text: "29. En una reunión, la relación entre hombres y mujeres es de 4 a 7. Si hay 28 mujeres, ¿cuántos hombres hay?", options: ["12", "14", "16", "20"], answer: 2 },
  { id: 30, topic: "Razones y Proporciones", text: "30. Si 4 cuadernos valen lo mismo que 6 carpetas, y 3 carpetas cuestan $9, ¿cuánto cuesta un cuaderno?", options: ["$3", "$4.50", "$6", "$9"], answer: 1 },

  // --- PROBABILIDAD Y COMBINATORIA BÁSICA (31-32) ---
  { id: 31, topic: "Probabilidad", text: "31. Al lanzar dos monedas al aire, ¿cuál es la probabilidad de obtener al menos una cara?", options: ["1/4", "1/2", "3/4", "1"], answer: 2 },
  { id: 32, topic: "Probabilidad", text: "32. En una urna hay 5 bolas rojas, 3 azules y 2 verdes. ¿Cuál es la probabilidad de sacar una bola azul?", options: ["2/10", "3/10", "3/8", "5/10"], answer: 1 },

  // --- OPERACIONES COMBINADAS Y JERARQUÍA (33-38) ---
  { id: 33, topic: "Operaciones Básicas", text: "33. Resolver: 24 ÷ 4 × (3 + 1) - 2³", options: ["10", "16", "18", "22"], answer: 1 },
  { id: 34, topic: "Operaciones Básicas", text: "34. ¿Cuál es el resultado de (0.5)² ÷ 0.25?", options: ["0.25", "0.5", "1", "2"], answer: 2 },
  { id: 35, topic: "Operaciones Básicas", text: "35. Hallar el valor de: √144 + 3² - (10 - 2)", options: ["11", "13", "15", "17"], answer: 1 },
  { id: 36, topic: "Operaciones Básicas", text: "36. Resolver: 15 + 3 × (8 - 2)", options: ["108", "33", "27", "45"], answer: 1 },
  { id: 37, topic: "Operaciones Básicas", text: "37. Resolver: (1/2 + 1/3) ÷ (1/6)", options: ["1", "3", "5", "6"], answer: 2 },
  { id: 38, topic: "Operaciones Básicas", text: "38. Resolver: 10 - [ 2 + 3 × (4 - 1) ]", options: ["-1", "1", "3", "5"], answer: 0 },

  // --- PROMEDIOS Y ESTADÍSTICA DESCRIPTIVA (39-40) ---
  { id: 39, topic: "Estadística y Promedios", text: "39. El promedio de 4 exámenes de un estudiante es 14. ¿Qué nota debe obtener en el quinto examen para subir su promedio a 15?", options: ["16", "18", "19", "20"], answer: 2 },
  { id: 40, topic: "Estadística y Promedios", text: "40. Las estaturas en cm de 5 personas son: 160, 165, 170, 175, 180. ¿Cuál es la mediana?", options: ["165", "170", "172.5", "175"], answer: 1 },

  // --- PROBLEMAS DE MEZCLAS (41) ---
  { id: 41, topic: "Mezclas", text: "41. Se mezclan 4 litros de agua con 6 litros de jugo concentrado. ¿Qué porcentaje de la mezcla representa el jugo?", options: ["40%", "50%", "60%", "70%"], answer: 2 },

  // --- LÓGICA NUMÉRICA Y OPERADORES ESTRUCTURADOS (42-43) ---
  { id: 42, topic: "Lógica Numérica", text: "42. Si a ⊕ b = (a × b) + a, calcule el valor de 4 ⊕ 5:", options: ["20", "24", "25", "29"], answer: 1 },
  { id: 43, topic: "Lógica Numérica", text: "43. Si 3x - 5 = 16, determine el valor de 2x + 1:", options: ["13", "15", "17", "19"], answer: 1 },

  // --- INTERPRETACIÓN DE TABLAS Y PORCENTAJES REFORZADOS (44-50) ---
  { id: 44, topic: "Análisis de Datos", text: "44. Si las ventas mensuales fueron: Ene ($1200), Feb ($1500), Mar ($1800). ¿Cuál fue el incremento porcentaje de Enero a Marzo?", options: ["30%", "40%", "50%", "60%"], answer: 2 },
  { id: 45, topic: "Porcentajes", text: "45. La diferencia entre el 80% y el 50% de un número es 45. ¿Cuál es el número?", options: ["120", "150", "180", "200"], answer: 1 },
  { id: 46, topic: "Porcentajes", text: "46. Si el 12% de un número es 36, ¿cuál es el 30% de dicho número?", options: ["72", "90", "108", "120"], answer: 1 },
  { id: 47, topic: "Potencias y Radicación", text: "47. Al simplificar (2⁴ × 3²) ÷ (2² × 3), el resultado es:", options: ["6", "12", "18", "24"], answer: 1 },
  { id: 48, topic: "Potencias y Radicación", text: "48. Exprese la raíz √(50) en su forma simplificada a√b:", options: ["2√5", "5√2", "10√5", "25√2"], answer: 1 },
  { id: 49, topic: "Potencias y Radicación", text: "49. Calcule el valor de: (16)^(3/4)", options: ["4", "8", "12", "16"], answer: 1 },
  { id: 50, topic: "Potencias y Radicación", text: "50. Simplifique la expresión: (x⁻² / y⁻³)⁻¹", options: ["x² / y³", "y³ / x²", "x² y³", "1 / (x² y³)"], answer: 0 }
];

// ESTADO GLOBAL
let studentName = "";
let totalTime = 3000; // 50 min
let warnings = 0;
const MAX_WARNINGS = 3;
let timerInterval = null;
let isSubmitted = false;

// ELEMENTOS DOM
const studentForm = document.getElementById("student-form");
const studentNameInput = document.getElementById("student-name");
const startModal = document.getElementById("start-modal");
const mainContainer = document.getElementById("main-container");
const displayStudentName = document.getElementById("display-student-name");
const resStudentName = document.getElementById("res-student-name");
const timeDisplay = document.getElementById("time-display");
const warningCount = document.getElementById("warning-count");
const questionsList = document.getElementById("questions-list");
const quizForm = document.getElementById("quiz-form");
const quizContainer = document.getElementById("quiz-container");
const resultCard = document.getElementById("result-card");
const scoreText = document.getElementById("score-text");
const percentageText = document.getElementById("percentage-text");
const feedbackMessage = document.getElementById("feedback-message");
const topicFeedbackList = document.getElementById("topic-feedback-list");
const submissionReason = document.getElementById("submission-reason");

// RENDERIZAR PREGUNTAS
function renderQuestions() {
  const savedAnswers = JSON.parse(localStorage.getItem("adm_quiz_answers") || "{}");

  questionsList.innerHTML = questions.map((q, index) => {
    const isChecked = (optIndex) => savedAnswers[`q${index}`] == optIndex ? 'checked' : '';
    return `
      <div class="question-card">
        <p class="question-text">${q.text}</p>
        <div class="options-list">
          ${q.options.map((opt, optIndex) => `
            <label class="option-item">
              <input type="radio" name="q${index}" value="${optIndex}" ${isChecked(optIndex)} onchange="saveAnswer('q${index}',${optIndex})">
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

window.saveAnswer = function(questionKey, val) {
  const savedAnswers = JSON.parse(localStorage.getItem("adm_quiz_answers") || "{}");
  savedAnswers[questionKey] = val;
  localStorage.setItem("adm_quiz_answers", JSON.stringify(savedAnswers));
};

function startTimer() {
  timerInterval = setInterval(() => {
    totalTime--;
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (totalTime <= 0) {
      clearInterval(timerInterval);
      submitQuiz("Tiempo límite agotado.");
    }
  }, 1000);
}

// CAPA DE SEGURIDAD
function handleSecurityViolation() {
  if (isSubmitted) return;

  warnings++;
  warningCount.textContent = `${warnings} / ${MAX_WARNINGS}`;

  if (warnings >= MAX_WARNINGS) {
    submitQuiz("Envío automático por infracción de seguridad (múltiples salidas de la ventana del examen).");
  } else {
    alert(`¡ADVERTENCIA DE SEGURIDAD (${warnings}/${MAX_WARNINGS})!\nHa salido del foco del examen. Permanecer en otra pestaña causará el envío automático de la prueba.`);
  }
}

function setupSecurityListeners() {
  window.addEventListener("blur", handleSecurityViolation);

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
      (e.ctrlKey && (e.key === "c" || e.key === "v" || e.key === "u" || e.key === "a")) ||
      e.key === "Alt"
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener("selectstart", (e) => e.preventDefault());
}

// INICIO TRAS INGRESO DE NOMBRE
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  studentName = studentNameInput.value.trim();
  
  if (!studentName) return;

  displayStudentName.textContent = studentName;
  resStudentName.textContent = studentName;

  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }

  startModal.classList.add("hidden");
  mainContainer.classList.remove("blur-content");
  mainContainer.style.pointerEvents = "auto";

  renderQuestions();
  startTimer();
  setupSecurityListeners();
});

// ENVÍO Y RETROALIMENTACIÓN DETALLADA POR TEMA
function submitQuiz(reason = "Entrega voluntaria del aspirante.") {
  if (isSubmitted) return;
  isSubmitted = true;

  clearInterval(timerInterval);
  window.removeEventListener("blur", handleSecurityViolation);

  let score = 0;
  const savedAnswers = JSON.parse(localStorage.getItem("adm_quiz_answers") || "{}");
  const topicStats = {};

  questions.forEach((q, index) => {
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, correct: 0 };
    }
    topicStats[q.topic].total++;

    const selected = savedAnswers[`q${index}`];
    if (selected !== undefined && parseInt(selected) === q.answer) {
      score++;
      topicStats[q.topic].correct++;
    }
  });

  const percentage = ((score / questions.length) * 100).toFixed(1);

  quizContainer.classList.add("hidden");
  document.querySelector(".status-bar").classList.add("hidden");
  resultCard.classList.remove("hidden");

  scoreText.textContent = `${score} / ${questions.length}`;
  percentageText.textContent = `${percentage}%`;
  submissionReason.textContent = `Observación: ${reason}`;

  // Diagnóstico Principal
  if (percentage >= 80) {
    feedbackMessage.textContent = "Demuestras un nivel de aptitud numérico elevado, acorde con los requerimientos académicos universitarios superiores.";
    feedbackMessage.style.borderColor = "var(--success-color)";
  } else if (percentage >= 60) {
    feedbackMessage.textContent = "Obtienes un nivel satisfactorio. Tienes buen dominio conceptual pero requieres ajustar precisión y velocidad en temas específicos.";
    feedbackMessage.style.borderColor = "var(--warning-color)";
  } else {
    feedbackMessage.textContent = "Tu desempeño actual requiere refuerzo formativo. Es recomendable repasar los temas con menor porcentaje de acierto.";
    feedbackMessage.style.borderColor = "var(--danger-color)";
  }

  // Generación de Retroalimentación por Tema
  topicFeedbackList.innerHTML = Object.keys(topicStats).map(topic => {
    const stat = topicStats[topic];
    const topicPct = Math.round((stat.correct / stat.total) * 100);
    let statusText = "";

    if (topicPct >= 80) {
      statusText = "Dominio Consolidado";
    } else if (topicPct >= 50) {
      statusText = "Requiere Práctica";
    } else {
      statusText = "Refuerzo Urgente";
    }

    return `
      <div class="topic-card">
        <h4>${topic}</h4>
        <p>Aciertos: ${stat.correct} de ${stat.total} (${topicPct}%)</p>
        <p><strong>Estado:</strong> ${statusText}</p>
      </div>
    `;
  }).join('');

  localStorage.removeItem("adm_quiz_answers");
}

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitQuiz("Entrega manual de examen.");
});