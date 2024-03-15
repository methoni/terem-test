// 2.1

const btn_warning = document.querySelector(".btn-warning");
const header = document.querySelector(".header");

function switchHeader() {
  header.classList.toggle("hidden");
}

btn_warning.addEventListener("click", switchHeader);

// 2.2

const btn_success = document.querySelector(".btn-success");
const center = document.querySelector(".center");

function switchBlocks() {
  center.classList.toggle("moved");
}

btn_success.addEventListener("click", switchBlocks);

// 2.3

window.addEventListener("load", () => {
  const modal = new bootstrap.Modal(document.querySelector("#myModal"));
  modal.show();
});
