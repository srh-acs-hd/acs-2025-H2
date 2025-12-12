const init = () => {
  // initialize the listener for the search button and trigger the search, when clicked
  console.log('initializing the event listeners')
  document.getElementById("trends-button").addEventListener('click', readTrends)
}


const readTrends = async () =>{
  const response = await fetch('/api/google-trends')
  const trends = await response.json()  
  let html = ''
  trends.results.forEach(trend => {
    html += `<p><b>${trend.Top_Term}</b> (${trend.Day.value})</p>`
  })
  const resultsDiv = document.getElementById('trends-results')
  resultsDiv.innerHTML = html
}