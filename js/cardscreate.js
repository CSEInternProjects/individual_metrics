var myVar;

function myFunction() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("maincard").style.display = "none";
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("maincard").style.display = "block";
}


function createCards() {
    myFunction();
    document.getElementById('maincard').style.width = '100%';
    document.getElementById('maincard').style.height = '90%';
    l = 13;
    m = 1;
    for (i = 0; i < 5; i++) {
        document.getElementById('maincard').innerHTML += "<div id='card" + i + "'></div>";
        document.getElementById('card' + i).style.width += '100%';
        document.getElementById('card' + i).style.top += l + '%';
        document.getElementById('card' + i).style.height += '20%';
        document.getElementById('card' + i).style.position += 'absolute';
        l = l + 20;
        if (i != 3 && i != 4) {
            k = 0;
            for (j = 0; j < 4; j++) {
                document.getElementById('card' + i).innerHTML += "<div class = 'tooltip' onclick = 'card00click()' id= 'icard" + i + j + "'></div>";
                document.getElementById('icard' + i + j).innerHTML += "<span class = 'tooltiptext' id = 'itooltip" + m + "'></span>";
                document.getElementById('icard' + i + j).style.position += "absolute";
                document.getElementById('icard' + i + j).style.display += 'inline';
                document.getElementById('icard' + i + j).style.height += '90%';
                document.getElementById('icard' + i + j).style.margin += '1%';
                document.getElementById('icard' + i + j).style.padding += '2%';
                document.getElementById('icard' + i + j).style.width += '23%';
                document.getElementById('icard' + i + j).style.background += "#ffffff";
                document.getElementById('icard' + i + j).style.left += k + '%';
                document.getElementById('icard' + i + j).style.boxShadow = '0px 10px 20px rgba(0,0,0,0.4)';
                document.getElementById('icard' + i + j).style.borderRadius = '0px 0px 10px 10px';
                k = k + 25;
                if (i < 3 && j < 4) {
                    document.getElementById('icard' + i + j).innerHTML += "<div id='tdd" + m + "'></div>";
                    document.getElementById('icard' + i + j).innerHTML += "<div id='ld" + m + "'></div>";
                    document.getElementById('icard' + i + j).innerHTML += "<div id= 'mdd'></div>"
                    document.getElementById('icard' + i + j).innerHTML += "<div id='rd" + m + "'></div>";
                    document.getElementById('icard' + i + j).innerHTML += "<div id='rdd" + m + "'></div>";
                    document.getElementById('tdd' + m).style.height = '4%';
                    document.getElementById('tdd' + m).style.left = '0%';
                    document.getElementById('tdd' + m).style.top = '0%';
                    document.getElementById('tdd' + m).style.position = 'absolute';
                    m = m + 1;
                }
            }
        } else if (i == 3) {
            k = 0;
            rdno = 13;
            for (j = 0; j < 6; j++) {
                document.getElementById('card' + i).innerHTML += "<div class= 'tooltip' onclick= 'card00click();' id= 'icard" + i + j + "'></div>";
                document.getElementById('icard' + i + j).innerHTML += "<span class = 'tooltiptext' id = 'itooltip" + rdno + "'></span>";
                document.getElementById('icard' + i + j).innerHTML += "<div id='rd" + rdno + "'></div>";
                document.getElementById('icard' + i + j).innerHTML += "<div id='rdd" + rdno + "'></div>";
                document.getElementById('icard' + i + j).style.display = 'inline';
                document.getElementById('icard' + i + j).style.height = '90%';
                document.getElementById('icard' + i + j).style.width = '15%';
                document.getElementById('icard' + i + j).style.margin = '1%';
                document.getElementById('icard' + i + j).style.background = "#ffffff";
                document.getElementById('icard' + i + j).style.position = "absolute";
                document.getElementById('icard' + i + j).style.left += k + '%';
                document.getElementById('icard' + i + j).style.boxShadow = '0px 10px 20px rgba(0,0,0,0.4)';
                document.getElementById('icard' + i + j).style.borderRadius = '0px 0px 10px 10px';
                document.getElementById('icard' + i + j).innerHTML += "<div id='tdd" + m + "'></div>";
                document.getElementById('tdd' + m).style.height = '4%';
                document.getElementById('tdd' + m).style.left = '0%';
                document.getElementById('tdd' + m).style.top = '0%';
                document.getElementById('tdd' + m).style.position = 'absolute';
                k = k + 16.6;
                rdno++;
                m++;
            }
        }
    }
    document.getElementById('rd1').innerHTML = "<p id='nameptag'>Closed Tickets</p>";
    document.getElementById('rd2').innerHTML = "<p id='nameptag'>MTTR</p>";
    document.getElementById('rd3').innerHTML = "<p id='nameptag'>Kony Wait Time</p>";
    document.getElementById('rd4').innerHTML = "<p id='nameptag'>Requester Wait Time</p>";
    document.getElementById('rd5').innerHTML = "<p id='nameptag'>1st Response Avg time</p>";
    document.getElementById('rd6').innerHTML = "<p id='nameptag'>1st Response Target %</p>";
    document.getElementById('rd7').innerHTML = "<p id='nameptag'>L3 Tickets Returened not as Bug</p>";
    document.getElementById('rd8').innerHTML = "<p id='nameptag'>CSE Resolution Target %</p>";
    document.getElementById('rd9').innerHTML = "<p id='nameptag'>CSE good Feedbacks</p>";
    document.getElementById('rd10').innerHTML = "<p id='nameptag'>CSE good Feedbacks %</p>";
    document.getElementById('rd11').innerHTML = "<p id='nameptag'>CSAT Response</p>";
    document.getElementById('rd12').innerHTML = "<p id='nameptag'>CSAT Response %</p>";
    document.getElementById('rd13').innerHTML = "<p id='nameptag'>CSE Public Comments</p>";
    document.getElementById('rd14').innerHTML = "<p id='nameptag'>Tickets Assigned to L3</p>";
    document.getElementById('rd15').innerHTML = "<p id='nameptag'>Esclated Tickets</p>";
    document.getElementById('rd16').innerHTML = "<p id='nameptag'>Bug Quality %</p>";
    document.getElementById('rd17').innerHTML = "<p id='nameptag'>CSE MTTR For L3 Tickets</p>";
    document.getElementById('rd18').innerHTML = "<p id='nameptag'>KB Articles</p>";
    document.getElementById('rdd1').innerHTML += "<p id='val1'></p>";
    document.getElementById('rdd2').innerHTML += "<p id='val2'></p>";
    document.getElementById('rdd3').innerHTML += "<p id='val3'></p>";
    document.getElementById('rdd4').innerHTML += "<p id='val4'></p>";
    document.getElementById('rdd5').innerHTML += "<p id='val5'></p>";
    document.getElementById('rdd6').innerHTML += "<p id='val6'></p>";
    document.getElementById('rdd8').innerHTML += "<p id='val8'></p>";
    document.getElementById('rdd7').innerHTML += "<p id='val7'></p>";
    document.getElementById('rdd9').innerHTML += "<p id='val9'></p>";
    document.getElementById('rdd10').innerHTML += "<p id='val10'></p>";
    document.getElementById('rdd11').innerHTML += "<p id='val11'></p>";
    document.getElementById('rdd12').innerHTML += "<p id='val12'></p>";
    document.getElementById('rdd13').innerHTML += "<p id='val13'></p>";
    document.getElementById('rdd14').innerHTML += "<p id='val14'></p>";
    document.getElementById('rdd15').innerHTML += "<p id='val15'></p>";
    document.getElementById('rdd16').innerHTML += "<p id='val16'></p>";
    document.getElementById('rdd17').innerHTML += "<p id='val17'></p>";
    document.getElementById('rdd18').innerHTML += "<p id= 'val18'></p>";
    // document.getElementById('rd19').innerHTML += "Your Performance Score Is : ";
    // document.getElementById('rdd19').innerHTML += "4/6";

    // document.getElementById('rd11').innerHTML = "<p id='nameptag'>sdf</p>";
    mainClass();
    flagvaluedisplay();
}

