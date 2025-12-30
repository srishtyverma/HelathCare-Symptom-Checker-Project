function submitSymptoms() {
  const symptoms = document.getElementById("symptoms").value.trim();

  if (!symptoms) {
    alert("Please enter your symptoms.");
    return;
  }

  document.getElementById("result").innerHTML = `
    <strong>Analyzing...</strong><br><br>
    <em>Please wait while we check your symptoms using AI...</em>
  `;

fetch(`${window.location.origin}/check_symptoms`, 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ symptoms: symptoms })
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById("result").innerHTML = `<strong>Error:</strong> ${data.error}`;
      } else {
        document.getElementById("result").innerHTML = `
  <strong>Extracted Symptoms:</strong> ${Array.isArray(data.cleaned_symptoms) ? data.cleaned_symptoms.join(", ") : data.cleaned_symptoms}<br><br>

  <strong>Predicted Conditions:</strong>
  <ul>${
  Array.isArray(data.conditions) 
    ? data.conditions.map(c => `<li>${c}</li>`).join("") 
    : `<li>${data.conditions}</li>`
}</ul>
`;

      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById("result").innerHTML = `<strong>Something went wrong.</strong>`;
    });
}

function startVoiceInput() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice input not supported in this browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("symptoms").value = transcript;
  };

  recognition.onerror = (event) => {
    alert("Voice input error: " + event.error);
  };
}
