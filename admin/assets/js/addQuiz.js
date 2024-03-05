function addQuestion() {
  var questionList = document.getElementById("questionList");
  var li = document.createElement("li");
  var inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Enter question...";
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";
  deleteButton.onclick = function() {
      li.remove();
  };
  li.appendChild(inputField);
  li.appendChild(deleteButton);
  questionList.appendChild(li);
}

document.getElementById("examForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var formData = {
      examName: document.getElementById("examName").value,
      examDescription: document.getElementById("examDescription").value,
      examType: document.getElementById("examType").value,
      questions: []
  };

  var questionItems = document.querySelectorAll("#questionList li input[type='text']");
  questionItems.forEach(function(item) {
      formData.questions.push(item.value);
  });

  console.log(formData); // You can send this data to server-side for processing

  // Reset form after submission
  document.getElementById("examForm").reset();
  document.getElementById("questionList").innerHTML = ""; // Clear question list
});
