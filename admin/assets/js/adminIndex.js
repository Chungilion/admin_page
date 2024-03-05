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
