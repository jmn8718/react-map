import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GoogleMapReact from 'google-map-react';

const MapBootstrapURLKeys = {
  key: 'AIzaSyBB22U3ESfZDw5R-Qpy356RcObr2svIEgY',
  language: 'en',
}

const MapOptions = {
  defaultZoom: 11,
  mapTypeControl: true,
}

const onBoundsChange = ({ center, zoom, bounds, marginBounds }) => {
  console.log(center, zoom)
}

const onClick = ({x, y, lat, lng, event}) => {
  console.log(x, y, lat, lng, event)
}

const Marker = ({ text }) => (
  <div>
    {text}
  </div>
);

class App extends Component {
  static defaultProps = {
    center: {
      lat: 50.81,
      lng: 4.41,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="App">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={MapOptions}
          bootstrapURLKeys={MapBootstrapURLKeys}
          onChange={onBoundsChange}
          onClick={onClick}
          resetBoundsOnResize
        >
        <Marker {...this.props.center} text="RTVE"/>
      </GoogleMapReact>
      </div>
    );
  }
}

export default App;
