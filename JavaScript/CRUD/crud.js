let titleVal = document.getElementById('title');
let statusVal = document.getElementById('status');
let dateVal = document.getElementById('date');
let btnSave = document.getElementById('btnSave');

let userData = [];
let mode = 'Save';
let tempId;

if (localStorage.getItem('localData') !== null) {
    userData = JSON.parse(localStorage.getItem('localData'));
}
else {
    userData = [];
}

//insert record
btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    if (titleVal.value == "" || statusVal.value == "" || dateVal.value == "") {
        alert('Please fill all fields...!!');
    }
    else {
        if (mode == "Save") {
            let user = {
                title: titleVal.value,
                status: statusVal.value,
                date: dateVal.value,
            }
            userData.push(user);
            localStorage.setItem('localData', JSON.stringify(userData));
            displayData();
            clearText();
            // console.log('User Data.....', userData);
        }
        else {
            btnSave.textContent = 'Update';
            updateData(tempId);
            displayData();
            btnSave.textContent = 'Save';
            mode = 'Save';
            clearText();
        }
    }
});

//clear field
const clearText = () => {
    titleVal.value = "";
    statusVal.value = "";
    dateVal.value = "";
}

// display record
const displayData = () => {
    let userData = JSON.parse(localStorage.getItem('localData'));
    let table = '';
    let id = 1;
    for (let i = 0; i < userData.length; i++) {
        table += `
        <tr>
            <td>${id}</td>
            <td>${userData[i].title}</td>
            <td>${userData[i].status}</td>
            <td>${userData[i].date.split('-').reverse().join('-')}</td>
            <td>
                <button class="btn btn-warning btn-sm edit" onclick=updateData(${i})>Edit</button>
                <button class="btn btn-danger btn-sm delete" onclick=deleteData(${i})>Delete</button>
            </td>
        </tr>
        `
        id++;
    }
    document.getElementById('user-data').innerHTML = table;
}

//Delete record
const deleteData = (id) => {
    userData.splice(id, 1);
    localStorage.setItem('localData', JSON.stringify(userData));
    displayData();
}

//Update record
const updateData = (id) => {
    tempId = id;
    mode = 'Update';
    btnSave.textContent = 'Update';
    let user = {
        title: titleVal.value,
        status: statusVal.value,
        date: dateVal.value,
    }
    titleVal.value = userData[id].title;
    statusVal.value = userData[id].status;
    dateVal.value = userData[id].date;

    userData[tempId] = user;
    // console.log('Update....', userData[tempId]);
    localStorage.setItem('localData', JSON.stringify(userData));
}

displayData();
