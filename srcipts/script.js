let loveCount = 0;
let balance = 100;
let copyCount = 0;


function copyNumber(num) {
  navigator.clipboard.writeText(num);
  copyCount++;
  document.getElementById("copyCount").textContent = copyCount;
  alert(`Copied: ${num}`);
}


function makeCall(name, num) {
  if (balance >= 20) {
    balance -= 20;
    document.getElementById("balance").textContent = balance;
    alert(`Calling ${name} at ${num}...`);
    addHistory(name, num);
  } else {
    alert("Insufficient balance!");
  }
}


function addHistory(name, num) {
  const time = new Date().toLocaleTimeString();
  const li = document.createElement("li");
  li.textContent = `${name} (${num}) - ${time}`;
  document.getElementById("historyList").prepend(li);
}


function clearHistory() {
  if (confirm("Are you sure you want to clear call history?")) {
    document.getElementById("historyList").innerHTML = "";
  }
}


function toggleLove(btn) {
  if (btn.textContent === "♡") {
    btn.textContent = "❤️";
    btn.classList.remove("text-gray-400");
    btn.classList.add("text-red-500");
    loveCount++;
  } else {
    btn.textContent = "♡";
    btn.classList.remove("text-red-500");
    btn.classList.add("text-gray-400");
    loveCount--;
  }
  document.getElementById("loveCount").textContent = loveCount;
}
