function mainCardsLogic() {
    if (dataTemp.length != 0) {
        for (var z = 0; z < dataTemp.length; z++) {
            k = 0;
            temp = {};
            var platformfeature = dataTemp[z].Tags;
            var changerequestflag = dataTemp[z].Change_Request_;


            if (dataTemp[z].Status == "Closed" && platformfeature.indexOf("platform__feature_request") == -1 && changerequestflag.indexOf("yes") == -1 && platformfeature.indexOf("finance_hold") == -1 && platformfeature.indexOf("finance_restored") == -1) {

                if (dataTemp[z].Assignee == "Kony Product Support" || dataTemp[z].Assignee == "Kony BDE Product Support") {

                    //closed tickets total
                    temp[k++] = dataTemp[z];
                    res3.push(temp);
                    totalclosed = totalclosed + 1;

                    //mttr of cse tickets

                    var date1 = new Date(dataTemp[z].Solved_at);
                    var date2 = new Date(dataTemp[z].Created_at);
                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                    var diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                    dateDiffMTTR = parseFloat(dateDiffMTTR + diffDays);

                    //mttr segrigation

                    if (dataTemp[z]['Customer_Support_Plan(Ticket)_'] == "Premier" || dataTemp[z]['Customer_Support_Plan(Ticket)_'] == "Premier-Plus") {
                        var date1 = new Date(dataTemp[z].Solved_at);
                        var date2 = new Date(dataTemp[z].Created_at);
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttrforpremier = parseFloat(mttrforpremier + diffDays);
                        countmttrpremier++;
                    } else if (dataTemp[z]['Customer_Support_Plan(Ticket)_'] == "Standard-Plus" || dataTemp[z]['Customer_Support_Plan(Ticket)_'] == "Standard") {
                        var date1 = new Date(dataTemp[z].Solved_at);
                        var date2 = new Date(dataTemp[z].Created_at);
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttrforstandard = parseFloat(mttrforstandard + diffDays);
                    }

                    //kony requester wait time in hours

                    var requestertime = dataTemp[z].Requester_wait_time_in_minutes;
                    requestertime2 = parseFloat(requestertime / 1440);
                    requestertime1 = parseFloat(requestertime1 + requestertime2);

                    //Agent wait time in minutes

                    var agenttime = dataTemp[z].Agent_wait_time_in_minutes;
                    agenttime2 = parseFloat(agenttime / 1440);
                    agenttime1 = parseFloat(agenttime1 + agenttime2);

                    //first Response average time

                    var firstresponse = dataTemp[z].First_reply_time_in_minutes;
                    firstresponse2 = parseFloat(firstresponse / 60);
                    firstresponse1 = parseFloat(firstresponse1 + firstresponse2);

                    //1st response Target


                    //Escalated Reason

                    var escalatedreason = dataTemp[z].Tags;
                    if (escalatedreason.indexOf("l2_escalated") != -1) {
                        countescalatedreason++;
                    }


                    //CSE Resolution target %

                    if ((dataTemp[z].Requester_wait_time_in_minutes <= 1440 && escalatedreason.indexOf("critical") != -1) || (dataTemp[z].Requester_wait_time_in_minutes <= 10080 && escalatedreason.indexOf("high") != -1) || (dataTemp[z].Requester_wait_time_in_minutes <= 30240 && escalatedreason.indexOf("medium") != -1 || dataTemp[z].Requester_wait_time_in_minutes <= 30240 && dataTemp[z].Severity_ == '-') || (dataTemp[z].Requester_wait_time_in_minutes <= 30240 && escalatedreason.indexOf("low") != -1)) {
                        resolutionTargetTotalPos++;
                        resolutionTargetTotalcount++;
                    } else if ((dataTemp[z].Requester_wait_time_in_minutes > 1440 && escalatedreason.indexOf("critical") != -1) || (dataTemp[z].Requester_wait_time_in_minutes > 10080 && escalatedreason.indexOf("high") != -1) || (dataTemp[z].Requester_wait_time_in_minutes > 30240 && escalatedreason.indexOf("medium") != -1 || dataTemp[z].Requester_wait_time_in_minutes > 30240 && dataTemp[z].Severity_ == '-') || (dataTemp[z].Requester_wait_time_in_minutes > 30240 && escalatedreason.indexOf("low") != -1)) {
                        resolutionTargetTotalcount++;
                    }

                    if (dataTemp[z]['Customer_Support_Plan(Ticket)_'] == "Premier" || dataTemp[z]['Customer_Support_Plan(Ticket)_'] == "Premier-Plus") {
                        if ((dataTemp[z].Requester_wait_time_in_minutes <= 1440 && dataTemp[z].Severity_ == 'Critical') || (dataTemp[z].Requester_wait_time_in_minutes <= 10080 && dataTemp[z].Severity_ == 'High') || (dataTemp[z].Requester_wait_time_in_minutes <= 30240 && dataTemp[z].Severity_ == 'Medium') || (dataTemp[z].Requester_wait_time_in_minutes <= 30240 && dataTemp[z].Severity_ == 'Low') || dataTemp[z].Requester_wait_time_in_minutes <= 30240 && dataTemp[z].Severity_ == '-') {
                            resolutionTargetTotalPosP++;
                            resolutionTargetTotalcountP++;
                        } else if ((dataTemp[z].Requester_wait_time_in_minutes > 1440 && dataTemp[z].Severity_ == 'Critical') || (dataTemp[z].Requester_wait_time_in_minutes > 10080 && dataTemp[z].Severity_ == 'High') || (dataTemp[z].Requester_wait_time_in_minutes > 30240 && dataTemp[z].Severity_ == 'Medium') || (dataTemp[z].Requester_wait_time_in_minutes > 30240 && dataTemp[z].Severity_ == 'Low') || dataTemp[z].Requester_wait_time_in_minutes > 30240 && dataTemp[z].Severity_ == '-') {
                            resolutionTargetTotalcountP++;
                        }
                    } else if (dataTemp[z]['Customer_Support_Plan(Ticket)_'] == "Standard" || dataTemp[z]['Customer_Support_Plan(Ticket)_'] == "Standard-Plus") {
                        if ((dataTemp[z].Requester_wait_time_in_minutes <= 1440 && dataTemp[z].Severity_ == 'Critical') || (dataTemp[z].Requester_wait_time_in_minutes <= 10080 && dataTemp[z].Severity_ == 'High') || (dataTemp[z].Requester_wait_time_in_minutes <= 30240 && dataTemp[z].Severity_ == 'Medium') || (dataTemp[z].Requester_wait_time_in_minutes <= 30240 && dataTemp[z].Severity_ == 'Low') || dataTemp[z].Requester_wait_time_in_minutes <= 30240 && dataTemp[z].Severity_ == '-') {
                            resolutionTargetTotalPosSt++;
                            resolutionTargetTotalcountSt++;
                        } else if ((dataTemp[z].Requester_wait_time_in_minutes > 1440 && dataTemp[z].Severity_ == 'Critical') || (dataTemp[z].Requester_wait_time_in_minutes > 10080 && dataTemp[z].Severity_ == 'High') || (dataTemp[z].Requester_wait_time_in_minutes > 30240 && dataTemp[z].Severity_ == 'Medium') || (dataTemp[z].Requester_wait_time_in_minutes > 30240 && dataTemp[z].Severity_ == 'Low') || dataTemp[z].Requester_wait_time_in_minutes > 30240 && dataTemp[z].Severity_ == '-') {
                            resolutionTargetTotalcountSt++;
                        }
                    }



                    //Good Feedbacks

                    var goodfeedbacks = dataTemp[z].Satisfaction_Score;
                    if (goodfeedbacks.indexOf("Good") != -1) {
                        countgoodfeedbacks++;
                    }


                    //percentage of goodfeedbacks

                    var totalfeedbacksper = dataTemp[z].Satisfaction_Score;
                    if (totalfeedbacksper.indexOf("Good") != -1 || totalfeedbacksper.indexOf("Bad") != -1) {
                        counttotalfeedbacks++;

                    }
                    if (counttotalfeedbacks != 0) {
                        goodfeedbacksper = (countgoodfeedbacks / counttotalfeedbacks) * 100;
                    } else {
                        goodfeedbacksper = 0;
                    }

                    //csat responses

                    // ("counttotalfeedbacks" is the solution)

                    //csat % responses

                    var offeredfeedbacks = dataTemp[z].Satisfaction_Score;
                    if (dataTemp[z].Satisfaction_Score == "Offered" || dataTemp[z].Satisfaction_Score == "Good" || dataTemp[z].Satisfaction_Score == "Bad") {
                        countofferedfeedbacks++;

                    }
                    offeredfeedbacksper = (counttotalfeedbacks / countofferedfeedbacks) * 100;

                    //total replies public Comments for cse tickets

                    var totalreplies = parseInt(dataTemp[z].Replies);
                    counttotalreplies = parseInt(counttotalreplies + totalreplies);


                } else if (dataTemp[z].Assignee == "Kony L3 Product Support") {

                    //tickets Assigned to L3

                    assigneeL3 = dataTemp[z].Assignee;
                    if (assigneeL3 == "Kony L3 Product Support") {
                        countassigneel3++;

                    }

                    //Escalated Reason L3

                    var escalatedreason = dataTemp[z].Tags;
                    if (escalatedreason.indexOf("l2_escalated") != -1) {
                        countescalatedreason++;
                    }

                    //returned not as bug
                    platformteam = dataTemp[z].Platform_team_;
                    if ((assigneeL3 == "Kony Product Support" || assigneeL3 == "Kony BDE Product Support") && platformteam == "Product Support") {
                        countnotasbug++;
                    }

                    //bug Quality %

                    var cserootcause = dataTemp[z].CSE_Root_Cause_Category_;
                    if (assigneeL3 == "kony L3 Product Support") {
                        if (cserootcause == "Knowledge Gap" || cserootcause == "App Issues") {
                            countcserootcause++;
                        }
                    }
                    cserootcausetotal = countassigneel3 - countcserootcause;
                    if (cserootcausetotal == 0) {
                        cserootcauseper = 100;
                    } else {
                        cserootcauseper = (cserootcausetotal / countassigneel3) * 100;
                    }

                    //mttr for L3 tickets

                    if (assigneeL3 == "Kony L3 Product Support") {
                        var date1 = new Date(dataTemp[z].Assigned_at);
                        var date2 = new Date(dataTemp[z].Created_at);
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));

                        dateDiffMTTRl3 = parseFloat(dateDiffMTTRl3 + diffDays);
                    }
                }
            }

        }

        //firstresponse average
        firstresponseavg = parseFloat(firstresponse1 / totalclosed);
        firstresponseavg1 = parseInt(firstresponseavg);
        firstresponseavgdecimal = parseFloat(firstresponseavg - firstresponseavg1);
        firstresponseavgdecimal = (firstresponseavgdecimal / 100) * 60;
        firstresponseavg = firstresponseavg1 + firstresponseavgdecimal;

        //mttr average
        dateDiffMTTRavg = parseFloat(dateDiffMTTR / totalclosed);
        mttrforstandard = parseFloat(mttrforstandard / (totalclosed - countmttrpremier));
        if (countmttrpremier != 0) {
            mttrforpremier = parseFloat(mttrforpremier / countmttrpremier);
        } else if (countmttrpremier == 0) {
            mttrforpremier = 0;
        }

        //mttr L3 average
        dateDiffMTTRl3avg = parseFloat(dateDiffMTTRl3 / countassigneel3);

        //resolution target avg
        resolutionTargetPer = (resolutionTargetTotalPos / resolutionTargetTotalcount) * 100;
        if (resolutionTargetTotalcountSt != 0) {
            resolutionTargetPerSt = (resolutionTargetTotalPosSt / resolutionTargetTotalcountSt) * 100;
        } else {
            resolutionTargetPerSt = 100;
        }
        if (resolutionTargetTotalcountP != 0) {
            resolutionTargetPerP = (resolutionTargetTotalPosP / resolutionTargetTotalcountP) * 100;
        } else {
            resolutionTargetPerP = 100;
        }

        document.getElementById('val1').innerHTML = totalclosed;
        dateDiffMTTRavg = Math.round(dateDiffMTTRavg * 10) / 10;
        document.getElementById('val2').innerHTML = dateDiffMTTRavg;
        requestertime1 = Math.round(requestertime1 * 10) / 10;
        document.getElementById('val3').innerHTML = requestertime1;
        agenttime1 = Math.round(agenttime1 * 10) / 10;
        document.getElementById('val4').innerHTML = agenttime1;
        firstresponseavg = firstresponseavg.toFixed(2);
        document.getElementById('val5').innerHTML = firstresponseavg;
        //document.getElementById('val6').innerHTML= ;
        document.getElementById('val7').innerHTML = countnotasbug;
        resolutionTargetPer = Math.round(resolutionTargetPer * 10) / 10;
        document.getElementById('val8').innerHTML = resolutionTargetPer + "%";
        document.getElementById('val9').innerHTML = countgoodfeedbacks;
        goodfeedbacksper = Math.round(goodfeedbacksper * 10) / 10;
        document.getElementById('val10').innerHTML = goodfeedbacksper + "%";
        document.getElementById('val11').innerHTML = counttotalfeedbacks;
        offeredfeedbacksper = Math.round(offeredfeedbacksper * 10) / 10;
        document.getElementById('val12').innerHTML = offeredfeedbacksper + "%";
        document.getElementById('val13').innerHTML = counttotalreplies;
        document.getElementById('val14').innerHTML = countassigneel3;
        document.getElementById('val15').innerHTML = countescalatedreason;
        if (countassigneel3 == 0) {
            cserootcauseper = 100;
            document.getElementById('val16').innerHTML = "100%";
        } else {
            cserootcauseper = cserootcauseper.toFixed(2);
            document.getElementById('val16').innerHTML = cserootcauseper + "%";
        }
        dateDiffMTTRl3avg = dateDiffMTTRl3avg.toFixed(2);
        if (countassigneel3 == 0) {
            document.getElementById('val17').innerHTML = "0";
        } else {
            dateDiffMTTRl3avg = Math.round(dateDiffMTTRl3avg * 10) / 10;
            document.getElementById('val17').innerHTML = dateDiffMTTRl3avg;
        }


        n = 0;
        for (m = 1; m < 19; m++) {
            if (n == '-') {
                document.getElementById('tdd' + m).style.width = n + '%';
                document.getElementById('tdd' + m).style.backgroundColor = '#4D57E2';
                if (m < 13) {

                    document.getElementById('ld' + m).innerHTML = "<h2 id='h2per'>" + n + "%<h2>";
                }
            } else if (n == 0) {
                document.getElementById('tdd' + m).style.width = '100%';
                document.getElementById('tdd' + m).style.backgroundColor = '#4D57E2';
                if (m < 13) {
                    document.getElementById('ld' + m).innerHTML = "<h2 id='h2per'>   -<h2>";
                }
            } else if (n == 1) {
                document.getElementById('tdd' + m).style.width = '100%';
                document.getElementById('tdd' + m).style.backgroundColor = '#25CE04';
                if (m < 13) {
                    document.getElementById('ld' + m).innerHTML += "<h2 id='h2per'>" + n + "%</h2>";
                }
            }
        }


        if (mttrforpremier <= 9 && mttrforstandard <= 10) {
            countScore++;
            document.getElementById('tdd2').style.backgroundColor = '#25CE04';
            document.getElementById('ld2').innerHTML = "<h2 id='h2per'>-1-</h2>";
        } else {
            document.getElementById('tdd2').style.backgroundColor = 'rgba(255,103,15,1)';
            document.getElementById('ld2').innerHTML = "<h2 id='h2per'>-0-</h2>";
        }
        if (countescalatedreason == 0) {
            countScore++;
            document.getElementById('tdd15').style.backgroundColor = '#25CE04';

        } else {
            document.getElementById('tdd15').style.backgroundColor = 'rgba(255,103,15,1)';


        }
        if (goodfeedbacksper >= 93.5) {
            countScore++;
            document.getElementById('tdd10').style.backgroundColor = '#25CE04';
            document.getElementById('ld10').innerHTML = "<h2 id='h2per'>-1-</h2>";
        } else {
            document.getElementById('tdd10').style.backgroundColor = 'rgba(255,103,15,1)';
            document.getElementById('ld10').innerHTML = "<h2 id='h2per'>-0-</h2>";
        }
        if (offeredfeedbacksper >= 25) {
            countScore++;
            document.getElementById('tdd12').style.backgroundColor = '#25CE04';
            document.getElementById('ld12').innerHTML = "<h2 id='h2per'>-1-</h2>";
        } else {
            document.getElementById('tdd12').style.backgroundColor = 'rgba(255,103,15,1)';
            document.getElementById('ld12').innerHTML = "<h2 id='h2per'>-0-</h2>";
        }
        if (cserootcauseper == 100) {
            countScore++;
            document.getElementById('tdd16').style.backgroundColor = '#25CE04';

        } else {
            document.getElementById('tdd16').style.backgroundColor = 'rgba(255,103,15,1)';

        }
        if (countnotasbug == 0) {
            countScore++;
            document.getElementById('tdd7').style.backgroundColor = '#25CE04';
            document.getElementById('ld7').innerHTML = "<h2 id='h2per'>-1-</h2>";
        } else {
            document.getElementById('tdd7').style.backgroundColor = 'rgba(255,103,15,1)';
            document.getElementById('ld7').innerHTML = "<h2 id='h2per'>-0-</h2>";
        }
        if (resolutionTargetPerSt >= 90 && resolutionTargetPerP >= 95) {
            countScore++;
            document.getElementById('tdd8').style.backgroundColor = '#25CE04';
            document.getElementById('ld8').innerHTML = "<h2 id='h2per'>-1-</h2>";
        } else {
            document.getElementById('tdd8').style.backgroundColor = 'rgba(255,103,15,1)';
            document.getElementById('ld8').innerHTML = "<h2 id='h2per'>-0-</h2>";
        }


        totalScore = (countScore / 7) * 100;
        //console.log(totalScore);
        totalScore = totalScore.toFixed(0);
        //document.getElementById('nav-wrapper').innerHTML += '';
        //document.getElementById('Performance-score').innerHTML = '';
        //wait(2000);
        var aloha = document.getElementById('Performance-score')
        aloha.innerText = 'Your score is : ' + totalScore + '';


        totalScore = 0;
        countScore = 0;

        //span creation

        document.getElementById('itooltip1').innerHTML = "Here you can see the total number of tickets that are closed in that specific date range.";
        document.getElementById('itooltip2').innerHTML = "Your average MTTR for closed tickets.<br> Sandard: " + mttrforstandard.toFixed(1) + "/10<br> Premier: " + mttrforpremier.toFixed(1) + "/9";
        document.getElementById('itooltip3').innerHTML = "Total time spent by the Engineer to handle all the tickets in days.";
        document.getElementById('itooltip4').innerHTML = "Total time spent by the ageant to close the ticket for all the tickets in days.";
        document.getElementById('itooltip5').innerHTML = "Average time taken for the first response in HHMM format.";
        document.getElementById('itooltip6').innerHTML = "";
        document.getElementById('itooltip7').innerHTML = "Number of L2 tickets in Knowledge gap or Analyses gap.<br>Goal Should be 0 tickets.";
        document.getElementById('itooltip8').innerHTML = "Your resolution target for that specific month. <br> Standard: " + resolutionTargetPerSt.toFixed(1) + "/90 <br> Premier: " + resolutionTargetPerP.toFixed(1) + "/95";
        document.getElementById('itooltip9').innerHTML = "Number of Good feedbacks that you got.";
        document.getElementById('itooltip10').innerHTML = "Good feedbacks percentage with respective to bad feedbacks.<br>Goal should be 93.5%.";
        document.getElementById('itooltip11').innerHTML = "number of CSAT responses that an Engineer gets.";
        document.getElementById('itooltip12').innerHTML = "Precentage of CSAT responses that an Engineer gets with respective to total offered feedbacks.<br> Goal should be 25%.";
        document.getElementById('itooltip13').innerHTML = "Total numbers of public comments by an Engineer on closed tickets.";
        document.getElementById('itooltip14').innerHTML = "Total number of tickets Assigned to L3 in that specific date range.";
        document.getElementById('itooltip15').innerHTML = "Total number of Escalated tickets in that specific date range.<br>Goal should be 0 tickets.";
        document.getElementById('itooltip16').innerHTML = "Total number of tickets in L3 with respective to Knowledge gap and App issues percentage.";
        document.getElementById('itooltip17').innerHTML = "Average MTTR for L3 Tickets.";
        document.getElementById('itooltip18').innerHTML = "Total numbber of KB articles for that specific Month.";

    } else {
        document.getElementById('val1').innerHTML = "0";
        document.getElementById('val2').innerHTML = "0";
        document.getElementById('val3').innerHTML = "0";
        document.getElementById('val4').innerHTML = "0";
        document.getElementById('val5').innerHTML = "0";
        //document.getElementById('val6').innerHTML= ;
        document.getElementById('val7').innerHTML = "0";
        document.getElementById('val8').innerHTML = "0%";
        document.getElementById('val9').innerHTML = "0";
        document.getElementById('val10').innerHTML = "0%";
        document.getElementById('val11').innerHTML = "0";
        document.getElementById('val12').innerHTML = "0%";
        document.getElementById('val13').innerHTML = "0";
        document.getElementById('val14').innerHTML = "0";
        document.getElementById('val15').innerHTML = "0";
        document.getElementById('val16').innerHTML = "0%";
        document.getElementById('val17').innerHTML = "0";

        alert("No data available for that specific dates or The Engineer may be a BDE member so data isn't available.");
    }
}
