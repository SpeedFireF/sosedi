const testButton = document.querySelector("#test-button");
const clickCount = document.querySelector("#click-count");
const status = document.querySelector("#status");

let count = 0;

testButton.addEventListener("click", () => {
  count += 1;
  clickCount.textContent = count;
  status.textContent = `JavaScript works! Button clicked ${count} ${count === 1 ? "time" : "times"}.`;
  status.classList.add("success");
});
