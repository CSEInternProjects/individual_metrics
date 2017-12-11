var cSYearGlobal;

function mainClass() {
    var cYear = new Date();
    cSYearGlobal = cYear.getFullYear();
    var tempNextYear = cSYearGlobal + 1;
    document.getElementById('middleButton').innerHTML = "" + cSYearGlobal + "-" + tempNextYear + "";

    var cMonth = new Date();
    TempMonth = cMonth.getMonth();
    TempMonth++;
    if (TempMonth == 01) {
        clickJan();
    } else if (TempMonth == 02) {
        clickFeb();
    } else if (TempMonth == 03) {
        clickMar();
    } else if (TempMonth == 04) {
        clickApr();
    } else if (TempMonth == 05) {
        clickMay();
    } else if (TempMonth == 06) {
        clickJun();
    } else if (TempMonth == 07) {
        clickJul();
    } else if (TempMonth == 08) {
        clickAug();
    } else if (TempMonth == 09) {
        clickSep();
    } else if (TempMonth == 10) {
        clickOct();
    } else if (TempMonth == 11) {
        clickNov();
    } else if (TempMonth == 12) {
        clickDec();
    }
}

function leftYPress() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#29B6F6';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';

    cSYearGlobal--;
    var tempNextYear = cSYearGlobal + 1;
    document.getElementById('middleButton').innerHTML = "" + cSYearGlobal + "-" + tempNextYear + "";
    createChart();
}

function rightYPress() {
    document.getElementById('rightButton').style.backgroundColor = '#29B6F6';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';

    cSYearGlobal++;
    var tempNextYear = cSYearGlobal + 1;
    document.getElementById('middleButton').innerHTML = "" + cSYearGlobal + "-" + tempNextYear + "";
    createChart();
}

var cSDayGlobal;
var cEDayGlobal;
var cSMonthGlobal;
var cEmonthGlobal;
var cEYearGlobal;

function clickYear() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#29B6F6';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';

    cSDayGlobal = 01;
    cEDayGlobal = 31;
    cSMonthGlobal = 04;
    cEmonthGlobal = 03;
    cEYearGlobal = cSYearGlobal + 1;
    var cSSYearGlobal = cSYearGlobal;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
    createChart();
}

function clickJan() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#29B6F6';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';

    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 01;
    cEmonthGlobal = 02;
    var cSSYearGlobal = cSYearGlobal + 1;
    cEYearGlobal = cSYearGlobal + 1;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);


}

function clickFeb() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#29B6F6';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 02;
    cEmonthGlobal = 03;
    var cSSYearGlobal = cSYearGlobal + 1;
    cEYearGlobal = cSYearGlobal + 1;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}

function clickMar() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#29B6F6';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 03;
    cEmonthGlobal = 04;
    var cSSYearGlobal = cSYearGlobal + 1;
    cEYearGlobal = cSYearGlobal + 1;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}

function clickApr() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#29B6F6';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 04;
    cEmonthGlobal = 05;
    cSSYearGlobal = cSYearGlobal;
    cEYearGlobal = cSYearGlobal;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}

function clickMay() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#29B6F6';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 05;
    cEmonthGlobal = 06;
    cSSYearGlobal = cSYearGlobal;
    cEYearGlobal = cSYearGlobal;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);

}

function clickJun() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#29B6F6';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 06;
    cEmonthGlobal = 07;
    cSSYearGlobal = cSYearGlobal;
    cEYearGlobal = cSYearGlobal;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}

function clickJul() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#29B6F6';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';


    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 07;
    cEmonthGlobal = 08;
    cSSYearGlobal = cSYearGlobal;
    cEYearGlobal = cSYearGlobal;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}

function clickAug() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#29B6F6';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 08;
    cEmonthGlobal = 09;
    cSSYearGlobal = cSYearGlobal;
    cEYearGlobal = cSYearGlobal;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}

function clickSep() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#29B6F6';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 09;
    cEmonthGlobal = 10;
    cSSYearGlobal = cSYearGlobal;
    cEYearGlobal = cSYearGlobal;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}

function clickOct() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#29B6F6';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 10;
    cEmonthGlobal = 11;
    cSSYearGlobal = cSYearGlobal;
    cEYearGlobal = cSYearGlobal;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}

function clickNov() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#29B6F6';
    document.getElementById('mDEC').style.backgroundColor = '#FFFFFF';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 11;
    cEmonthGlobal = 12;
    cSSYearGlobal = cSYearGlobal;
    cEYearGlobal = cSYearGlobal;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}

function clickDec() {
    document.getElementById('rightButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('leftButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('middleButton').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJAN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mFEB').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAPR').style.backgroundColor = '#FFFFFF';
    document.getElementById('mMAY').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUN').style.backgroundColor = '#FFFFFF';
    document.getElementById('mJUL').style.backgroundColor = '#FFFFFF';
    document.getElementById('mAUG').style.backgroundColor = '#FFFFFF';
    document.getElementById('mSEP').style.backgroundColor = '#FFFFFF';
    document.getElementById('mOCT').style.backgroundColor = '#FFFFFF';
    document.getElementById('mNOV').style.backgroundColor = '#FFFFFF';
    document.getElementById('mDEC').style.backgroundColor = '#29B6F6';
    cSDayGlobal = 01;
    cEDayGlobal = 01;
    cSMonthGlobal = 12;
    cEmonthGlobal = 01;
    cSSYearGlobal = cSYearGlobal;
    cEYearGlobal = cSYearGlobal + 1;
    //console.log("" + cSDayGlobal + "-" + cSMonthGlobal + "-" + cSSYearGlobal + "/" + cEDayGlobal + "-" + cEmonthGlobal + "-" + cEYearGlobal + "");
    fetchTickets(Username1, cSMonthGlobal, cSDayGlobal, cSSYearGlobal, cEmonthGlobal, cEDayGlobal, cEYearGlobal);
}
