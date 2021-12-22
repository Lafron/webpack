const timers = deadline => {   
    const timerDays = document.querySelector("#timer-days");
    const timerHours = document.querySelector("#timer-hours");
    const timerMinutes = document.querySelector("#timer-minutes");
    const timerSeconds = document.querySelector("#timer-seconds");

    const getTimeRemaining = deadline => {
        
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();

        let timeRemaining = (dateStop - dateNow)/1000;

        let days = Math.floor(timeRemaining / 3600 /24);
        let hours = Math.floor((timeRemaining / 3600) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds };
        
    };


    const updateClock = () => {
        let getTime = getTimeRemaining(deadline);

//        console.log(getTime);
        if(getTime.timeRemaining > 0){
            //let days, hours, minutes, seconds;
            for (let k in getTime){
                if (getTime[k] < 10) {
                    getTime[k] = "0" + getTime[k];
                }
            }

            timerDays.textContent = getTime.days;
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;
            
            //console.log(getTime.seconds);
            setInterval(updateClock, 1000);
        }
        else{
            timerDays.textContent = "00";
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }

   };

    updateClock();
    
    
};

export default timers;