function flagvaluedisplay() {
    if (localStorage.getItem('flagvalue') == '1') {
        document.getElementById('logout').style.display = 'block';
        document.getElementById('logout').style.marginLeft = '2%';
        document.getElementById('logout').style.top = '15%';
        document.getElementById('logout').style.paddingLeft = '10px';
        document.getElementById('logout').style.paddingRight = '10px';
        document.getElementById('logout').style.paddingTop = '0px';
        // document.getElementById('logout').style.paddingBottom = '10px';
        document.getElementById('logout').style.backgroundColor = '#334455';
        document.getElementById('logout').style.height = '80%';
        document.getElementById('logout').style.borderRadius = '10px';
        document.getElementById('logout').style.position = 'absolute';
        document.getElementById('logout').style.textAlign = 'center';

    } else if (localStorage.getItem('flagvalue') == '0') {
        document.getElementById('backButton').style.display = 'block';
        document.getElementById('backButton').style.marginLeft = '2%';
        document.getElementById('backButton').style.top = '15%';
        document.getElementById('backButton').style.paddingLeft = '30px';
        document.getElementById('backButton').style.paddingRight = '30px';
        document.getElementById('backButton').style.paddingTop = '0px';
        // document.getElementById('backButton').style.paddingBottom = '10px';
        document.getElementById('backButton').style.backgroundColor = '#334455';
        document.getElementById('backButton').style.height = '80%';
        document.getElementById('backButton').style.borderRadius = '10px';
        document.getElementById('backButton').style.textAlign = 'center';
        document.getElementById('backButton').style.position = 'absolute';
    }
}



