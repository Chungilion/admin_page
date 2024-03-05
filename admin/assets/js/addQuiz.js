let questionCount = 0;

function addQuestion() {
    questionCount++;

    const container = document.getElementById('questionsContainer');

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionLabel = document.createElement('label');
    questionLabel.textContent = 'Câu hỏi ' + questionCount + ': ';
    questionDiv.appendChild(questionLabel);

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.name = 'question' + questionCount;
    questionDiv.appendChild(questionInput);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.onclick = function() {
        container.removeChild(questionDiv);
    };
    questionDiv.appendChild(deleteButton);

    container.appendChild(questionDiv);
}

document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy thông tin từ form
    const examName = document.getElementById('examName').value;
    const examDescription = document.getElementById('examDescription').value;
    const examType = document.getElementById('examType').value;
    const questions = [];

    document.querySelectorAll('[name^="question"]').forEach(input => {
        questions.push(input.value);
    });

    // Hiển thị thông tin kỳ thi
    displayExamInfo(examName, examDescription, examType, questions);
});

function displayExamInfo(name, description, type, questions) {
    const displayContainer = document.getElementById('examDisplay');
    displayContainer.innerHTML = '';

    const namePara = document.createElement('p');
    namePara.textContent = 'Tên Kỳ Thi: ' + name;
    displayContainer.appendChild(namePara);

    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = 'Mô Tả: ' + description;
    displayContainer.appendChild(descriptionPara);

    const typePara = document.createElement('p');
    typePara.textContent = 'Loại Kỳ Thi: ' + type;
    displayContainer.appendChild(typePara);

    if (questions.length > 0) {
        const questionsHeading = document.createElement('h3');
        questionsHeading.textContent = 'Danh Sách Câu Hỏi:';
        displayContainer.appendChild(questionsHeading);

        const questionsList = document.createElement('ul');
        questions.forEach((question, index) => {
            const questionItem = document.createElement('li');
            questionItem.textContent = 'Câu hỏi ' + (index + 1) + ': ' + question;
            questionsList.appendChild(questionItem);
        });
        displayContainer.appendChild(questionsList);
    }
}
