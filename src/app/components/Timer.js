import React, { useState, useEffect } from "react";

const Timer = () => {
    const initialTime = 33 * 60; // 58 minute în secunde

    const [timeRemaining, setTimeRemaining] = useState(0);
    const [showTimer, setShowTimer] = useState(false);

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const day = now.getDay();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            // Verifică dacă este duminică (0) sau sâmbătă (6) și ora este 17:30 sau mai târziu
            if (
                (day === 4 || day === 6) &&
                (hours > 15 || (hours === 15 && minutes >= 30))
            ) {
                // Calculează timpul rămas
                const targetDate = new Date();
                targetDate.setHours(15, 30, 0, 0); // Ora de început 17:30:00
                const endTime = new Date(
                    targetDate.getTime() + initialTime * 1000
                ); // Ora de final

                // Asigură-te că timpul rămas este pozitiv
                const remaining = Math.max(
                    Math.floor((endTime - now) / 1000),
                    0
                );
                if (remaining > 0) {
                    setTimeRemaining(remaining);
                    setShowTimer(true);
                } else {
                    setShowTimer(false);
                }
            } else {
                setShowTimer(false);
            }
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

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
        <div className="fixed top-[100px] right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50">
            <h1 className="text-xl font-bold">Reducerea expira in:</h1>
            <p className="text-2xl">{formatTime(timeRemaining)}</p>
        </div>
    );
};

export default Timer;
