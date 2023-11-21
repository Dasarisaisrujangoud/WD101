document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();

        if (!validateDob()) {
            alert("Age must be between 18 and 55 years.");
            return;
        }

        addToTable();
        clearForm();
    });

    function validateDob() {
        var dob = new Date(document.getElementById("dob").value);
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();

        return age >= 18 && age <= 55;
    }

    function addToTable() {
        var table = document.getElementById("registrationTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        var nameCell = newRow.insertCell(0);
        var emailCell = newRow.insertCell(1);
        var passwordCell = newRow.insertCell(2);
        var dobCell = newRow.insertCell(3);
        var termsCell = newRow.insertCell(4);

        nameCell.innerHTML = document.getElementById("name").value;
        emailCell.innerHTML = document.getElementById("email").value;
        passwordCell.innerHTML = document.getElementById("password").value;
        dobCell.innerHTML = document.getElementById("dob").value;
        termsCell.innerHTML = document.getElementById("terms").checked ? "Yes" : "No";
    }

    function clearForm() {
        document.getElementById("name1").value = "";
        document.getElementById("email1").value = "";
        document.getElementById("password1").value = "";
        document.getElementById("dob1").value = "";
        document.getElementById("terms1").checked = false;
    }
});
