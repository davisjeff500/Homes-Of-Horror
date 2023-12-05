// Mainpage variables
var stateSel = document.getElementById('state')
var searchButton = document.getElementById('sButton')

// Searchpage variables
var searchContent = document.getElementById('results')
var searchCheck = document.querySelector('.searchCheck')


// Universal (probably) variables
var statesN = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

var statesA = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

console.log(statesN);
console.log(statesN.length);

for (var i = 0; i < statesN.length; i++){
    console.log(i)
    
}


function doSearch() {
    // add a check for if there was any input
    // PUT ALL API FETCH STUFF HERE, and make sure the end results that we need are stored in a variable named fResults (if you want a better variable name change it but leave a comment letting us know)
    console.log("it worked and transferred info to new page")
    window.location.replace = 'search-results.html';
    console.log("it worked and transferred info to new page")
    // loadResults(fResults);

}

// function loadResults() {
//     // if (fResults "doesnt have anything ill look up proprer syntax later") {
//     //     searchContent.textContent = 'Sorry no results returned'
//     // } else {
//         // make a ul element and append it to the div and make the text content and other content however needed, I (ophi) will take car of the styling later
//     }

// }

var mapLink = 'https://www.toptal.com/designers/htmlarrows/symbols/'

if (searchButton) {
    searchButton.addEventListener('click', doSearch);
}

if(searchCheck) {
    var ulE = document.createElement('ul');
    ulE.setAttribute('class', 'flex flex-col')
    searchContent.appendChild(ulE);

    for (var i = 0; i < 4; i++) {
        // making a list item appended to the ul with a title, styling the font and then adding a description and map link
        // create list item, append to ul and add text
        var li1 = document.createElement('li');
        li1.setAttribute('class', 'bg-red-300 w-11/12 self-center cusResult text-4xl font-bold border-4 border-red-700 rounded');
        ulE.appendChild(li1);
        li1.textContent = 'Joe Mama';
        // create description, set attributes and append to list item
        var words = document.createElement('p');
        words.setAttribute('class', 'cusDescription');
        li1.appendChild(words);
        words.textContent = 'Friday the 13th is an American horror franchise that comprises twelve slasher films, a television series, novels, comic books, video games, and tie‑in merchandise. The franchise mainly focuses on the fictional character Jason Voorhees, who was thought to have drowned as a boy at Camp Crystal Lake due to the negligence of the camp staff. Decades later, the lake is rumored to be "cursed" and is the setting for a series of mass murders. Jason is featured in all of the films, as either the killer or the motivation for the killings. The original film, created to cash in on the success of Halloween (1978),[1] was written by Victor Miller and was produced and directed by Sean S. Cunningham. The films have grossed over $468 million at the box-office worldwide.';
        // creates map link, sets attributes and appends to list item
        var mapE = document.createElement('a');
        mapE.setAttribute('href', mapLink);
        mapE.setAttribute('class', 'mapLink');
        li1.appendChild(mapE)
        mapE.textContent = 'test'
    }

    var liE = document.querySelectorAll('li');
    // liE.setAttribute('') 
    console.log(liE);
}