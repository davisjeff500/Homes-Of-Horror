
// Function to fetch data from the Wikipedia API and update the text area
function fetchData() {
  // Replace this URL with the actual Wikipedia API endpoint
  const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&titles=Halloween%20(1978%20film)&formatversion=2&rvprop=content&rvslots=*";

  // Select the text area to display the Wikipedia API data
  const jsonDisplayTextArea = document.getElementById("json-display");

  // Fetch data from the Wikipedia API
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Format the JSON data
      const formattedData = JSON.stringify(data, null, 2);

      // Update the content of the text area
      jsonDisplayTextArea.textContent = formattedData;

      
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      // Handle errors here
    });
}

// Call the function to fetch and display Wikipedia data
fetchData();