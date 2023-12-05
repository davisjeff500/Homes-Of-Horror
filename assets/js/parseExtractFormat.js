const parsedData = JSON.parse(jsonData);

//Relevant content on Wikipedia is often found in the 'extract' property of the 'pages' object
const pages = parsedData.query.pages;
const pageId = Object.keys(pages)[0];
const content = pages[pageId].extract;

//Create the html sections by headings

const sections = content.split(/===\s*(.*?)\s*===/g);

//now generate html of the sections ectracted and append
const container = document.getElementById('your-container-id'); // Replace with your container ID
sections.forEach((section, index) => {
  const heading = document.createElement('h2');
  heading.textContent = section.trim(); 

  const sectionContent = document.createElement('p');
  sectionContent.textContent = sections[index + 1].trim(); // Assuming the next element is the content

  container.appendChild(heading);
  container.appendChild(sectionContent);

  // Skip the next iteration since it's the content we already added
  index++;
});
