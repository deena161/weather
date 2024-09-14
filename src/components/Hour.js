import React, { Component } from 'react'
import './Hour.css'

export class Hour extends Component {
    render() {
        const { time, temp_c, temp_f, condition, snow_cm, humidity, will_it_rain, chance_of_rain, will_it_snow, chance_of_snow } = this.props.hour;
        console.log(this.props.hour)
        return (
            <React.Fragment> 
                <div className='main-body'>
                    <h2 className='time'><span className='hour-times'>Time:</span> {time}</h2>
                    <div className='time-condition'>
                        <h2><span className='hour-times'>Condition: </span>{condition.text}</h2>
                        <img src={`${condition.icon}`} width="100px"/>
                    </div>
                    <div className='hours'>
                        <h2><span className='hour-times'>Temperature:</span> {temp_c} C, {temp_f} F</h2>
                        <h2><span className='hour-times'>Snow:</span> {snow_cm} Cm</h2>
                        <h2><span className='hour-times'>Humidity:</span> {humidity}</h2>
                        <h2><span className='hour-times'>Rain:</span> {will_it_rain}</h2>
                        <h2><span className='hour-times'>Chance of Rain:</span> {chance_of_rain}</h2>
                        <h2><span className='hour-times'>Will it Snow:</span> {will_it_snow}</h2>
                        <h2><span className='hour-times'>Chance of Snow:</span> {chance_of_snow}</h2>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Hour
