
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyGVdHDiBxdrS4dBqNh37-8fvxus-2Ol9Fyzux85XQXUpYILmyaKSdyDL2qBAzQiYA/exec'; // Replace with your Apps Script web app URL

    document.getElementById('copyAndDeleteButton').addEventListener('click', () => {
      if (confirm("Are you sure you want to delete?")) {
        fetch(scriptURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({ action: 'copyAndDelete' })
        })
        .then(response => response.json())
        .then(data => {
          if (data.result === 'success') {
            document.getElementById('message').textContent = 'Sheet successfully deleted!';
          } else {
            document.getElementById('message').textContent = 'Error deleting data!';
          }
        })
        .catch(error => {
          document.getElementById('message').textContent = 'Request failed: ' + error.message;
        });
      }
    });
  