counter = 0;
arraystore = [];
arraystore1 = [];
arraystore2 = [];
arraystore3 = [];
arraystore4 = [];
arraystore5 = [];
arraystore6 = [];
arraystore7 = [];
arraystore8 = [];
arraystore9 = [];
arraystore10 = [];
arraystore11 = [];
arraystore12 = [];
arraystore13 = [];
arraystore14 = [];
arraystore15 = [];
arraystore16 = [];
arraystore17 = [];
arraystore18 = [];
valuestore = 1;


function createChart() {
    i = counter;
    if (i == 0) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 04;
        cEmonthGlobal1 = 05;
        cSSYearGlobal1 = cSYearGlobal;
        cEYearGlobal1 = cSYearGlobal;
    } else if (i == 1) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 05;
        cEmonthGlobal1 = 06;
        cSSYearGlobal1 = cSYearGlobal;
        cEYearGlobal1 = cSYearGlobal;
    } else if (i == 2) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 06;
        cEmonthGlobal1 = 07;
        cSSYearGlobal1 = cSYearGlobal;
        cEYearGlobal1 = cSYearGlobal;
    } else if (i == 3) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 07;
        cEmonthGlobal1 = 08;
        cSSYearGlobal1 = cSYearGlobal;
        cEYearGlobal1 = cSYearGlobal;
    } else if (i == 4) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 08;
        cEmonthGlobal1 = 09;
        cSSYearGlobal1 = cSYearGlobal;
        cEYearGlobal1 = cSYearGlobal;
    } else if (i == 5) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 09;
        cEmonthGlobal1 = 10;
        cSSYearGlobal1 = cSYearGlobal;
        cEYearGlobal1 = cSYearGlobal;
    } else if (i == 6) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 10;
        cEmonthGlobal1 = 11;
        cSSYearGlobal1 = cSYearGlobal;
        cEYearGlobal1 = cSYearGlobal;
    } else if (i == 7) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 11;
        cEmonthGlobal1 = 12;
        cSSYearGlobal1 = cSYearGlobal;
        cEYearGlobal1 = cSYearGlobal;
    } else if (i == 8) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 12;
        cEmonthGlobal1 = 01;
        cSSYearGlobal1 = cSYearGlobal;
        cEYearGlobal1 = cSYearGlobal + 1;
    } else if (i == 9) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 01;
        cEmonthGlobal1 = 02;
        cSSYearGlobal1 = cSYearGlobal + 1;
        cEYearGlobal1 = cSYearGlobal + 1;
    } else if (i == 10) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 02;
        cEmonthGlobal1 = 03;
        cSSYearGlobal1 = cSYearGlobal + 1;
        cEYearGlobal1 = cSYearGlobal + 1;
    } else if (i == 11) {
        cSDayGlobal1 = 01;
        cEDayGlobal1 = 01;
        cSMonthGlobal1 = 03;
        cEmonthGlobal1 = 04;
        cSSYearGlobal1 = cSYearGlobal + 1;
        cEYearGlobal1 = cSYearGlobal + 1;
    }


    totalclosedS = 0;
    requestertime1S = 0;
    agenttime1S = 0;
    firstresponse1S = 0;
    countgoodfeedbacksS = 0;
    countescalatedreasonS = 0;
    counttotalfeedbacksS = 0;
    goodfeedbacksperS = 0;
    countofferedfeedbacksS = 0;
    offeredfeedbacksperS = 0;
    counttotalrepliesS = 0;
    countassigneel3S = 0;
    countnotasbugS = 0;
    countcserootcauseS = 0;
    cserootcauseperS = 0;
    dateDiffMTTRS = 0;
    dateDiffMTTRl3S = 0;


    var temp = {};
    var r = new Date();
    myname = localStorage.getItem('myusername');

    $.ajax({
        /*url:"http://10.10.34.67:3000/ticketpojo/"+r.getMonth()+"-01-"+r.getYear()+"/"+r.getMonth()+"-"+r.getDay()+"-"+r.getYear()+"",*/
        url: "http://productsupport.konylabs.net/metrics/" + myname + "/" + cSSYearGlobal1 + "-" + cSMonthGlobal1 + "-" + cSDayGlobal1 + "/" + cEYearGlobal1 + "-" + cEmonthGlobal1 + "-" + cEDayGlobal1 + "",
        type: "GET",
        dataType: 'json',
        cors: true,
        headers: {

        }

    }).done(function(data) {

        dataTemp = data;


        for (var z = 0; z < dataTemp.length; z++) {
            k = 0;
            temp = {};
            var platformfeature = dataTemp[z].Tags;
            var changerequestflag = dataTemp[z].Change_Request_;


            if (dataTemp[z].Status == "Closed" && platformfeature.indexOf("platform__feature_request") == -1 && changerequestflag.indexOf("yes") == -1 && platformfeature.indexOf("finance_hold") == -1 && platformfeature.indexOf("finance_restored") == -1) {
                if (dataTemp[z].Assignee == "Kony Product Support") {

                    //closed tickets total

                    temp[k++] = dataTemp[z];
                    res3.push(temp);
                    totalclosedS = totalclosedS + 1;

                    //mttr of cse tickets


                    var date1 = new Date(dataTemp[z].Solved_at);
                    var date2 = new Date(dataTemp[z].Created_at);
                    var timeDiffS = Math.abs(date2.getTime() - date1.getTime());
                    var diffDaysS = parseFloat(timeDiffS / (1000 * 3600 * 24));
                    dateDiffMTTRS = parseFloat(dateDiffMTTRS + diffDaysS);

                    //kony requester wait time in hours


                    var requestertimeS = dataTemp[z].Requester_wait_time_in_minutes;
                    requestertime2S = parseFloat(requestertimeS / 1440);
                    requestertime1S = parseFloat(requestertime1S + requestertime2S);

                    //Agent wait time in minutes


                    var agenttimeS = dataTemp[z].Agent_wait_time_in_minutes;
                    agenttime2S = parseFloat(agenttimeS / 1440);
                    agenttime1S = parseFloat(agenttime1S + agenttime2S);

                    //first Response average time


                    var firstresponseS = dataTemp[z].First_reply_time_in_minutes;
                    firstresponse2S = parseFloat(firstresponseS / 60);
                    firstresponse1S = parseFloat(firstresponse1S + firstresponse2S);

                    //Escalated Reason


                    var escalatedreasonS = dataTemp[z].Tags;
                    if (escalatedreasonS.indexOf("l2_escalated") != -1) {
                        countescalatedreasonS++;
                    }


                    //Good Feedbacks


                    var goodfeedbacksS = dataTemp[z].Satisfaction_Score;
                    if (goodfeedbacksS.indexOf("Good") != -1) {
                        countgoodfeedbacksS++;
                    }


                    //percentage of goodfeedbacks


                    var totalfeedbacksperS = dataTemp[z].Satisfaction_Score;
                    if (totalfeedbacksperS.indexOf("Good") != -1 || totalfeedbacksperS.indexOf("Bad") != -1) {
                        counttotalfeedbacksS++;

                    }
                    if (counttotalfeedbacksS != 0) {
                        goodfeedbacksperS = (countgoodfeedbacksS / counttotalfeedbacksS) * 100;
                    } else {
                        goodfeedbacksperS = 0;
                    }


                    //csat responses


                    //csat % responses

                    var offeredfeedbacksS = dataTemp[z].Satisfaction_Score;
                    if (dataTemp[z].Satisfaction_Score == "Offered" || dataTemp[z].Satisfaction_Score == "Good" || dataTemp[z].Satisfaction_Score == "Bad") {
                        countofferedfeedbacksS++;

                    }
                    offeredfeedbacksperS = (counttotalfeedbacksS / countofferedfeedbacksS) * 100;


                    //total replies public Comments for cse tickets
                    var totalrepliesS = parseInt(dataTemp[z].Replies);
                    counttotalrepliesS = parseInt(counttotalrepliesS + totalrepliesS);


                } else {

                    //tickets Assigned to L3

                    assigneeL3S = dataTemp[z].Assignee;
                    if (assigneeL3S == "Kony L3 Product Support") {
                        countassigneel3S++;
                    }

                    //Escalated Reason L3
                    var escalatedreasonS = dataTemp[z].Tags;
                    if (escalatedreasonS.indexOf("l2_escalated") != -1) {
                        countescalatedreasonS++;
                    }


                    //returned not as bug

                    platformteamS = dataTemp[z].Platform_team_;
                    if ((assigneeL3S == "Kony Product Support" || assigneeL3S == "Kony BDE Product Support") && platformteamS == "Product Support") {
                        countnotasbugS++;
                    }

                    //bug Quality %

                    var cserootcauseS = dataTemp[z].CSE_Root_Cause_Category_;
                    if (assigneeL3S == "kony L3 Product Support") {
                        if (cserootcauseS == "Knowledge Gap" || cserootcauseS == "App Issues") {
                            countcserootcauseS++;
                        }
                    }
                    cserootcausetotalS = countassigneel3S - countcserootcauseS;
                    if (cserootcausetotalS == 0) {
                        cserootcauseperS = 0;
                    } else {
                        cserootcauseperS = (cserootcausetotalS / countassigneel3S) * 100;
                    }


                    //mttr for L3 tickets

                    if (assigneeL3S == "Kony L3 Product Support") {
                        var date1 = new Date(dataTemp[z].Assigned_at);
                        var date2 = new Date(dataTemp[z].Created_at);
                        var timeDiffS = Math.abs(date2.getTime() - date1.getTime());
                        var diffDaysS = parseFloat(timeDiffS / (1000 * 3600 * 24));
                        dateDiffMTTRl3S = parseFloat(dateDiffMTTRl3S + diffDaysS);
                    }
                }
            }

        }

        //firstresponse average
        firstresponseavgS = parseFloat(firstresponse1S / totalclosedS);
        firstresponseavg1S = parseInt(firstresponseavgS);
        firstresponseavgdecimalS = parseFloat(firstresponseavgS - firstresponseavg1S);
        firstresponseavgdecimalS = (firstresponseavgdecimalS / 100) * 60;
        if (totalclosedS == 0) {
            firstresponseavgS = 0;
        } else {
            firstresponseavgS = firstresponseavg1S + firstresponseavgdecimalS;
        }

        //mttr average
        dateDiffMTTRavgS = parseFloat(dateDiffMTTRS / totalclosedS);


        //mttr L3 average

        dateDiffMTTRl3avgS = parseFloat(dateDiffMTTRl3S / countassigneel3S);
        arraystore1[i] = totalclosedS;

        dateDiffMTTRavgS = Math.round(dateDiffMTTRavgS * 10) / 10;
        if (totalclosedS == 0) {
            arraystore2[i] = 0.0;
        } else {
            arraystore2[i] = dateDiffMTTRavgS;
        }
        requestertime1S = Math.round(requestertime1S * 10) / 10;
        arraystore3[i] = requestertime1S;
        agenttime1S = Math.round(agenttime1S * 10) / 10;
        arraystore4[i] = agenttime1S;
        firstresponseavgS = firstresponseavgS.toFixed(2);
        arraystore5[i] = firstresponseavgS;
        arraystore7[i] = countnotasbugS;
        arraystore9[i] = countgoodfeedbacksS;
        goodfeedbacksperS = Math.round(goodfeedbacksperS * 10) / 10;
        arraystore10[i] = goodfeedbacksperS;
        arraystore11[i] = counttotalfeedbacksS;
        offeredfeedbacksperS = Math.round(offeredfeedbacksperS * 10) / 10;
        arraystore12[i] = offeredfeedbacksperS;
        arraystore13[i] = counttotalrepliesS;
        arraystore14[i] = countassigneel3S;
        arraystore15[i] = countescalatedreasonS;
        cserootcauseperS = cserootcauseperS.toFixed(2);
        arraystore16[i] = cserootcauseperS;
        dateDiffMTTRl3avgS = dateDiffMTTRl3avgS.toFixed(2);
        if (totalclosedS == 0) {
            arraystore17[i] = 0;
        } else {
            dateDiffMTTRl3avgS = Math.round(dateDiffMTTRl3avgS * 10) / 10;
            arraystore17[i] = dateDiffMTTRl3avgS;
        }

        totalclosedS = 0;
        requestertime1S = 0;
        agenttime1S = 0;
        firstresponse1S = 0;
        countgoodfeedbacksS = 0;
        countescalatedreasonS = 0;
        counttotalfeedbacksS = 0;
        goodfeedbacksperS = 0;
        countofferedfeedbacksS = 0;
        offeredfeedbacksperS = 0;
        counttotalrepliesS = 0;
        countassigneel3S = 0;
        countnotasbugS = 0;
        countcserootcauseS = 0;
        cserootcauseperS = 0;
        dateDiffMTTRS = 0;
        dateDiffMTTRl3S = 0;


        k = 0, res3.length = 0;
        counter++;
        if (counter < 12) {
            createChart()
        };
    })
}


