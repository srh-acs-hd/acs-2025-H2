const init = () => {
  // initialize the listener for the search button and trigger the search, when clicked
  console.log('initializing the event listeners')
  document.getElementById("prompt").addEventListener('click', promptLLM)
}

const promptLLM = async () => {
  const text = document.getElementById('input').value
  const payload = { prompt: text}
  const response = await fetch('/api/gemini', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  const result = await response.json()

  const resultArea = document.getElementById('result')
  resultArea.innerText = result.answer
}

