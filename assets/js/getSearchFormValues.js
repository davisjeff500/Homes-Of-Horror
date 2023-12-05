var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&titles=' + searchInputVal ;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
