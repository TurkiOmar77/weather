export interface weatherData {
    name : string;
    sys : {country : string}
    main : {temp : number}
    weather : {description : string}[] // تاكد من اللست 
}