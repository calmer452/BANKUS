// Add event listener to form submission
document.getElementById('transfer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var fromAccountNumber = document.getElementById('fromAccountNumber').value;
    var toAccountNumber = document.getElementById('toAccountNumber').value;
    var transferAmount = document.getElementById('transferAmount').value;
    var password = document.getElementById('password').value;
    
    // Validate form fields
    if (!fromAccountNumber || !toAccountNumber || !transferAmount || !password) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Make API call to transfer funds
    fetch('/api/transfer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fromAccountNumber: fromAccountNumber,
            toAccountNumber: toAccountNumber,
            transferAmount: transferAmount,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('transfer-status').innerHTML = 'Transfer successful!';
        } else {
            document.getElementById('transfer-status').innerHTML = 'Transfer failed: ' + data.error;
        }
    })
    .catch(error => {
        console.error(error);
    });
});
