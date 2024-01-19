/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";



export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error , setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c7f6ef0ea4a0a723e47b52e76f55c9f7";
    

    let getWeatherInfo = async () => {

        // eslint-disable-next-line no-useless-catch
        try{

            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max, 
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;

        }
        catch(err){
            throw err;

        }



    };

    

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {

        try{

            evt.preventDefault();
            console.log(city);
            setCity("");
            setError(false);
            let newInfo= await getWeatherInfo();
            updateInfo(newInfo);


        }
        catch (err){

            setError(true);

        }
        
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city}
                onChange={handleChange}
                />
                <br /> <br />
                <Button variant="contained"  type="submit">Search</Button>
                {error && <p style={{color: "red"}}> <b>No Such Place exist!!</b></p>}

            </form>

        
        </div>
    );
}