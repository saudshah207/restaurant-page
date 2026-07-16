import "./contact.css";

function getInputField(id, type) {
  let input;

  if (type) {
    input = document.createElement("input");
    input.type = type;
  } else input = document.createElement("textarea");

  input.required = true;
  input.name = id;
  input.id = id;

  return input;
}

function getFormSection(label, id, inputType = null) {
  const labelElement = document.createElement("label"),
    labelTextElement = document.createElement("span");

  labelTextElement.classList.add("label-text");
  labelTextElement.textContent = label;

  labelElement.htmlFor = id;

  const inputElement = getInputField(id, inputType);
  labelElement.append(labelTextElement, inputElement);

  return labelElement;
}

export default function () {
  const form = document.createElement("form");

  const nameSection = getFormSection("Name", "name", "text"),
    emailSection = getFormSection("Email", "email", "email"),
    messageSection = getFormSection("Message", "message"),
    submitButton = document.createElement("button");

  submitButton.textContent = "Submit";
  submitButton.classList.add("button");

  form.append(nameSection, emailSection, messageSection, submitButton);

  return form;
}