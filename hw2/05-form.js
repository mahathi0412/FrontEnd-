const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const registrationStatusInput = document.querySelector("#registration-status");
const fullTimeCourseInputs = document.querySelectorAll('input[name="full-time-course"]');
const additionalInfoInput = document.querySelector("#additional-info");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    registrationStatus: registrationStatusInput.value,
    fullTimeCourse: [],
    additionalInfo: additionalInfoInput.value
  };

  fullTimeCourseInputs.forEach(function (input) {
    if (input.checked) {
      formData.fullTimeCourse.push(input.value);
    }
  });

  console.group("********** Form Submission **********");
  console.log("Name:", formData.name);
  console.log("Email:", formData.email);
  console.log("Registration Status:", formData.registrationStatus);
  console.log("Full-time Course:", formData.fullTimeCourse.join(", "));
  console.log("Additional Info:", formData.additionalInfo);
  console.groupEnd();
});
