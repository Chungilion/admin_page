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
          displayExamInfo();
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

// Display exam information in the display section
function displayExamInfo() {
  var examName = document.getElementById("examName").value;
  var examDescription = document.getElementById("examDescription").value;
  var examType = document.getElementById("examType").value;

  document.getElementById("displayExamName").innerText = examName;
  document.getElementById("displayExamDescription").innerText = examDescription;
  document.getElementById("displayExamType").innerText = examType;

  var questionElements = document.querySelectorAll(".question input[type='text']");
  var displayQuestionList = document.getElementById("displayQuestionList");
  displayQuestionList.innerHTML = ""; // Clear previous questions

  questionElements.forEach(function(questionElement) {
      var li = document.createElement("li");
      li.textContent = questionElement.value;
      displayQuestionList.appendChild(li);
  });

  // Show the display section
  document.getElementById("displaySection").style.display = "block";
}

document.getElementById("examForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Print data to console for now (you can replace this with your logic)
  console.log("Thông tin kỳ thi:");
  console.log("Tên kỳ thi:", document.getElementById("examName").value);
  console.log("Mô tả:", document.getElementById("examDescription").value);
  console.log("Loại kỳ thi:", document.getElementById("examType").value);
  console.log("Danh sách câu hỏi:", document.querySelectorAll(".question input[type='text']").values());

  // Reset the form after submission
  document.getElementById("examForm").reset();
  document.getElementById("questionContainer").innerHTML = ""; // Clear question container
  document.getElementById("displaySection").style.display = "none"; // Hide the display section
});
