const clock = document.getElementById('clock');

// update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    clock.innerHTML = formatTime(date);

    function formatTime(date){

        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hour >= 12 ? 'pm' : 'am';

        hour = formatZeros(hour);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);

        return `${hour}:${minutes}:${seconds} ${amOrPm}`;
    }

    function formatZeros(time){
        time = time.toString();
        return time.lenght < 2 ? '0' + time : time;
    }
}

