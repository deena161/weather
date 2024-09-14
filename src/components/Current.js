import React, { Component } from 'react'
import './Current.css'

export class Current extends Component {
  render() {
    const { temp_c, temp_f, wind_mph, wind_kph, wind_degree, wind_dir, humidity, cloud, windchill_c, windchill_f, vis_km, vis_miles, condition } = this.props.now;
    const { text, icon } = condition
    return (
      <React.Fragment>
        <h1 className='current-header'>Current Weather</h1>
        <div className='condition'>
          <h2>{text}</h2>
          <img src={`${icon}`} />
        </div> 
   
        <div className='condition-details'>
          <div className='temp'>
            <h2>Temperature</h2>
            <h1>{temp_c} C</h1>
            <h1>{temp_f} F</h1>
          </div>
          <div className='wind-speed'>
            <h2>Wind Speed</h2>
            <h1>{wind_mph} mph</h1>
            <h1>{wind_kph} kph</h1>
          </div>
          <div className='wind-chill'>
            <h2>WindChill</h2>
            <h1>{windchill_c} C</h1>
            <h1>{windchill_f} F</h1>
          </div>
          <div className='visibility'>
            <h2>Visibility</h2>
            <h1>{vis_km} Km</h1>
            <h1>{vis_miles} Miles</h1>
          </div>
          <div className='wind-direction'>
            <h2>Wind Dir</h2>
            <h1>{wind_dir}</h1>
          </div>
          <div className='wind-degree'>
            <h2>Wind Deg</h2>
            <h1>{wind_degree}</h1>
          </div>
          <div className='cloud'>
            <h2>Cloud</h2>
            <h1>{cloud}</h1>
          </div>
          <div className='humidity'>
            <h2>Humidity</h2>
            <h1>{humidity}</h1>
          </div>


        </div>

      </React.Fragment>
    )
  }
}

export default Current
