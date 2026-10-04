const questions = [
  // --- PORCENTAJES Y DESCUENTOS SUCESIVOS ---
  { id: 1, text: "1. ¿Cuál es el 25% del 40% de 1200?", options: ["120", "150", "180", "200"], answer: 0 },
  { id: 2, text: "2. Si un producto de $200 recibe un descuento del 20% y luego otro del 10% sobre el saldo, ¿cuál es el precio final?", options: ["$140", "$144", "$150", "$160"], answer: 1 },
  { id: 3, text: "3. En un curso de 40 estudiantes, el 65% son mujeres. ¿Cuántos hombres hay?", options: ["12", "14", "16", "26"], answer: 1 },
  
  // --- REGLA DE TRES SIMPLE Y COMPUESTA ---
  { id: 4, text: "4. Si 6 obreros construyen una obra en 10 días, ¿cuántos días tardarán 15 obreros con el mismo ritmo?", options: ["4 días", "5 días", "6 días", "8 días"], answer: 0 },
  { id: 5, text: "5. Tres impresoras imprimen 300 páginas en 20 minutos. ¿Cuántas páginas imprimirán 5 impresoras en 10 minutos?", options: ["250", "300", "350", "400"], answer: 0 },
  
  // --- SUCESIONES Y SERIES NUMÉRICAS ---
  { id: 6, text: "6. Complete la secuencia: 3, 6, 11, 18, 27, ___", options: ["36", "38", "40", "42"], answer: 1 },
  { id: 7, text: "7. Complete la secuencia: 80, 40, 20, 10, ___", options: ["0", "2.5", "5", "8"], answer: 2 },
  { id: 8, text: "8. ¿Qué número rompe el patrón?: 2, 4, 8, 16, 25, 64", options: ["8", "16", "25", "64"], answer: 2 },
  { id: 9, text: "9. Complete la serie alternada: 5, 20, 8, 16, 11, 12, 14, ___", options: ["6", "8", "10", "12"], answer: 1 },

  // --- ECUACIONES Y PLANTEO DE PROBLEMAS ---
  { id: 10, text: "10. La suma de tres números consecutivos es 72. ¿Cuál es el número mayor?", options: ["23", "24", "25", "26"], answer: 2 },
  { id: 11, text: "11. El triple de un número aumentado en 8 equivale al doble del mismo número aumentado en 15. ¿Cuál es el número?", options: ["5", "6", "7", "8"], answer: 2 },

  // --- PROBLEMAS DE EDADES ---
  { id: 12, text: "12. Juan tiene el triple de la edad de Pedro. Si dentro de 10 años la suma de sus edades será 60 años, ¿qué edad tiene Juan hoy?", options: ["10 años", "20 años", "30 años", "40 años"], answer: 2 },
  { id: 13, text: "13. La edad de María hace 5 años era la mitad de la edad que tendrá dentro de 7 años. ¿Cuántos años tiene ahora?", options: ["15 años", "17 años", "19 años", "21 años"], answer: 1 },

  // --- FRACCIONES Y TRABAJO CONJUNTO ---
  { id: 14, text: "14. El grifo A llena un tanque en 4 horas y el grifo B en 6 horas. Si se abren juntos, ¿en cuánto tiempo llenarán el tanque?", options: ["2.4 horas", "3 horas", "5 horas", "10 horas"], answer: 0 },
  { id: 15, text: "15. Un estudiante resuelve 2/5 de una guía el lunes y 1/3 del resto el martes. ¿Qué fracción del total le queda por resolver?", options: ["2/5", "1/5", "3/5", "4/15"], answer: 0 },

  // --- REPARTOS PROPORCIONALES Y RAZONES ---
  { id: 16, text: "16. Se reparte una herencia de $12,000 entre dos hermanos en razón de 3:5. ¿Cuánto recibe el menor?", options: ["$4,000", "$4,500", "$7,500", "$8,000"], answer: 1 },
  { id: 17, text: "17. En una reunión, la relación entre hombres y mujeres es de 4 a 7. Si hay 28 mujeres, ¿cuántos hombres hay?", options: ["12", "14", "16", "20"], answer: 2 },

  // --- POTENCIACIÓN Y RADICACIÓN (PROPIEDADES DE SIMPLIFICACIÓN) ---
  { id: 18, text: "18. Simplifique la expresión: (2³ × 2⁴) ÷ 2⁵", options: ["2", "4", "8", "16"], answer: 1 },
  { id: 19, text: "19. Al simplificar (a³ × b²)² ÷ (a⁴ × b³), se obtiene:", options: ["a²b", "a² / b", "a / b²", "ab²"], answer: 1 },
  { id: 20, text: "20. Calcule el valor equivalente de: √(32) + √(50) - √(18)", options: ["4√2", "5√2", "6√2", "7√2"], answer: 2 },
  { id: 21, text: "21. Exprese con exponente positivo la expresión: (x⁻³ × y²)⁻²", options: ["x⁶ / y⁴", "x⁻⁶ / y⁴", "y⁴ / x⁶", "x⁶ y⁴"], answer: 0 },

  // --- PROBABILIDAD Y COMBINATORIA BÁSICA ---
  { id: 22, text: "22. Al lanzar dos monedas al aire, ¿cuál es la probabilidad de obtener al menos una cara?", options: ["1/4", "1/2", "3/4", "1"], answer: 2 },
  { id: 23, text: "23. En una urna hay 5 bolas rojas, 3 azules y 2 verdes. ¿Cuál es la probabilidad de sacar una bola azul?", options: ["2/10", "3/10", "3/8", "5/10"], answer: 1 },

  // --- OPERACIONES RÁPIDAS Y JERARQUÍA ---
  { id: 24, text: "24. Resolver: 24 ÷ 4 × (3 + 1) - 2³", options: ["10", "16", "18", "22"], answer: 1 },
  { id: 25, text: "25. ¿Cuál es el resultado de (0.5)² ÷ 0.25?", options: ["0.25", "0.5", "1", "2"], answer: 2 },
  { id: 26, text: "26. Hallar el valor de: √144 + 3² - (10 - 2)", options: ["11", "13", "15", "17"], answer: 1 },

  // --- PROMEDIOS Y ESTADÍSTICA DESCRIPTIVA ---
  { id: 27, text: "27. El promedio de 4 exámenes de un estudiante es 14. ¿Qué nota debe obtener en el quinto examen para subir su promedio a 15?", options: ["16", "18", "19", "20"], answer: 2 },
  { id: 28, text: "28. Las estaturas en cm de 5 personas son: 160, 165, 170, 175, 180. ¿Cuál es la mediana?", options: ["165", "170", "172.5", "175"], answer: 1 },

  // --- PROBLEMAS DE MEZCLAS Y ALEACIONES ---
  { id: 29, text: "29. Se mezclan 4 litros de agua con 6 litros de jugo concentrado. ¿Qué porcentaje de la mezcla representa el jugo?", options: ["40%", "50%", "60%", "70%"], answer: 2 },

  // --- LÓGICA NUMÉRICA Y OPERADORES DE ARREGLO ---
  { id: 30, text: "30. Si a ⊕ b = (a × b) + a, calcule el valor de 4 ⊕ 5:", options: ["20", "24", "25", "29"], answer: 1 },
  { id: 31, text: "31. Si 3x - 5 = 16, determine el valor de 2x + 1:", options: ["13", "15", "17", "19"], answer: 1 },

  // --- INTERPRETACIÓN DE TABLAS Y GRÁFICOS ---
  { id: 32, text: "32. Si las ventas mensuales fueron: Ene ($1200), Feb ($1500), Mar ($1800). ¿Cuál fue el incremento porcentaje de Enero a Marzo?", options: ["30%", "40%", "50%", "60%"], answer: 2 },
  
  // --- MÁS PROPIEDADES DE RADICALES Y POTENCIAS ---
  { id: 33, text: "33. Simplifique la expresión con radicales: ∛(x⁶ y⁹)", options: ["x² y³", "x³ y²", "x y³", "x² y⁶"], answer: 0 },
  { id: 34, text: "34. Determine el valor simplificado de: (27)^(2/3)", options: ["3", "6", "9", "18"], answer: 2 },

  // --- REFORZAMIENTO MUESTRAL COMBINADO ---
  { id: 35, text: "35. ¿Qué número multiplicado por 4 y dividido para 6 da como resultado 12?", options: ["16", "18", "20", "24"], answer: 1 },
  { id: 36, text: "36. Un comerciante compra un objeto en $60 y lo vende en $90. ¿Cuál fue el porcentaje de ganancia sobre el costo?", options: ["30%", "33.3%", "50%", "66.6%"], answer: 2 },
  { id: 37, text: "37. La diferencia entre el 80% y el 50% de un número es 45. ¿Cuál es el número?", options: ["120", "150", "180", "200"], answer: 1 },
  { id: 38, text: "38. Complete la serie: 1, 4, 9, 16, 25, ___", options: ["30", "36", "40", "49"], answer: 1 },
  { id: 39, text: "39. Resolver: 15 + 3 × (8 - 2)", options: ["108", "33", "27", "45"], answer: 1 },
  { id: 40, text: "40. Si el 12% de un número es 36, ¿cuál es el 30% de dicho número?", options: ["72", "90", "108", "120"], answer: 1 },
  { id: 41, text: "41. Tres personas reúnen $180. La primera aporta el doble que la segunda, y la tercera aporta el triple que la segunda. ¿Cuánto aportó la segunda?", options: ["$30", "$40", "$60", "$90"], answer: 0 },
  { id: 42, text: "42. Un tanque está lleno hasta sus 3/4 partes. Si se le extraen 15 litros queda a la mitad. ¿Cuál es la capacidad del tanque?", options: ["50 litros", "60 litros", "75 litros", "80 litros"], answer: 1 },
  { id: 43, text: "43. Complete la secuencia: 2, 5, 10, 17, ___", options: ["24", "26", "28", "30"], answer: 1 },
  { id: 44, text: "44. Se tienen 5 piezas de tela de 20m cada una. Si se venden 3/5 del total, ¿cuántos metros quedan?", options: ["30 m", "40 m", "50 m", "60 m"], answer: 1 },
  { id: 45, text: "45. ¿Cuál es el menor de tres números enteros impares consecutivos cuya suma es 57?", options: ["15", "17", "19", "21"], answer: 1 },
  { id: 46, text: "46. Si 4 cuadernos valen lo mismo que 6 carpetas, y 3 carpetas cuestan $9, ¿cuánto cuesta un cuaderno?", options: ["$3", "$4.50", "$6", "$9"], answer: 1 },
  { id: 47, text: "47. Resolver: (1/2 + 1/3) ÷ (1/6)", options: ["1", "3", "5", "6"], answer: 2 },
  { id: 48, text: "48. Un grupo de 8 personas realiza una obra en 15 días. ¿Cuántas personas adicionales se necesitan para hacerla en 10 días?", options: ["2", "4", "6", "12"], answer: 1 },
  { id: 49, text: "49. Complete la serie: 1, 3, 7, 15, 31, ___", options: ["45", "55", "63", "65"], answer: 2 },
  { id: 50, text: "50. Resolver: 10 - [ 2 + 3 × (4 - 1) ]", options: ["-1", "1", "3", "5"], answer: 0 }
];