function card00click() {
    document.getElementById('icard00').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore1[i];
        }
        chartclick();
    }

    document.getElementById('icard01').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore2[i];
        }
        chartclick();
    }

    document.getElementById('icard02').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore3[i];
        }
        chartclick();
    }

    document.getElementById('icard03').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore4[i];
        }
        chartclick();
    }

    document.getElementById('icard10').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore5[i];
        }
        chartclick();
    }

    document.getElementById('icard12').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore7[i];
        }
        chartclick();
    }

    document.getElementById('icard20').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore9[i];
        }
        chartclick();
    }

    document.getElementById('icard21').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore10[i];
        }
        chartclick();
    }

    document.getElementById('icard22').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore11[i];
        }
        chartclick();
    }

    document.getElementById('icard23').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore12[i];
        }
        chartclick();
    }

    document.getElementById('icard30').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore13[i];
        }
        chartclick();
    }

    document.getElementById('icard31').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore14[i];
        }
        chartclick();
    }

    document.getElementById('icard32').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore15[i];
        }
        chartclick();
    }

    document.getElementById('icard33').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore16[i];
        }
        chartclick();
    }

    document.getElementById('icard34').onclick = function() {
        for (i = 0; i < 12; i++) {
            arraystore[i] = arraystore17[i];
        }
        chartclick();
    }
}


