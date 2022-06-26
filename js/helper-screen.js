// Start
initialStart();

function initialStart() {
    // Get parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang');
    //Get time
    var now = new Date();
    startTime();
    let day = checkDay(now, lang);
    let month = checkMonth(now, lang);
    let date = now.getDate();
    let year = now.getFullYear();
    let amPm = timeOfDay(now, lang);
    document.getElementById('day').innerHTML =  day;
    document.getElementById('amPm').innerHTML =  amPm;
    document.getElementById('date').innerHTML =  date + " " + month + " " + year;
    //document.getElementById('month').innerHTML =  month;
    //document.getElementById('year').innerHTML =  year;
    setTimeout(initialStart, 2000);
}

// Time
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    //s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m; // + ":" + s;
    // Refresh on the hour
    //if (m = 00) {
    //    if (s = 00) {
    //        initialStart() 
    //    }
    //}
    //setTimeout(startTime, 1000);
}

// Add zero in front of numbers < 10
function checkTime(i) {
if (i < 10) {i = "0" + i};  
return i;
}

///////////////////////////////////////////////

// Day selection
function checkDay(nowDate, lang) {
    switch (lang) {
        case "hr":
            var dane = ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'];
            break;
        case "en":
            var dane = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            break;
        default:
            var dane = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    }
    // if (lang == "hr") {
    //     //var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    //     var dane = ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'];
        
    // } else if (lang == "en") {
    //     var dane = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    // } else {
    //     // default language is English
    //     var dane = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    // }
    var day = nowDate.getDay();
    return dane[day];
}

// Month Selection
function checkMonth(nowDate, lang) {

    switch (lang) {
        case "hr":
            var mjeseci = ['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj','Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'];
            break;
        case "en":
            var mjeseci = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            break;
        default:
            var mjeseci = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    }

    // if (lang == "hr"){
    //     var mjeseci = ['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj','Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'];
    // } else if (lang == "en"){
    //     var mjeseci = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    // } else {
    //     var mjeseci = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    // }
    var month = nowDate.getMonth();
    return mjeseci[month];
}
// Time of day
function timeOfDay(nowDate, lang) {
    let h = nowDate.getHours();
    if (h < 12) {
        switch (lang) {
            case "hr":
                return "ujutro"
                //break;
            case "en":
                return "morning"
                //break;
            default:
                return "morning"
        }
    } else if (h >= 12 && h < 18) {
        switch (lang) {
            case "hr":
                return "popodne"
                //break;
            case "en":
                return "afternoon"
                //break;
            default:
                return "afternoon"
        }
    } else { 
        switch (lang) {
            case "hr":
                return "navečer"
                //break;
            case "en":
                return "evening"
                //break;
            default:
                return "evening"
        }
    }
}