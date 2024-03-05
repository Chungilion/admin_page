// Import questions from Excel file
function importQuestions() {
  var fileInput = document.getElementById('excelFile');
  var file = fileInput.files[0];
  
  if (file) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
          var data = new Uint8Array(e.target.result);
          var workbook = XLSX.read(data, { type: 'array' });

          // Assume the first sheet contains questions
          var sheetName = workbook.SheetNames[0];
          var sheet = workbook.Sheets[sheetName];

          // Convert Excel data to array of questions
          var questions = XLSX.utils.sheet_to_json(sheet, { header: 'A' });
          displayQuestions(questions);
      };
      
      reader.readAsArrayBuffer(file);
  }
}

// Display questions on the form
function displayQuestions(questions) {
  var questionContainer = document.getElementById("questionContainer");
  questionContainer.innerHTML = ""; // Clear previous questions

  questions.forEach(function(question, index) {
      var div = document.createElement("div");
      div.classList.add("question");

      var inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = question.question; // Assuming question is a property in the Excel file
      div.appendChild(inputField);

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Xóa";
      deleteButton.onclick = function() {
          div.remove();
      };
      div.appendChild(deleteButton);

      questionContainer.appendChild(div);
  });
}

document.getElementById("examForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get other form data
  var examName = document.getElementById("examName").value;
  var examDescription = document.getElementById("examDescription").value;
  var examType = document.getElementById("examType").value;

  // Get questions from the form
  var questions = [];
  var questionElements = document.querySelectorAll(".question input[type='text']");
  questionElements.forEach(function(questionElement) {
      questions.push(questionElement.value);
  });

  // Print data to console for now (you can replace this with your logic)
  console.log("Tên kỳ thi:", examName);
  console.log("Mô tả:", examDescription);
  console.log("Loại kỳ thi:", examType);
  console.log("Danh sách câu hỏi:", questions);

  // Reset the form after submission
  document.getElementById("examForm").reset();
  document.getElementById("questionContainer").innerHTML = ""; // Clear question container
});
