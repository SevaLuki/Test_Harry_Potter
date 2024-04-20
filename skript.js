document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answers = {
      q1: document.querySelector('textarea[name="q1"]').value.trim().toLowerCase(),
      q2: document.querySelector('input[name="q2"]:checked').value,
      q3: document.querySelector('input[name="q3"]:checked').value,
      q4: document.querySelector('input[name="q4"]').value.trim().toLowerCase(),
      q5: document.querySelector('input[name="q5"]:checked').value,
      q6: document.querySelector('input[name="q6"]').value.trim().toLowerCase()
    };
  
    const correctAnswers = {
      q1: 'джеймс и лили',
      q2: 'b',
      q3: 'a',
      q4: 'волка',
      q5: 'b',
      q6: 'малфой'
    };
    console.log('answers', answers)
    console.log('correctAnswers', correctAnswers)
  
    let correctCount = 0;
    for (const key in answers) {
      if (answers[key] === correctAnswers[key]) {
        correctCount++;
      }
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Вы ответили правильно на ${correctCount} из 6 вопросов.`;
  });