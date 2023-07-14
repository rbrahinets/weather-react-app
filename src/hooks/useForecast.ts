import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ForecastInterface} from '../interfaces/ForecastInterface';
import {LocationInterface} from '../interfaces/LocationInterface';

const BASE_URL: string = 'https://api.openweathermap.org';

const useForecast = () => {
    const [input, setInput] = useState<string>('');
    const [locations, setLocations] = useState<[]>([]);
    const [location, setLocation] = useState<LocationInterface | null>(null);
    const [forecast, setForecast] = useState<ForecastInterface | null>(null);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        setInput(event.target.value);

        if (value !== '') {
            getLocations(value).then();
        }
    };

    const getLocations = async (city: string) => {
        try {
            const response = await axios.get(
                `${BASE_URL}/geo/1.0/direct?q=${city.trim()}&limit=3&lang=en&appid=${
                    process.env.REACT_APP_API_KEY
                }`
            );
            const data = response.data;

            setLocations(data);
        } catch (error) {
            console.error({error});
        }
    };

    const onLocationSelect = (location: LocationInterface) => {
        setLocation(location);
    };

    const onSearch = (): void => {
        if (!location) {
            return;
        }

        getForecast(location).then();
    };

    const getForecast = async (location: LocationInterface) => {
        try {
            const response = await axios.get(
                `${BASE_URL}/data/2.5/forecast?q=${location.name}&appid=${
                    process.env.REACT_APP_API_KEY
                }`
            );
            const data = response.data;
            const forecastData = {
                ...data.city,
                list: data.list.slice(0, 16),
            };

            setForecast(forecastData);
        } catch (error) {
            console.error({error});
        }
    };

    useEffect(() => {
        if (location) {
            setInput(location.name);
            setLocations([]);
        }
    }, [location]);

    return {
        input,
        locations,
        forecast,
        onInputChange,
        onLocationSelect,
        onSearch
    }
}

export default useForecast;