const tls = document.getElementById('user-table');

// Retrieving existing user data from local storage

let entry = JSON.parse(localStorage.getItem('users')) || [];

// Displaying existing user data in table
for (const user of entry) {
    const {name, email, password, dob, terms} = user;
    const row = tls.insertRow();
    row.insertCell().textContent = name;
    row.insertCell().textContent = email;
    row.insertCell().textContent = password;
    row.insertCell().textContent = dob;
    row.insertCell().textContent = terms ? 'true' : 'false';
}

// Handle form submit event
const frs = document.getElementById('registration_form');
frs.addEventListener('submit', (event) => {
    event.preventDefault();

    // Getting the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;

    // Validating date of birth
    const d = new Date(dob);
    const n = new Date();
    const bfd = (new Date(n.getFullYear() - 55, n.getMonth(), n.getDate()))


    const rfd = (new Date(n.getFullYear() - 18, n.getMonth(), n.getDate()));
    if (d < bfd || d > rfd) {
        alert('You must be 18 years old to register');
        return;
    }

    // Adding user to table and saving the data to local storage
    const user = {name, email, password, dob, terms};
    entry.push(user);
    localStorage.setItem('users', JSON.stringify(entry));
    const row = tls.insertRow();
    const mak = [name, email, password, dob, terms]
    const rows = mak.map((item) => {
        const cell = row.insertCell();
        cell.textContent = item;
    })
    // Reset form
    frs.reset();
});
