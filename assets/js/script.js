// Mainpage variables
var stateSel = document.getElementById('state')
var searchButton = document.getElementById('sButton')

// Searchpage variables
var searchContent = document.getElementById('results')


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

searchButton.addEventListener('click', doSearch);