document.addEventListener("DOMContentLoaded", function() {
    loadTableFromSessionStorage();

    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        addToTable();
        saveTableToSessionStorage();
        clearForm();
    });

    function validateForm() {
        var dob = new Date(document.getElementById("dob").value);
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();

        if (age < 18 || age > 55) {
            alert("Age must be between 18 and 55 years.");
            return false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var email = document.getElementById("email").value;

        if (!emailRegex.test(email)) {
            alert("Invalid email address.");
            return false;
        }

        return true;
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
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("terms").checked = false;
    }

    function saveTableToSessionStorage() {
        sessionStorage.setItem("registrationTable", document.getElementById("registrationTable").innerHTML);
    }

    function loadTableFromSessionStorage() {
        var tableHtml = sessionStorage.getItem("registrationTable");

        if (tableHtml) {
            document.getElementById("registrationTable").innerHTML = tableHtml;
        }
    }
});
