import React, { Component } from 'react'
import './Forecast.css'
import Hour from './Hour';

export class Forecast extends Component {
    render() {
        const { sunrise, sunset, moonrise, moonset, moon_phase } = this.props.fc.astro;
        const hour = this.props.fc.hour;
        console.log(hour)
        return ( 
            <React.Fragment>
                <h1 className='forcast-header'>Forecasting</h1>
                <h1 className='astro-header'>Astro</h1>
                <div className='astro'>
                    <h2><span className='astro-names'>SunRise: </span>{sunrise}</h2>
                    <h2><span className='astro-names'>SunSet: </span>{sunset}</h2>
                    <h2><span className='astro-names'>MoonRise: </span>{moonrise}</h2>
                    <h2><span className='astro-names'>MoonSet: </span>{moonset}</h2>
                    <h2><span className='astro-names'>MoonPhase: </span>{moon_phase}</h2>
                </div>
                <h1 className='hr'></h1>
                <h1 className='hour-header'>Hour</h1>
                {
                    hour.map(val=>{
                        return <Hour hour={val}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Forecast
