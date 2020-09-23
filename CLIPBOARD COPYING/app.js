const input = document.querySelector("#input");
const btn = document.querySelector("button.btn");
btn.addEventListener("click", () => {
    input.select();
    document.execCommand("copy");
    alert("Copied");
});