export interface weatherData {
    name: string;
    sys: { country: string }
    main: {
        temp: number;
        humidity: number
    }
    weather: { description: string, icon: string }[]
    wind: { 
        speed: number; 
    };

}