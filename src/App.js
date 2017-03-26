import React, { Component } from 'react';
import './App.css';
import '@material/toolbar/dist/mdc.toolbar.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import Map from './components/Map';
import NavigationBar from './components/NavigationBar';

const GEO_OPTIONS = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: undefined,
    };
  }

  watchID: ?number = null;

  componentDidMount() {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      console.log('ẃe have geo')
      navigator.geolocation.getCurrentPosition(this.updatePositionSuccess, this.updatePositionError, GEO_OPTIONS);
      this.watchID = navigator.geolocation.watchPosition(this.updatePositionSuccess, this.updatePositionError, GEO_OPTIONS);
    } else {
      /* geolocaiton IS NOT available */
      console.log('ẃe dont have geo')
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  updatePositionSuccess = (position) => {
    console.log('new pos', position)
    this.setState({
      currentPosition: position,
    })
  }

  updatePositionError = (error) => {
    this.setState({ error });
    console.log(error)
  }

  render() {
    return (
      <div className="mdc-typography" style={{ height: '100vh' }}>
        <NavigationBar title="React Map" />
        <div className="mdc-layout-grid" style={{ height: 'calc(100% - 64px)', top: 64, position: 'relative' }}>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-12-tablet">
            {this.state.currentPosition ?
              <div>
                LAT: {this.state.currentPosition.coords.latitude}<br />
                LON: {this.state.currentPosition.coords.longitude}<br />
                ACC: {this.state.currentPosition.coords.accuracy}<br />
              </div> :
              <p>No Position</p>
            }
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 mdc-layout-grid__cell--span-12-tablet">
            <Map
              currentPosition={this.state.currentPosition}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
