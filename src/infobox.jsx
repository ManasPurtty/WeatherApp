import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css";

export default function InfoBox({info}){
    const img_url="https://www.researchgate.net/profile/Zohair-Al-Ameen/publication/305728558/figure/fig5/AS:668714064162833@1536445265631/mages-a-and-b-are-examples-of-images-taken-in-a-dusty-weather.jpg";

return(
    <div className="InfoBox">
        <h1>WeatherInfo-{info.weather}</h1>
         <div className="cardcontainer">   
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary"  component={"span"}>
        <div>Temperature :{info.temp}&deg;</div>
        <div>Humidity :{info.humidity}</div>
        <div> Mintemp:{info.tempMin}</div>
        <div>MaxTemp :{info.tempMax}</div>
        <div>Feels Like :{info.feelslike}</div>
        <div>Weather :{info.weather}</div>
        </Typography>
      </CardContent>
      
    </Card>
    </div> 
    </div>
)
};