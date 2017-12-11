// $('.message a').click(function() {
//     $('form').animate({
//         height: "toggle",
//         opacity: "toggle"
//     }, "slow");
// });
//
// function validateuser() {
//     Username1S = document.getElementById('empUName').value;
//     Password1S = document.getElementById('empPwd').value;
//     UserId = document.getElementById('empUid').value;
//     //console.log(Username1S);
//     localStorage.setItem('myusername', Username1S);
//     localStorage.setItem('mypassword', Password1S);
//     localStorage.setItem('myuserid', UserId);
//     var saveData = $.ajax({
//         type: 'GET',
//         url: "http://10.21.12.69:8532/login/" + localStorage.getItem('myusername') + "/" + localStorage.getItem('mypassword') + "",
//         dataType: "json",
//         cors: true,
//         headers: {
//
//         }
//     }).done(function(resultData) {
//         resultdata = resultData[0];
//         document.getElementById('changepassword').style.display = 'block';
//         document.getElementById('new-password').style.display = 'block';
//         document.getElementById('loginandpass').style.display = 'none';
//
//     }).error(function(resultData) {
//         //console.log(resultData);
//         resultdata = resultData.responseText;
//         alert("Not a valid e-mail address or Password");
//         return false;
//     });
// }
//
// function newpassword() {
//     npassword = document.getElementById('newpassword').value;
//     npassword1 = document.getElementById('newpassword1').value;
//     if (npassword == npassword1) {
//
//
//         //console.log(localStorage.getItem('myuserid'));
//         //console.log(npassword);
//         var myKeyVals = {
//             emailId: localStorage.getItem('myusername'),
//             Pwd: npassword
//         };
//         var saveData = $.ajax({
//             type: 'POST',
//             url: "http://10.21.12.69:8532/login/" + localStorage.getItem('myuserid') + "/" + localStorage.getItem('mypassword') + "",
//             data: myKeyVals,
//             dataType: "json",
//             success: function(resultData) {
//                 alert("Saved");
//                 location.href = "./index.html";
//             }
//         });
//         saveData.error(function() {
//             alert("Something went wrong");
//         });
//     } else {
//         alert("Passwords do not match")
//     }
// }
