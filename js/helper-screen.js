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
        case "es":
            var dane = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
            break;
        case "ro":
            var dane = ['Duminică','Luni','Marți','Miercuri','Joi','Vineri','Sâmbătă'];
            break;
        case "it":
            var dane = ['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato'];
            break;
        case "pt":
            var dane = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
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
        case "es":
            var mjeseci = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            break;
        case "ro":
            var mjeseci = ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'];
            break;
        case "it":
            var mjeseci = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
            break;
        case "pt":
            var mjeseci = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
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
            case "es":
                return "mañana"
                //break;
            case "ro":
                return "dimineață"
                //break;
            case "it":
                return "mattina"
            case "pt":
                return "manhã"
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
            case "es":
                return "tarde"
                //break;
            case "ro":
                return "după-amiază"
                //break;
            case "it":
                return "pomeriggio"
            case "pt":
                return "tarde"
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
            case "es":
                if (h >= 18 && h < 20) {
                    return "tarde"
                } else {
                    return "noche"
                }
                //break;
            case "ro":
                return "seară"
                //break;
            case "it":
                return "sera"
            case "pt":
                return "noite"
            default:
                return "evening"
        }
    }
}