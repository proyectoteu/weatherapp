import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'
import { CLOUDY } from './../../constants/weathers';
import './styles.css';

const location = "Buenos Aires,ar";
const api_key = "303d174e39c029957f66f07aa77bc1ab";
const api_weather = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid='+api_key;
const data1={
    temperature: 20,
    weatherState: CLOUDY,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1,
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            debugger;
            console.log(data);
            return data.json();
        }).then( weather_data => {
            console.log(weather_data);
        });
        /*
        this.setState({
            data: data2,
        });*/
        console.log("actualizado");
    }

    render = () => (
        <div className='weatherLocationCont'>
            <Location city={this.state.city}/>
            <WeatherData data={this.state.data}/>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
    );   
}


export default WeatherLocation;