export const timer = (id, deadline) => {
    const addZero = num => {
        if (num <= 9) {
            return `0${num}`;
        } else {
            return num;
        }
    };

    const getTimeRemaining = endtime => {
        const total = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / 1000 / 60) % 60),
            hours = Math.floor((total / (1000 * 60 * 60)) % 24),
            days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total: total,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    };

    const setClock = (selector, endtime) => {
        const timerEl = document.querySelector(selector),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            if (t.total <= 0) {
                timerEl.textContent = `Ends in: 00:00:00`;
                clearInterval(timeInterval);
            } else {
                timerEl.textContent = `Ends in: ${addZero(t.days)}:${addZero(t.hours)}:${addZero(t.minutes)}:${addZero(t.seconds)}`;
            }
        }
    };

    setClock(id, deadline);
};
