import React, { Component } from 'react'
import axios from 'axios'
import Location from './Location'
import Current from './Current'
import './Weather.css'
import { FaLocationDot } from "react-icons/fa6";
import { IconContext } from "react-icons";
import Forecast from './Forecast'
import Cities from './Cities'

export class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            locat: "",
            country: null,
            now: null,
            fc: null
        }
        this.weather = this.weather.bind(this)
    }

    weather() {
        var API = `https://api.weatherapi.com/v1/forecast.json?key=baa509501ba6440bb95131241241808&q=${this.state.locat}&days=1&aqi=no&alerts=no`;
        axios.get(API)
            .then((value) => { return value.data })
            .then((datas) => {
                console.log(datas.location)
                console.log(datas.current)
                console.log(datas.forecast)
                console.log("--------------------------------------")
                console.log(datas.forecast.forecastday[0])
                this.setState({ country: datas.location, now: datas.current, fc: datas.forecast.forecastday[0] })
            })
            .catch((() => alert("Please Enter a Valied City")))
    }

    render() {
        const { locat, country, now, fc } = this.state
        return (
            <React.Fragment>

                <div className='outer'>
                    <div className='maindiv'>

                        <div className='input'>
                            <IconContext.Provider value={{ color: "white", size: "33px" }}>
                                <FaLocationDot />
                            </IconContext.Provider>
                            <input type='text' spellCheck="false" placeholder='Find Location...' value={locat} onChange={(e) => this.setState({ locat: e.target.value })} onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    document.getElementById('button').click();
                                }
                            }} list='cities' />
                            
                                <Cities/>
                            <button onClick={this.weather} id='button'>Check</button>
                        </div>
  
                        <div className='current'>
                            {now && <Current now={now} />}
                        </div>

                        <div className='about'>
                            {country && <Location country={country} />}
                        </div>

                        <div className='day'>
                            {fc && <Forecast fc={fc} />}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Weather
