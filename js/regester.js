function regesterUser() {
    userId = document.getElementById('UserId').value;
    userName = document.getElementById('UserName').value;
    ZdTags = document.getElementById('zdTags').value;
    EmailId = document.getElementById('emailId').value;
    pwd = document.getElementById('Pwd').value;
    role = document.getElementById('Role').value;
    designation = document.getElementById('Designation').value;

    //console.log(userId + userName + ZdTags + EmailId + pwd + role + designation);
    //console.log('clicked');


    var myKeyVals = {
        Uid: userId,
        emailId: EmailId,
        Pwd: pwd,
        zdtags: ZdTags,
        EmpName: userName,
        Role: role,
        Designation: designation
    };
    $.ajax({
        type: 'POST',
        url: "https://10.21.12.69:8532/register/" + userId + "",
        data: myKeyVals,
        dataType: "json"

    }).done(function(resultData) {
        alert("Successfully Regestered");
        location.href = "./regester.html";
    }).error(function(error) {
        alert("Something went wrong or User already exists----> " + error);
        //console.log(error);
    });
}
