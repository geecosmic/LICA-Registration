// const scriptURL = 'https://script.google.com/macros/s/AKfycbx4_2phk4fKgGnv4KtZ9Btc7pTthgfztGPzmFW5YC-sHolzF95pe4FhM5Tw5f3zML-Y/exec'
    

const scriptURL = 'https://script.google.com/macros/s/AKfycbx4_2phk4fKgGnv4KtZ9Btc7pTthgfztGPzmFW5YC-sHolzF95pe4FhM5Tw5f3zML-Y/exec';
        const form = document.querySelector('#form');
        const btn = document.querySelector('#submit');
        const correctPassword = "lica123";

        form.addEventListener('submit', e => {
            e.preventDefault();
            const password = prompt("Please enter the password:");
            if (password === correctPassword) {
                btn.disabled = true;
                btn.innerHTML = "Loading...";

                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => response.json())
                    .then(data => {
                        btn.disabled = false;
                        btn.innerHTML = "SUBMIT";
                        if (data.result === 'success') {
                            alert('MEMBER SUCCESSFULLY ADDED!');
                            form.reset();
                        } else if (data.result === 'error' && data.error === 'Duplicate key number') {
                            alert('ERROR: Duplicate key number!');
                            form.reset();
                        } else {
                            alert('Submission failed: ' + data.error);
                            form.reset();
                        }
                    })
                    .catch(error => {
                        btn.disabled = false;
                        btn.innerHTML = "SUBMIT";
                        alert('Error: ' + error.message);
                    });
            } else {
                alert("Incorrect password. Form submission cancelled.");
            }
        });



// const form = document.querySelector('#form')
// const btn = document.querySelector('#submit')

// form.addEventListener('submit', e => {
//         e.preventDefault();
//         btn.disabled = true;
//         btn.innerHTML = "Loading...";

//         fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//             .then(response => response.json())
//             .then(data => {
//                 btn.disabled = false;
//                 btn.innerHTML = "SUBMIT";
//                 if (data.result === 'success') {
//                     alert('MEMBER SUCCESSFULLY ADDED!');
//                     form.reset();
//                 } else if (data.result === 'error' && data.error === 'Duplicate key number') {
//                     alert('ERROR: Duplicate key number!');
//                     form.reset();
//                 } else {
//                     alert('Submission failed: ' + data.error);
//                     form.reset();
//                 }
//             })
//             .catch(error => {
//                 btn.disabled = false;
//                 btn.innerHTML = "SUBMIT";
//                 alert('Error: ' + error.message);
//             });
//     });