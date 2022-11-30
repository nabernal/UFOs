// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create function that builds a table
function buildTable(data) {
    tbody.html("");
}


// Create a forEach function
data.forEach((dataRow) => {
// create a variable that will append a row to the table body
    let row = tbody.append("tr");
// add code to loop through each field in the dataRow argument    
    Object.values(dataRow).forEach((val) => {
        // append each value of the object to a cell in the table
        let cell = row.append("td");
        cell.text(val);
        }
    );
});

// Create a "handleClick" function
function handleClick() {
    let date = d3.select("#datetime").property('value');
}

// set a default filter and save it to a new variable.
let filteredData = tableData;

// Use If-Statement to have JavaScript check for a date
if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
}

// Pass filteredData as an argument for handleClic() function
buildTable(filteredData);

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
