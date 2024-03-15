function serializeForm(formNode) {
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;

      return { name, value };
    });
  const jsonData = JSON.stringify(data);
  dataContainer.textContent = jsonData;
  formContainer.append(dataContainer);
}

function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(formElement);
}

const formElement = document.getElementById("form");
const formContainer = document.querySelector(".form__container");
const dataContainer = document.createElement("div");
formElement.addEventListener("submit", handleFormSubmit);
