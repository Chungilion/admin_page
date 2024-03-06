function submitForm() {
  const examName = document.getElementById('examName').value;
  const examDescription = document.getElementById('examDescription').value;
  const examType = document.getElementById('examType').value;
  const questionList = document.getElementById('questionList').value;


  const displayText = `
      <h2>Thông tin bài kiểm tra:</h2>
      <p><strong>Tên bài kiểm tra:</strong> ${examName}</p>
      <p><strong>Miêu tả:</strong> ${examDescription}</p>
      <p><strong>Loại bài kiểm tra:</strong> ${examType}</p>
      <p><strong>Danh sách câu hỏi:</strong> ${questionList}</p>
  `;

  document.getElementById('displayInfo').innerHTML = displayText;
}
