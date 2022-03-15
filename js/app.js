// add event listener on enter button
document
    .getElementById("grade-input")
    .addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            document.getElementById("result").click();
        }
    });

const gradeResult = () => {
    // console.log('Hello');
    const gradeMessage = document.getElementById('grade-message');
    const gradeInput = document.getElementById('grade-input');
    const gradeInputValue = gradeInput.value;
    // console.log(gradeInputValue);

    gradeInput.value = '';
    if (gradeInputValue > 100) {
        gradeMessage.innerHTML = `<p class="text-center text-danger">Marks should not be more than 100.</p>`;
        return;
    }
    else if (gradeInputValue.length == 0) {
        gradeMessage.innerHTML = `<p class="text-center text-danger">Please input your marks first...</p>`;
        return;
    }
    else if (gradeInputValue < 0) {
        gradeMessage.innerHTML = `<p class="text-center text-danger">Marks should not be less than 0</p>`;
        return;
    }
    else if (gradeInputValue <= 100 && gradeInputValue > 80) {
        gradeMessage.innerHTML = `<p class="text-center text-success">Congrats! Your grade is A+</p>`;
        return;
    }
    else if (gradeInputValue < 80 && gradeInputValue >= 70) {
        gradeMessage.innerHTML = `<p class="text-center text-success">Well Done! Your grade is A</p>`;
        return;
    }
    else if (gradeInputValue < 70 && gradeInputValue >= 60) {
        gradeMessage.innerHTML = `<p class="text-center text-success">Fantastic! Your grade is A-</p>`;
        return;
    }
    else if (gradeInputValue < 60 && gradeInputValue >= 50) {
        gradeMessage.innerHTML = `<p class="text-center text-success">Inpressive! Your grade is B.</p>`;
        return;
    }
    else if (gradeInputValue < 50 && gradeInputValue >= 40) {
        gradeMessage.innerHTML = `<p class="text-center text-success">Not bad! Your grade is C</p>`;
        return;
    }
    else if (gradeInputValue < 40 && gradeInputValue >= 33) {
        gradeMessage.innerHTML = `<p class="text-center text-success">Good! Your grade is D</p>`;
        return;
    }
    else if (gradeInputValue < 33 && gradeInputValue >= 0) {
        gradeMessage.innerHTML = `<p class="text-center text-danger">Opps! Your are failed</p>`;
        return;
    }
    else {
        gradeMessage.innerHTML = `<p class="text-center text-danger">Sorry! Unknown Error. Try again</p>`;
    }
}


const calculateInterest = () => {
    const capitalInput = document.getElementById('capital-input');
    const capitalInputValue = capitalInput.value;

    const percentageInput = document.getElementById('percentage-input');
    const percentageInputValue = percentageInput.value;

    const yearInput = document.getElementById('year-input');
    const yearInputValue = yearInput.value;

    const message = document.getElementById('interest-message');

    const interest = (capitalInputValue * percentageInputValue * yearInputValue) / 100;

    capitalInput.value = '';
    percentageInput.value = '';
    yearInput.value = '';

    if(capitalInputValue.length == 0 || percentageInputValue.length == 0 || yearInputValue.length == 0){
        message.innerHTML = `
        <p class="text-center text-danger">Please fill all the input first...</p>
        `;
        return;
    }
    else if (capitalInputValue < 0 || percentageInputValue < 0 || yearInputValue < 0) {
        message.innerHTML = `<p class="text-center text-danger">Please input only positive number</p>`;
        return;
    }
    else if (capitalInputValue == 0 || percentageInputValue == 0 || yearInputValue == 0) {
        message.innerHTML = `<p class="text-center text-danger">Numbers should not be 0</p>`;
        return;
    }
    else{
        message.innerHTML = `
        <p class="text-center">Interest is <span class="text-danger">${interest}</span> taka</p>
        `;
    }
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}