function chartclick() {


    document.getElementById('maincard').style.opacity = '0.1';
    document.getElementById('loader').style.opacity = '0.1';
    document.getElementById('chartContainer1').style.display = 'block';
    document.getElementById('chartContainer').style.display = 'block';


    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "INDIVIDUAL METRICS"
        },
        animationEnabled: false,
        axisY: {
            includeZero: false
        },
        toolTip: {
            shared: "true"
        },
        data: [{
            type: "spline",
            showInLegend: true,
            name: "Respective Data",
            markerSize: 2,
            dataPoints: [{
                    x: new Date(cSSYearGlobal, 03, 30),
                    y: arraystore[0]
                },
                {
                    x: new Date(cSSYearGlobal, 04, 31),
                    y: arraystore[1]
                },
                {
                    x: new Date(cSSYearGlobal, 05, 30),
                    y: arraystore[2]
                },
                {
                    x: new Date(cSSYearGlobal, 06, 31),
                    y: arraystore[3]
                },
                {
                    x: new Date(cSSYearGlobal, 07, 31),
                    y: arraystore[4]
                },
                {
                    x: new Date(cSSYearGlobal, 08, 30),
                    y: arraystore[5]
                },
                {
                    x: new Date(cSSYearGlobal, 09, 31),
                    y: arraystore[6]
                },
                {
                    x: new Date(cSSYearGlobal, 10, 30),
                    y: arraystore[7]
                },
                {
                    x: new Date(cSSYearGlobal, 11, 31),
                    y: arraystore[8]
                },
                {
                    x: new Date(cSSYearGlobal + 1, 00, 31),
                    y: arraystore[9]
                },
                {
                    x: new Date(cSSYearGlobal + 1, 01, 29),
                    y: arraystore[10]
                },
                {
                    x: new Date(cSSYearGlobal + 1, 02, 31),
                    y: arraystore[11]
                }
            ]
        }]
    });
    chart.render();

}

//support plan ricket


function crossmark() {
    document.getElementById('maincard').style.opacity = '1.0';
    document.getElementById('loader').style.opacity = '1.0';
    document.getElementById('chartContainer1').style.display = 'none';
    document.getElementById('chartContainer').style.display = 'none';
}


function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

// function removeLocalStorage() {
//     localStorage.removeItem(myusername);
//     localStorage.removeItem(mynamedisplay);
// }
