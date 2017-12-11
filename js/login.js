var Username1;
var Password1;
var dummy = [];

function onlogoutclick() {
    location.href = "https://productsupport.konylabs.net/srg.html";
    window.localStorage.clear();
}


function selectEmployee(emailGiven, nameGiven, empidGiven) {
    nameOfEmployee = nameGiven;
    emailidOfEmployee = emailGiven;
    empidOfEmployee = empidGiven;
    localStorage.setItem('myemailid', emailidOfEmployee);
    localStorage.setItem('mynamedisplay', nameOfEmployee);
    localStorage.setItem('myimagedisplay', empidOfEmployee);
    location.href = "./dummy2.html";
    localStorage.setItem('flagvalue', '0');
}


function getAllUsersData() {
    var saveData = $.ajax({
        type: 'GET',
        url: "https://productsupport.konylabs.net/getAll",
        dataType: "json",
        cors: true,
        headers: {}
    }).done(function(resultData) {
        document.getElementById('resultDataOfEmployees').innerHTML = "";
        for (i = 0; i < resultData.length; i++)

            if (resultData[i].Role == 'Engineer') {
                //console.log(resultData[i].EmpName);
                var emailsend = "'" + resultData[i].emailId + "'";
                var namesend = "'" + resultData[i].UserName + "'";
                var empidsend = "'" + resultData[i].EmployeeID + "'";
                document.getElementById('resultDataOfEmployees').innerHTML += '<li><a onclick="selectEmployee(' + emailsend + ',' + namesend + ',' + empidsend + ')" href="#">' + resultData[i].UserName + '</a></li>';
            }
    }).error(function(resultData) {
        //console.log(resultData);
        resultdata = resultData.responseText;
        alert("Server is down or Not a valid e-mail address or Password");
        return false;
    });
}

function usernameshow() {
    if (localStorage.getItem('myimagedisplay') === null) {
        location.href = "https://productsupport.konylabs.net/srg.html";
        window.localStorage.clear();
    } else {
        document.getElementById('displayUsername').innerHTML += localStorage.getItem('mynamedisplay');
        imagedisplay = (localStorage.getItem('myimagedisplay').toLowerCase());
        document.getElementById('userimage').innerHTML = "<img id='userimage' class='circle' src=https://productsupport.konylabs.net/EmployeePics/" + imagedisplay + ".png>";
        createCards();
        createChart();
    }
}

function usernameshow1() {
    if (localStorage.getItem('myimagedisplay') === null) {
        location.href = "https://productsupport.konylabs.net/srg.html";
        window.localStorage.clear();
    } else {
        continue;
    }
}

function usernameshowManager() {
    if (localStorage.getItem('credentials') === null) {
        location.href = "https://productsupport.konylabs.net/srg.html";
        window.localStorage.clear();
    }
}


var resultdata;

function loginCheck() {
    console.log("entered login");
    //console.log('clicked');
    //console.log(document.getElementById('empPassword').value);
    // usernameCheck = JSON.parse(localStorage.getItem('credentials')).username;
    // zz
    myUsername = JSON.parse(localStorage.getItem('credentials')).username;
    myPassword = JSON.parse(localStorage.getItem('credentials')).password;
    console.log(myUsername + "," + myPassword);
    var saveData = $.ajax({
        type: 'GET',
        url: "https://productsupport.konylabs.net/login/" + myUsername + "/" + myPassword + "",
        dataType: "json",
        cors: true,
        headers: {

        }
    }).done(function(resultData) {
        resultdata = resultData[0];
        //console.log(resultdata.EmpName);
        if (resultdata.Role == 'Engineer') {
            localStorage.setItem('mynamedisplay', resultdata.UserName);
            localStorage.setItem('myimagedisplay', resultdata.EmployeeID);
            console.log(localStorage.getItem("myimagedisplay"));
            localStorage.setItem('myemailid', resultdata.emailId);
            location.href = "./dummy2.html";
            localStorage.setItem('flagvalue', '1');
        } else if (resultdata.Role == 'Administrator') {
            location.href = "./regester.html";
        } else if (resultdata.Role == 'Manager') {
            location.href = "./dummy1.html";
        }

    }).error(function(resultData) {
        //console.log(resultData);
        resultdata = resultData.responseText;
        alert("Server is down or Not a valid e-mail address or Password");
        return false;
    });
}



function successLogin() {
    // Username1 = document.getElementById('empUsername').value;
    // //console.log(Username1);
    // localStorage.setItem('myusername', Username1);
    // //console.log(localStorage.getItem('myusername'));
    if (localStorage.getItem('credentials') === null) {
        console.log("entered null");
        location.href = "https://productsupport.konylabs.net/srg.html";
        window.localStorage.clear();
    } else {
        console.log("hit the main function");
        loginCheck();
    }
}
