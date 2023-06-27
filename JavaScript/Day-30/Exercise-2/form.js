const errorMessage = (id, msg) => {
    document.getElementById(id).innerHTML = msg;
}

const validate = () => {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;
    let telephone = document.getElementById('telephone').value;
    let bio = document.getElementById('bio').value;

    var fnmerr = lnmerr = emailerr = pwderr = telerr = bioerr = true;

    if (fname == "") {
        errorMessage("fnmerr", "Please enter your first name");
    }
    else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname) === false) {
            errorMessage("fnmerr", "First name must be alphanumeric and contain 3-16 charecters");
        }
        else {
            errorMessage("fnmerr", "");
            fnmerr = false;
        }
    }

    if (lname == "") {
        errorMessage("lnmerr", "Please enter your last name");
    }
    else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lname) === false) {
            errorMessage("lnmerr", "Last name must be alphanumeric and contain 3-16 charecters");
        }
        else {
            errorMessage("lnmerr", "");
            lnmerr = false;
        }
    }

    if (email == "") {
        errorMessage('emailerr', 'Please enter your email');
    }
    else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            errorMessage('emailerr', 'Email must be valid email address Eg:example@example.com');
        }
        else {
            errorMessage('emailerr', '');
            emailerr = false;
        }
    }
            
    if (password == "") {
        errorMessage('pwderr', 'Please enter your password');
    }
    else {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (regex.test(password) === false) {
            errorMessage('pwderr', 'Password must be alphanumeric with specialcharecters like !,@,#,$,Etc and minimum 8 charecters');
        }
        else {
            errorMessage('pwderr', '');
            pwderr = false;
        }
    }

    if (telephone == "") {
        errorMessage('telerr', 'Please enter your telephone');
    }
    else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(telephone) === false) {
            errorMessage('telerr', 'Telephone must be valid number Eg: 11 Digits and 333-333-3334');
        }
        else {
            errorMessage('telerr', '');
            telerr = false;
        }
    }

    if (bio == "") {
        errorMessage('bioerr', 'Please enter your bio');
    }
    else {
        var regex = /^[a-zA-Z0-9,.'"\s-]{10,}$/;
        if (regex.test(bio) === false) {
            errorMessage('bioerr', 'Bio may contain alphanumeric character, comma,period,apostrophe, double-quote, space, or hyphen and minimum 10 charecters.');
        }
        else {
            errorMessage('bioerr', '');
            bioerr = false;
        }
    }

    if ((fnmerr || lnmerr || emailerr || pwderr || telerr || bioerr) == true) {
        return false;
    }
    else {
        var data = "Name : " + fname + " " + lname + "\n" +
            "Email : " + email + "\n" +
            "Password : " + password + "\n" +
            "Telephone : " + telephone + "\n" +
            "Bio : " + bio;

        localStorage.setItem("localdata", data);
    }
}
