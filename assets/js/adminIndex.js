// Function to parse URL parameters
function getURLParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Extract exam details from URL parameters
var examName = getURLParameter('examName');
var description = getURLParameter('description');
var examType = getURLParameter('examType');
var questions = getURLParameter('questions').split(',');

// Create exam object
var examDetails = {
    examName: examName,
    description: description,
    examType: examType,
    questions: questions
};

// Function to populate the table with quiz data from local storage
function populateQuizTable() {
    const tableBody = document.getElementById('testTableBody');
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
  
    // Clear existing table rows
    tableBody.innerHTML = '';
  
    // Populate the table with quiz data
    quizzes.forEach(function(quiz, index) {
      const row = `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${quiz.name}</td>
                    <td>${quiz.description}</td>
                    <td>${quiz.type}</td>
                    <td>${quiz.file}</td>
                  </tr>`;
      tableBody.innerHTML += row;
    });
  }
  
  // Call the function to populate the table when the page loads
populateQuizTable();
