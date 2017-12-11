totalclosed = 0;
requestertime1 = 0;
agenttime1 = 0;
var firstresponse1 = 0;
countgoodfeedbacks = 0;
countescalatedreason = 0;
counttotalfeedbacks = 0;
var goodfeedbacksper = 0;
countofferedfeedbacks = 0;
var offeredfeedbacksper = 0;
var counttotalreplies = 0;
countassigneel3 = 0;
countnotasbug = 0;
countcserootcause = 0;
cserootcausetotal = 0;
var cserootcauseper = 0;
var dateDiffMTTR = 0;
var dateDiffMTTRl3 = 0;
resolutionTargetPer = 0;
mttrforstandard = 0;
mttrforpremier = 0;
resolutionTargetTotalPosSt = 0;
resolutionTargetTotalcountSt = 0;
resolutionTargetPerSt = 0;
resolutionTargetTotalPosP = 0;
resolutionTargetTotalcountP = 0;
resolutionTargetPerP = 0;

//main metric calls
res4 = [];
res3 = [];


dateDiffMTTR = 0;
dataTemp = {};


function fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal) {
    totalclosed = 0;
    requestertime1 = 0;
    agenttime1 = 0;
    firstresponse1 = 0;
    countgoodfeedbacks = 0;
    countescalatedreason = 0;
    counttotalfeedbacks = 0;
    goodfeedbacksper = 0;
    countofferedfeedbacks = 0;
    offeredfeedbacksper = 0;
    counttotalreplies = 0;
    countassigneel3 = 0;
    countnotasbug = 0;
    countcserootcause = 0;
    cserootcauseper = 0;
    dateDiffMTTR = 0;
    dateDiffMTTRl3 = 0;
    totalPremier = 0;
    totalStandard = 0;
    countScore = 0;
    resolutionTargetPer = 0;
    resolutionTargetTotalPos = 0;
    resolutionTargetTotalcount = 0;
    mttrforpremier = 0;
    mttrforstandard = 0;
    countmttrpremier = 0;

    myFunction();

    var temp = {};
    var r = new Date();
    myname = localStorage.getItem('myemailid');

    $.ajax({
            /*url:"https://10.10.34.67:3000/ticketpojo/"+r.getMonth()+"-01-"+r.getYear()+"/"+r.getMonth()+"-"+r.getDay()+"-"+r.getYear()+"",*/
            url: "https://productsupport.konylabs.net/metrics/" + myname + "/" + cSSYearGlobal + "-" + cSMonthGlobal + "-" + cSDayGlobal + "/" + cEYearGlobal + "-" + cEmonthGlobal + "-" + cEDayGlobal + "",
            type: "GET",
            dataType: 'json',
            cors: true,
            headers: {

            }

        }).done(function(data) {
            dataTemp = data;
            wait(3000);

            mainCardsLogic();

            k = 0, res3.length = 0;
            showPage();


            //Goals Implementation


            totalPremier = 0;
            totalStandard = 0;
        })
        .fail(function(err, msg) {

            if (confirm("OOps! Network error! Try again  :( ...")) {
                window.location.reload();
            } else {
                location.href = "https://productsupport.konylabs.net/srg.html";
                window.localStorage.clear();
            }
        })
}
