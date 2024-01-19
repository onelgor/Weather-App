/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }){
    // eslint-disable-next-line no-unused-vars
    const INIT_URL = "https://media.istockphoto.com/id/1340348680/photo/image-of-sunlight-breaking-through-clouds-over-cityscape-view-of-new-delhi-uttar-pradesh.jpg?s=612x612&w=0&k=20&c=EDWBFSI6N0da8XOF2HJw_xi-pinQFnaDz42xrTsIW4c=";

    let HOT_URL = "https://media.istockphoto.com/id/1150050227/photo/heat-wave-of-extreme-sun-and-sky-background-hot-weather-with-global-warming-concept.jpg?s=612x612&w=0&k=20&c=EjBSIEDX39FRrARa7xiZyJtoXdgl3mePScIEQq9iW1U=";
    let COLD_URL = "https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=612x612&w=0&k=20&c=LKQgMoqdgHP5PkelvEMdwXhCMG_M1XhGoFT27-Hjrk4=";
    let RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=";


    return (

        <div className="InfoBox">

            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={
                        info.humidity > 80 

                        ? RAIN_URL 
                        : info.temp > 15 
                        ? HOT_URL 
                        : COLD_URL
                    }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {

                            info.humidity > 80 
                            ? <ThunderstormIcon/>
                            : info.temp > 15 
                            ? <WbSunnyIcon/> 
                            : <AcUnitIcon/>

                        }
                        </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div> Humidity = {info.humidity}</div>
                        <div>Min Temp = {info.tempMin}&deg;C</div>
                        <div>Max Temp = {info.tempMax}&deg;C</div>
                        <p>The Weather can be described as <i>{info.weather}</i> and feels Like = {info.feelslike}&deg;C</p>
                    </Typography>
                    </CardContent>
                    
                </Card>
            </div>
                
        </div>
    )
    
}