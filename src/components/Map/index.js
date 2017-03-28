import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import {
  DEFAULT_ZOOM,
  DEFAULT_CENTER,
  URL_KEYS,
  MAP_OPTIONS,
} from './constants';

const onClick = ({x, y, lat, lng, event}) => {
  console.log(x, y, lat, lng, event)
}

const Marker = ({ text }) => (
  <i className="material-icons" style={{ color: 'blue' }}>brightness_1</i>
);

const getCoordsFromPosition = (position) => ({
  lat: position.coords.latitude,
  lng: position.coords.longitude,
})

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapBounds: undefined,
    };
  }

  onBoundsChange = ({ center, zoom, bounds, marginBounds }) => {
    console.log(center, zoom)
    this.setState({
      mapBounds: bounds,
    })
  }

  render() {
    const myPosition = this.props.currentPosition ? getCoordsFromPosition(this.props.currentPosition) : undefined;
    console.log(this.props)
    return (
      <GoogleMapReact
        defaultCenter={DEFAULT_CENTER}
        center={myPosition}
        defaultZoom={DEFAULT_ZOOM}
        options={MAP_OPTIONS}
        bootstrapURLKeys={URL_KEYS}
        onChange={this.onBoundsChange}
        onClick={onClick}
        resetBoundsOnResize
      >
        {myPosition && <Marker {...myPosition} text="Im here"/>}
      </GoogleMapReact>
    );
  }
}

export default App;
