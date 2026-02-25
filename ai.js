// Basic rule-based AI
function askAI() {
  const input = document.getElementById("user-input").value.trim();
  const chat = document.getElementById("ai-chat");

  if (!input) return;

  // Display user message
  chat.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

  let reply = "I am not sure about that. Try another question!";

  if (input.includes("oracle")) reply = "Oracle is a leading cloud & software company.";
  if (input.includes("cloud")) reply = "Cloud computing provides scalable, on-demand resources.";
  if (input.includes("ai")) reply = "AI helps automate decisions, predictions & workflows.";

  // Display reply
  chat.innerHTML += `<p><strong>AI:</strong> ${reply}</p>`;

  document.getElementById("user-input").value = "";
}