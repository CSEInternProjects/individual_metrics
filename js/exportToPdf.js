function onexportclick() {

    var pdfex = new jsPDF();
    var imgData = 'data:image/jpeg;base64,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';

    pdfex.addImage(imgData, 'JPEG', 15, 10, 180, 25);

    var imgData1 = 'data:image/jpeg;base64,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'

    pdfex.addImage(imgData1, 'JPEG', 150, 250, 40, 20)
    edayshow = 0;
    eyearshow = ' ';
    if (cSMonthGlobal == 04 && cSSYearGlobal != cEYearGlobal) {
        //console.log("clicked correct");
        edayshow = 'FOR THE FINANCIAL YEAR ' + cSSYearGlobal;
    } else if (cSMonthGlobal == 01) {
        edayshow = 'FOR THE MONTH OF JANUARY';
    } else if (cSMonthGlobal == 02) {
        if (cSSYearGlobal / 4 == 0) {
            edayshow = 'FOR THE MONTH OF FEBRUARY';
        } else {
            edayshow = 'FOR THE MONTH OF FEBRUARY';
        }
    } else if (cSMonthGlobal == 03) {
        edayshow = 'FOR THE MONTH OF MARCH';
    } else if (cSMonthGlobal == 04) {
        edayshow = 'FOR THE MONTH OF APRIL';
    } else if (cSMonthGlobal == 05) {
        edayshow = 'FOR THE MONTH OF MAY';
    } else if (cSMonthGlobal == 06) {
        edayshow = 'FOR THE MONTH OF JUNE';
    } else if (cSMonthGlobal == 07) {
        edayshow = 'FOR THE MONTH OF JULY';
    } else if (cSMonthGlobal == 08) {
        edayshow = 'FOR THE MONTH OF AUGUST';
    } else if (cSMonthGlobal == 09) {
        edayshow = 'FOR THE MONTH OF SEPTEMBER';
    } else if (cSMonthGlobal == 10) {
        edayshow = 'FOR THE MONTH OF OCTOBER';
    } else if (cSMonthGlobal == 11) {
        edayshow = 'FOR THE MONTH OF NOVEMBER';
    } else if (cSMonthGlobal == 12) {
        edayshow = 'FOR THE MONTH OF DECEMBER';
    }
    pdfex.setFillColor(32, 124, 202);
    pdfex.setFontSize(14);
    pdfex.text(105, 45, "INDIVIDUAL PERFORMANCE METRICS " + edayshow + "-" + cEYearGlobal + ".", null, null, 'center');
    pdfex.setFontSize(10);
    pdfex.text(20, 55, "Hello " + localStorage.getItem('mynamedisplay') + ",");
    pdfex.text(20, 65, "Listed below are the Individual Performance Metrics for yourself. This is for your review and action. Thank you.");
    pdfex.setFontSize(12);
    pdfex.text(30, 80, ' 1. CSE Tickets Closed      ');
    pdfex.text(140, 80, ': ' + totalclosed);
    pdfex.text(30, 87, ' 2. CSE MTTR for CSE Tickets (in Days)                       ');
    pdfex.text(140, 87, ': ' + dateDiffMTTRavg);
    pdfex.text(30, 94, ' 3. Kony Wait Time on CSE Tickets (in Days) ');
    pdfex.text(140, 94, ': ' + requestertime1);
    pdfex.text(30, 101, ' 4. Requester Wait Time on CSE Tickets (in Days)     ');
    pdfex.text(140, 101, ': ' + agenttime1);
    pdfex.text(30, 108, ' 5. 1st Response Avg Time                                  ');
    pdfex.text(140, 108, ': ' + firstresponseavg);
    pdfex.text(30, 115, ' 6. 1st Response Target %          ');
    pdfex.text(140, 115, ': ');
    pdfex.text(30, 122, ' 7. Escalated Tickets (CSE and L3)  ');
    pdfex.text(140, 122, ': ' + countescalatedreason);
    pdfex.text(30, 129, ' 8. CSE Resolution Target Met %      ');
    pdfex.text(140, 129, ': ' + resolutionTargetPer + '%');
    pdfex.text(30, 136, ' 9. CSE Good Feedbacks                       ');
    pdfex.text(140, 136, ': ' + countgoodfeedbacks);
    pdfex.text(30, 143, '10. CSE Good Feedbacks %             ');
    pdfex.text(140, 143, ': ' + goodfeedbacksper + '%');
    pdfex.text(30, 150, '11. CSE Tickets CSAT Responses    ');
    pdfex.text(140, 150, ': ' + counttotalfeedbacks);
    pdfex.text(30, 157, '12. CSE Tickets CSAT Responses %    ');
    pdfex.text(140, 157, ': ' + offeredfeedbacksper + '%');
    pdfex.text(30, 164, '13. CSE Public Comments for CSE Tickets ');
    pdfex.text(140, 164, ': ' + counttotalreplies);
    pdfex.text(30, 171, '14. Tickets Assigned to L3          ');
    pdfex.text(140, 171, ': ' + countassigneel3);
    pdfex.text(30, 178, '15. Tickets L3 returned as Not a Bug  ');
    pdfex.text(140, 178, ': ' + countnotasbug);
    pdfex.text(30, 185, '16. Bug Quality %                ');
    pdfex.text(140, 185, ': ' + cserootcauseper + '%');
    pdfex.text(30, 192, '17. CSE MTTR for L3 Tickets (in Days)  ');
    pdfex.text(140, 192, ': ' + dateDiffMTTRl3avg)
    pdfex.save('INDIVIDUAL MERTICS ' + edayshow + '-' + cEYearGlobal + '.pdf');
    //console.log("clicked");
}