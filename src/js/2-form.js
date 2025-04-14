
let formData = { email: "", message: "" };
const LS_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");


if (localStorage.getItem(LS_KEY)) {
    formData = JSON.parse(localStorage.getItem(LS_KEY));
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}


form.addEventListener('input', handleInput);

function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    if (elements.email.value.trim() == 0 || elements.message.value.trim() == 0) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem(LS_KEY);
    formData = { email: "", message: "" };
    form.reset();
}

