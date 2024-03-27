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
  getData();
}

const formElement = document.getElementById("form");
const formContainer = document.querySelector(".form__container");
const dataContainer = document.createElement("div");
formElement.addEventListener("submit", handleFormSubmit);

// 2.6

async function getData() {
  return fetch("./res.json")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      alert(res);
    });
}
