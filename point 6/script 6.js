const Table = document.querySelector("#mainDiv");

function Start(){
    let d = new Date();

    let myDate = {
        weakDay: d.getDay(),
        hour: d.getHours(),
        min: d.getMinutes(),
        second: d.getSeconds(),
    };

    printDate(myDate);
}

function printDate(myDate){

    const weak = ["воскресенье", "понедельник", "вторник", "среда", "четверг", 
    "пятница", "суббота"];

    const longWeakDay = weak[myDate.weakDay];

    let nYear = newYear();

    myDate = setZero(myDate);
    
    let hours = myDate.hour;
    let minutes = myDate.min;
    let seconds = myDate.second;

    let prefix;

    if (hours > 12){
        hours = hours - 12;
        prefix = "PM";
    }
    else{
        prefix = "AM";
    }
    let divs = [];
    divs[0] = document.createElement("div");
    divs[0].textContent = `Добрый ${partOfDay(myDate)})`;

    divs[1] = document.createElement("div");
    divs[1].textContent = `Сегодня: ${longWeakDay}`;

    divs[2] = document.createElement("div");
    divs[2].textContent = `Текущее время: ${hours}:${minutes}:${seconds} ${prefix}`;

    divs[3] = document.createElement("div");
    divs[3].textContent = `До нового года осталось ${nYear} дней`;

    Table.textContent = "";
    divs.forEach(div => {
        Table.append(div);
    } );
}

function partOfDay(myDate) {
    const parts = ["ночь", "утро", "день", "вечер"];

    let pOfDay;
    let hours = myDate.hour;

    if((hours > 0)&(hours < 6)) {
        pOfDay = parts[0];
    }
    else if(hours < 12){
        pOfDay = parts[1];
    }
    else if(hours < 18){
        pOfDay = parts[2];
    }
    else{
        pOfDay = parts[3];
    }
    return pOfDay;
}

function newYear(){
    
    const newYear = new Date("1 january 2022");
    let d = new Date();
    let newYearTime = newYear.getTime();
    let nowTime = d.getTime();

    let remaind = newYearTime - nowTime;
    let newYearSec = Math.floor(remaind / 1000);
    let newYearMin = Math.floor(newYearSec / 60);
    let newYearHour = Math.floor(newYearMin / 60);
    let newYearDays = Math.floor(newYearHour / 24);

    return newYearDays;
}

function setZero(myDate){
    for(let k in myDate){
        if(parseInt(myDate[k]) < 10){
            myDate[k] = "0" + (myDate[k]);
            }
        }
        return myDate;
    }

    Start();
    setInterval(Start, 1000);