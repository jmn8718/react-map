import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@material/toolbar/dist/mdc.toolbar.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
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
      <div style={{ height: '100vh' }}>
        <header className="mdc-toolbar mdc-toolbar--fixed">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <span className="mdc-toolbar__title">Title</span>
          </section>
        </header>
        <div className="mdc-layout-grid" style={{ height: 'calc(100% - 64px)', top: 64, position: 'relative' }}>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-12-tablet">

          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 mdc-layout-grid__cell--span-12-tablet">
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
        </div>
      </div>
    );
  }
}

export default App;
