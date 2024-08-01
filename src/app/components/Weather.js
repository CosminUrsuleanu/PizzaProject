import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
    const [temperature, setTemperature] = useState(null);
    const [discount, setDiscount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTemperature = async () => {
            try {
                const response = await axios.get(
                    "https://api.open-meteo.com/v1/forecast",
                    {
                        params: {
                            latitude: 52.52,
                            longitude: 13.41,
                            hourly: "temperature_2m",
                        },
                    }
                );

                // Extrage temperatura din răspuns
                const temp = Math.floor(response.data.hourly.temperature_2m[0]);
                setTemperature(temp);
                setLoading(false);

                if (temp > 15) {
                    const tempDiscount = Math.min(temp - 15, 15);
                    setDiscount(tempDiscount);
                } else {
                    setDiscount(0);
                }
            } catch (error) {
                console.error(
                    "Eroare la extragerea datelor de temperatură:",
                    error
                );
                setError("Nu s-au putut extrage datele de temperatură");
                setLoading(false);
            }
        };

        fetchTemperature();
    }, []);

    if (loading) {
        return <div>Se încarcă...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mx-auto">
            <h1>Temperatura Curentă</h1>
            <p>{temperature} °C</p>
            <h2>Reducere: {discount}%</h2>
        </div>
    );
};

export default Weather;
