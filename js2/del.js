

const scriptURL = 'https://script.google.com/macros/s/AKfycbxUD5hZw8o12amZqJ8f0IuXTvsSAk9VnS7oq8YSSy7_qep9Mp7wpTfW-U3MLpZLkxu9BA/exec';
const hardcodedPassword = 'lica123'; // Replace with your hardcoded password

document.getElementById('fetchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const keyNumber = document.getElementById('keyNumber').value;
    fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams({ action: 'fetchUserData', keyNumber: keyNumber })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            const user = data.user;
            document.getElementById('editKeyNumber').value = user.keyNumber;
            document.getElementById('editName').value = user.name;
            document.getElementById('editDegree').value = user.degree;
            // document.getElementById('editStatus').value = user.status;
        } else {
            alert(data.error);
        }
    })
    .catch(error => alert('Error: ' + error.message));
});

document.getElementById('deleteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = prompt('Enter the password:');
    if (password === hardcodedPassword) {
        const keyNumber = document.getElementById('editKeyNumber').value;
        fetch(scriptURL, {
            method: 'POST',
            body: new URLSearchParams({ action: 'deleteUserData', keyNumber: keyNumber })
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert('Member deleted successfully!');
                document.getElementById('deleteForm').reset();
                document.getElementById('fetchForm').reset();
            } else {
                alert(data.error);
            }
        })
        .catch(error => alert('Error: ' + error.message));
    } else {
        alert('wrong password');
    }
});