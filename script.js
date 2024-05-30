//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name === '' || age === '') {
        alert('Both fields are required.');
        return;
    }

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
    })
    .then(() => {
        alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
