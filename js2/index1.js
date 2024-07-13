const scriptURL = 'https://script.google.com/macros/s/AKfycbxOjTMdt3dTrHsh268gecx9ss2KV2s2qOJVoXpb1jID7LlRFVUpbxclMm9FSSpSoXFE2Q/exec';
  
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzG6Aq-HeruaCq7mkbu8SX_5s3LgD2mbtR5wt2aLFVnNqWQ847T7ibpp4pq8QthU79nsw/exec';
const form = document.querySelector('#form');
const btn = document.querySelector('#submit');
form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = "Loading...";
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
            btn.disabled = false;
            btn.innerHTML = "SUBMIT";
            if (data.result === 'success') {
                openPopup()
                deactivateInput()
                // alert('GREETINGS BELOVETH!');
            } else {
                let errorMessage = 'Error: ' + data.error;
                if (data.error === 'Key Number not found in source sheet') { 
                    
                    errorMessage = 'Key number not found';
                } else if (data.error === 'Member already Registered') {
                    errorMessage = 'Member already registered';
                }
                alert(errorMessage);
            }
            form.reset();
        })
        .catch(error => {
            btn.disabled = false;
            btn.innerHTML = "Submit";
            alert('Error: ' + error.message);
        });

      
});
// ----------------------------------------------------------------------------
function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    }
    
    function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    activateInput()
    
    }


function deactivateInput() {
    document.getElementById('keyNumber').disabled = true;
    }
    
    function activateInput() {
    document.getElementById('keyNumber').disabled = false;
    }


document.getElementById("keyNumber").addEventListener("input", function() {
    var inputField = document.getElementById("keyNumber");
    var maskedValue = inputField.value.replace(/[^0-9pP]/g, ''); // Remove any characters that are not numbers or p/P
    inputField.value = maskedValue;
});    

       