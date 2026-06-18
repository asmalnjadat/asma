const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;

    if (!name || !studentId || !email || !course) {
        message.textContent = "Please fill all fields.";
        message.style.color = "red";
        return;
    }

    const studentData = {
        name: name,
        studentId: studentId,
        email: email,
        course: course
    };

    localStorage.setItem("studentData", JSON.stringify(studentData));

    message.textContent = "Registration Successful!";
    message.style.color = "green";

    form.reset();
});
