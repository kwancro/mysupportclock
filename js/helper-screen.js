// Start
initialStart();

function initialStart() {
    //Get time
    var now = new Date();
    startTime();
    let day = checkDay(now);
    let month = checkMonth(now);
    let date = now.getDate();
    let year = now.getFullYear();
    let amPm = timeOfDay(now);
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
function checkDay(nowDate) {
    //var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dane = ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'];
    var day = nowDate.getDay();
    return dane[day];
}

// Month Selection
function checkMonth(nowDate) {
    //var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var mjeseci = ['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj','Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'];
    var month = nowDate.getMonth();
    return mjeseci[month];
}
// Time of day
function timeOfDay(nowDate) {
    let h = nowDate.getHours();
    if (h < 12) {
        return "ujutro";
    } else if (h >= 12 && h < 18) {
        return "popodne";
    } else { 
        return "navečer";
    }
}