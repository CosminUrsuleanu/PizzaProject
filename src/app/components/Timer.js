import React, { useState, useEffect } from "react";

const Timer = () => {
    const initialTime = 90 * 60;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    const [showTimer, setShowTimer] = useState(false);

    const getTimeRemainingFromNow = () => {
        const now = new Date();
        const targetTime = new Date();
        targetTime.setHours(14, 0, 0, 0);

        if (now > targetTime) {
            const elapsedSeconds = Math.floor((now - targetTime) / 1000);
            const remainingSeconds = initialTime - elapsedSeconds;
            return remainingSeconds > 0 ? remainingSeconds : 0;
        }
        return initialTime;
    };

    useEffect(() => {
        const checkWeekendAndTime = () => {
            const now = new Date();
            const day = now.getDay();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            console.log("Ziua săptămânii: ", day);
            console.log("Ora curentă: ", hours);

            if (
                (day === 0 || day === 6) &&
                hours >= 17 &&
                getTimeRemainingFromNow() > 0
            ) {
                setShowTimer(true);
                setTimeRemaining(getTimeRemainingFromNow());
            } else {
                setShowTimer(false);
            }
        };

        checkWeekendAndTime();
        const interval = setInterval(checkWeekendAndTime, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let timerInterval;

        if (showTimer) {
            timerInterval = setInterval(() => {
                setTimeRemaining((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(timerInterval);
                        setShowTimer(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timerInterval);
    }, [showTimer]);

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, "0")}:${sec
            .toString()
            .padStart(2, "0")}`;
    };

    if (!showTimer) {
        return null;
    }

    return (
        <div className="block md:hidden lg:hidden fixed top-[100px] right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50">
            <h1 className="text-xl font-bold">Reducerea expira in:</h1>
            <p className="text-2xl">{formatTime(timeRemaining)}</p>
        </div>
    );
};

export default Timer;
