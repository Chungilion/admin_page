// Example JavaScript for handling quiz form submission
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form data
    const quizName = document.getElementById('quizName').value;
    const quizDescription = document.getElementById('quizDescription').value;
    const quizType = document.getElementById('quizType').value;
    const questionsFile = document.getElementById('questionsFile').files[0];
  
    // Construct quiz object
    const quiz = {
      name: quizName,
      description: quizDescription,
      type: quizType,
      file: questionsFile ? questionsFile.name : 'N/A' // Use file name if available, otherwise mark as N/A
    };
  
    // Save quiz data to local storage
    let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    quizzes.push(quiz);
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
  
    // Optionally, you can clear the form after submission
    document.getElementById('quizForm').reset();
  
    // You can provide feedback to the user that the quiz has been added successfully
    alert('Quiz added successfully!');
  
    // Redirect to admin page
    window.location.href = './admin.html';
  });
  