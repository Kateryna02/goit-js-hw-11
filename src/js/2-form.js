

const formBox = document.querySelector(".feedback-form");

formBox.addEventListener('input', (event) => {
    const emailValue = formBox.elements.email.value.trim();
    const messageValue = formBox.elements.message.value.trim();
    const formInfo = {
        formEmail: emailValue,
        formMassage: messageValue,
    }
    const formInfoStringi = JSON.stringify(formInfo);
    localStorage.setItem("feedback-form-state", formInfoStringi);

});
formBox.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = formBox.elements.email.value.trim();
    const messageValue = formBox.elements.message.value.trim();
    const formInfo = {
        formEmail: emailValue,
        formMassage: messageValue,
    }
    if (!emailValue && !messageValue) {
        alert('Please fill in the email and massage fields');
    }
    else {
        localStorage.removeItem("feedback-form-state");
        formBox.reset();
        return formInfo;
    }



});
function loadForm() {
    const saveForm = localStorage.getItem("feedback-form-state");
    const parstData = JSON.parse(saveForm);
    console.log(parstData);
    if (saveForm) {
        formBox.email.value = parstData.formEmail;
        formBox.message.value = parstData.formMassage;
    }

}
loadForm();
