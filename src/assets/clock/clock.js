// var second=0;

setInterval(()=>{
    d=new Date();
    hour=d.getHours();
    minute=d.getMinutes();
    second=d.getSeconds();
    hrotation=30*hour+ minute/2;
    mrotation=6*minute;
    srotation=6*second;
    date=d.getDate();
    

    document.querySelector('#hour-hand').style.transform=`rotate(${hrotation}deg)`;  

    document.querySelector('#minute-hand').style.transform=`rotate(${mrotation}deg)`;

    document.querySelector('#second-hand').style.transform=`rotate(${srotation}deg)`;
},1000);

function updateClock() {
    const dateElement = document.getElementById("date");
    const dayElement = document.getElementById("day");
    
    const now = new Date();
    
    // Get the date in double digits
    let day = now.getDate();
    if (day < 10) {
        day = '0' + day;
    }


    // Get the day name
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[now.getDay()].substring(0, 3);
    
    // Update the DOM using innerHTML
    dateElement.innerHTML = `${day}`;
    dayElement.innerHTML = dayName;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display immediately
updateClock();
