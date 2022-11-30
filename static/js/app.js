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
