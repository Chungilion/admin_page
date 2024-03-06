function submitForm() {
  const examName = document.getElementById('examName').value;
  const examDescription = document.getElementById('examDescription').value;
  const examType = document.getElementById('examType').value;
  const questionList = document.getElementById('questionList').value;

  // Create a string containing the information to display
  const displayText = `
      <h2>Exam Information:</h2>
      <p><strong>Exam Name:</strong> ${examName}</p>
      <p><strong>Exam Description:</strong> ${examDescription}</p>
      <p><strong>Exam Type:</strong> ${examType}</p>
      <p><strong>Question List:</strong> ${questionList}</p>
  `;

  // Update the displayInfo div with the information
  document.getElementById('displayInfo').innerHTML = displayText;
}