// VARIABLES DE ESTADO
let totalTime = 3000; // 50 minutos
let warnings = 0;
const MAX_WARNINGS = 3;
let timerInterval = null;
let isSubmitted = false;

// ELEMENTOS DOM
const startModal = document.getElementById("start-modal");
const startBtn = document.getElementById("start-btn");
const mainContainer = document.getElementById("main-container");
const timeDisplay = document.getElementById("time-display");
const warningCount = document.getElementById("warning-count");
const questionsList = document.getElementById("questions-list");
const quizForm = document.getElementById("quiz-form");
const quizContainer = document.getElementById("quiz-container");
const resultCard = document.getElementById("result-card");
const scoreText = document.getElementById("score-text");
const percentageText = document.getElementById("percentage-text");
const feedbackMessage = document.getElementById("feedback-message");
const submissionReason = document.getElementById("submission-reason");

// RENDERIZAR PREGUNTAS
function renderQuestions() {
  const savedAnswers = JSON.parse(localStorage.getItem("num_quiz_answers") || "{}");

  questionsList.innerHTML = questions.map((q, index) => {
    const isChecked = (optIndex) => savedAnswers[`q${index}`] == optIndex ? 'checked' : '';
    return `
      <div class="question-block">
        <p class="question-title">${q.text}</p>
        <div class="options-group">
          ${q.options.map((opt, optIndex) => `
            <label class="option-label">
              <input type="radio" name="q${index}" value="${optIndex}" ${isChecked(optIndex)} onchange="saveAnswer('q${index}',${optIndex})">
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// PERSISTENCIA
window.saveAnswer = function(questionKey, val) {
  const savedAnswers = JSON.parse(localStorage.getItem("num_quiz_answers") || "{}");
  savedAnswers[questionKey] = val;
  localStorage.setItem("num_quiz_answers", JSON.stringify(savedAnswers));
};

// CRONÓMETRO
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

// SEGURIDAD: DETECCIÓN DE CAMBIO DE PESTAÑA / VENTANA
function handleSecurityViolation() {
  if (isSubmitted) return;

  warnings++;
  warningCount.textContent = `${warnings} / ${MAX_WARNINGS}`;

  if (warnings >= MAX_WARNINGS) {
    submitQuiz("Envío automático por violar las normas de supervisión (múltiples cambios de pestaña/foco).");
  } else {
    alert(`¡ADVERTENCIA ${warnings}/${MAX_WARNINGS}!\nNo está permitido salir de la pestaña del examen.`);
  }
}

// SEGURIDAD: RESTRICCIÓN DE TECLAS Y ACCIONES
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

// INICIAR EVALUACIÓN CON PANTALLA COMPLETA
startBtn.addEventListener("click", () => {
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

// ENVÍO Y EVALUACIÓN
function submitQuiz(reason = "Entrega regular por parte del estudiante.") {
  if (isSubmitted) return;
  isSubmitted = true;

  clearInterval(timerInterval);
  window.removeEventListener("blur", handleSecurityViolation);

  let score = 0;
  const savedAnswers = JSON.parse(localStorage.getItem("num_quiz_answers") || "{}");

  questions.forEach((q, index) => {
    const selected = savedAnswers[`q${index}`];
    if (selected !== undefined && parseInt(selected) === q.answer) {
      score++;
    }
  });

  const percentage = ((score / questions.length) * 100).toFixed(1);

  quizContainer.classList.add("hidden");
  document.getElementById("timer-card").classList.add("hidden");
  resultCard.classList.remove("hidden");

  scoreText.textContent = `${score} / ${questions.length}`;
  percentageText.textContent = `${percentage}%`;
  submissionReason.textContent = `Motivo de cierre: ${reason}`;

  if (percentage >= 80) {
    feedbackMessage.textContent = "¡Excelente desempeño! Tienes una agilidad matemática y dominio de propiedades de primer nivel.";
    feedbackMessage.style.color = "var(--success-color)";
  } else if (percentage >= 60) {
    feedbackMessage.textContent = "Buen trabajo, pero te conviene repasar simplificación de radicales, potencias y regla de tres.";
    feedbackMessage.style.color = "var(--accent-color)";
  } else {
    feedbackMessage.textContent = "Se requiere más práctica. Refuerza leyes de exponentes, porcentajes, razones y ecuaciones.";
    feedbackMessage.style.color = "var(--danger-color)";
  }

  localStorage.removeItem("num_quiz_answers");
}

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitQuiz("Examen entregado manualmente.");
});