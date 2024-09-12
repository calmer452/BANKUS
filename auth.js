// auth.js
function authenticate(username, password) {
    console.log('Authenticating...');
    console.log('Username:', username);
    console.log('Password:', password);
    // Replace with your actual authentication logic
    const hardcodedUsername = 'm#P52s@ap$';
    const hardcodedPassword = 'chloe';
    if (username === hardcodedUsername && password === hardcodedPassword) {
        console.log('Authentication successful!');
        return true;
    } else {
        console.log('Invalid credentials!');
        return false;
    }
}

export { authenticate };
