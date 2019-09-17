import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

class App extends Component<{}, State> {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position: [number, number] = [this.state.lat, this.state.lng]
    return <Map center={position} zoom={this.state.zoom} style={{width:'100%',height:'100vh'}}>
      <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  }
}

export default App;