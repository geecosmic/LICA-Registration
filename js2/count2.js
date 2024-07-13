const scriptURL = 'https://script.google.com/macros/s/AKfycbyKKf8AbbQbtMUNu92LIiYLR_QhKYguNM2bqg8d6xnCW_QVZrv6EG2iNeDlzxY4J1lM/exec'; // Replace with your Apps Script URL

function fetchCounts() {
    fetch(`${scriptURL}?action=count`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('count-fr').textContent = `FRATERS :   ${data['Fr.'] || 0}`;
            document.getElementById('count-sor').textContent = `S0RORS:   ${data['Sr.'] || 0}`;
            document.getElementById('count-jr').textContent = `JUNIOR ORDER:   ${data['Jr.'] || 0}`;
            document.getElementById('count-colombe').textContent = `COLOMBES:   ${data['Colombe'] || 0}`;
            document.getElementById('count-RM').textContent = `REGIONAL MONITORS:   ${data['RM'] || 0}`;
            document.getElementById('count-GC').textContent = `GRAND COUNSELLORS:   ${data['GC'] || 0}`;
            document.getElementById('count-Non-Members').textContent = `NON MEMBERS:   ${data['Non Members'] || 0}`;
            document.getElementById('count-Total-Attendance').textContent = `TOTAL  ATTENDANCE:   ${data['Total Attendance'] || 0}`;
        })
        .catch(error => alert('Error fetching counts: ' + error.message));
}

document.addEventListener('DOMContentLoaded', fetchCounts);


var date = new Date();
// var options = { year: 'numeric', month: 'long', day: 'numeric' };
var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

var formattedDate = date.toLocaleDateString('en-NG', options);
document.getElementById("dattte").innerHTML = formattedDate;
