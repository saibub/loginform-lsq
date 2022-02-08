let pattern = "";
let errorMsg = "";
const regex_email = /^$|^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const regex_password = /^[a-zA-Z0-9]{8,}$/;
const regex_name = /^$|^[A-Za-z\s]+$/;


function getPattern(inputId) {
    if (inputId == "password") {
        pattern = regex_password;
        errorMsg = "Incorrect Password";
    } else if (inputId == "email") {
        pattern = regex_email;
        errorMsg = "Incorrect Email";
    } else {
        pattern = regex_name;
        errorMsg = "Incorrect Name";
    }

}

function validateInput(e) {
    const inputId = e.id;
    const element = document.getElementById(inputId)
    const value = element.value;
    getPattern(inputId);

    if (!pattern.test(value)) {
        alert(errorMsg);
        element.style.borderColor = "red";
    } else {
        element.style.borderColor = "#d9d9d9";
    }
}