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
  

// Function to display exam details in the table
/*function displayExamDetails(examDetails) {
    var tableBody = document.getElementById('examTableBody');
    var newRow = tableBody.insertRow();

    var cellIndex = newRow.insertCell(0);
    var cellName = newRow.insertCell(1);
    var cellDescription = newRow.insertCell(2);
    var cellExamType = newRow.insertCell(3);
    var cellQuestions = newRow.insertCell(4);

    cellIndex.innerHTML = tableBody.rows.length - 1;
    cellName.innerHTML = examDetails.examName;
    cellDescription.innerHTML = examDetails.description;
    cellExamType.innerHTML = examDetails.examType;
    cellQuestions.innerHTML = examDetails.questions.join(', ');

    // Save exam details to local storage
    var records = JSON.parse(localStorage.getItem('examRecords')) || [];
    records.push(examDetails);
    localStorage.setItem('examRecords', JSON.stringify(records));
}*/

// Load exam details from local storage and display in the table
function loadExamDetailsFromLocalStorage() {
    var records = JSON.parse(localStorage.getItem('examRecords')) || [];
    records.forEach(function(record) {
        displayExamDetails(record);
    });
}

// Display exam details
displayExamDetails(examDetails);

// Load exam details from local storage on page load
loadExamDetailsFromLocalStorage();
