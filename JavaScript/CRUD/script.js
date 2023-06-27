//Message
const showAlert = (msg, clsnm) => {
    const div = document.createElement('div');
    div.className = `alert alert-${clsnm}`;

    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');

    container.insertBefore(div, main);
    setTimeout(() => document.querySelector(".alert").remove(), 1000);
}

//clear Form fields
const clearFields = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phoneNumber').value = '';
}

//Insert Record
var selectedRow = null;
document.querySelector('#student-form').addEventListener('submit', (e) => {
    e.preventDefault();

    //get form values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phoneNumber').value;

    if ((name || email || phone) == '') {
        showAlert('Please fill all fields', 'danger');
    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector('#student-list');
            const row = document.createElement('tr');

            row.innerHTML = `
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>
                        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                    </td>
                `
            list.appendChild(row);
            selectedRow = null;
            showAlert('Record Inserted Successfully', 'success');
            clearFields();
        }
        else {
            selectedRow.children[0].textContent = name;
            selectedRow.children[1].textContent = email;
            selectedRow.children[2].textContent = phone;

            selectedRow = null;
            showAlert('Record Updated Successfully', 'info');
            clearFields();
        }
    }
})

//Update Record
document.querySelector('#student-list').addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains('edit')) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector('#name').value = selectedRow.children[0].textContent;
        document.querySelector('#email').value = selectedRow.children[1].textContent;
        document.querySelector('#phoneNumber').value = selectedRow.children[2].textContent;
    }
})

//Delete Record
document.querySelector('#student-list').addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
        showAlert('Record Deleted Successfully', 'danger');
    }
})