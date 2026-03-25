</> JavaScript

function updateStatus(button) {
  const statusText = button.previousElementSibling;

  if (statusText.innerText.includes("Open")) {
    statusText.innerHTML = 'Status: <strong style="color:orange;">In Progress</strong>';
    button.innerText = "Mark as Done";
  } else {
    statusText.innerHTML = 'Status: <strong style="color:green;">Done</strong>';
    button.innerText = "Completed";
    button.disabled = true;
  }
}