function handleSubmit(event) {
    event.preventDefault();
    displayUserData();
}

function displayUserData() {
    var userDataDiv = document.getElementById("userData");
    userDataDiv.innerHTML = `
        <h3>User Data:</h3>
        <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
        <p><strong>Preferred Username:</strong> ${document.getElementById("username").value}</p>
        <p><strong>Age:</strong> ${document.getElementById("age").value}</p>
        <p><strong>Gender:</strong> ${document.getElementById("gender").value}</p>
        <p><strong>Password:</strong> ${document.getElementById("password").value}</p>
        <p><strong>Email:</strong> ${document.getElementById("email").value}</p>
        <p><strong>Address:</strong> ${document.getElementById("address").value}</p>
        <p><strong>Interests:</strong> ${document.getElementById("interests").value}</p>
    `;
}

function applyRedBorder(inputElement) {
    if (inputElement.value === "") {
        inputElement.style.border = "2px solid red";
    } else {
        inputElement.style.border = "1px solid #ccc";
    }
}

function applyGreenBorder(inputElement) {
    inputElement.style.border = "2px solid #00FF7F";
}
