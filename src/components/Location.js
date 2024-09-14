import React, { Component } from 'react'
import './Location.css'

export class Location extends Component {
  render() {
    const { name, region, country, lat, lon, tz_id, localtime } = this.props.country
    return (
      <React.Fragment>
        <h1 className='location-header'>About Location</h1>
        <div className='about'>
          <h2><span className='names'>City:</span> {name}</h2>
          <h2><span className='names'>Region:</span> {region}</h2>
          <h2><span className='names'>Country:</span> {country}</h2>
          <h2><span className='names'>Local Time:</span> {localtime}</h2>
          <h2><span className='names'>latitude:</span> {lat}</h2>
          <h2><span className='names'>longitude:</span> {lon}</h2>
          <h2><span className='names'>Time Zone:</span> {tz_id}</h2>
        </div>
      </React.Fragment>
    )
  }
}    

export default Location
