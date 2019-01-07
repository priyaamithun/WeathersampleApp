import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // add
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';

const API_KEY = "ae5e37db2d45a69f977d060ebc13045d";



class App extends  React.Component{

  state =  {            //state is an object lies inside the class 
                              //here we are reseting the values
    temperature : undefined,
  city : undefined,
  country: undefined,
  humidity : undefined,
  description : undefined,
  error : undefined
  }

getWeather = async(e) =>{ //e is referred as event handler in js
  e.preventDefault(); // it will prevent whole page refresh
const city = e.target.elements.city.value; // here we are targeting elements in form tag
const country = e.target.elements.country.value;

const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);

const data = await api_call.json(); //getting inputs from json
if(city && country){ //if the inputs are valid 
//console.log(data);

this.setState({
  temperature : data.main.temp,
city :data.name,
country :data.sys.country,
humidity : data.main.humidity,
description : data.weather[0].description,
error : ""
});
}
else{            //if the inputs are not valid
  this.setState({
    temperature : undefined,
  city :undefined,
  country :undefined,
  humidity : undefined,
  description : undefined,
  error : "Please enter a value."
  });
}


}



  render (){ //rendering inputs from different components and here passing props
    
      return (
        <div>
          <div className="wrapper">
            <div className="main">
            
                
                  <div className="title-container">
                    <Titles />
                  </div>
                  <div className="form-container">
                    <Form getWeather={this.getWeather} />
                    <div className ="weather-results">
                    <Weather 
                      temperature={this.state.temperature} 
                      humidity={this.state.humidity}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      error={this.state.error}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
      );
    }
  };
  
  export default App;