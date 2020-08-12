import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className='google-map-container' />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 48.8454094, lng: 2.2824394 }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 48.8454094, lng: 2.2824394 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default MyFancyComponent;

// import {compose, withProps} from "recompose"
// import {GoogleMap, Marker, withGoogleMap, withScriptJs} from "react-google-maps"

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googlapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{height: `100%`}} />,
//     containerElement: <div style={{height: `400px`}} />,
//     mapElement: <div style={{ height: `600px`, width: `450px` }} />,
// }),
// withScriptJs,
// withGoogleMap
// )((props) =>
// <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{lat:48.8454094, lng:2.2824394}}
// >
// {props.isMarkerShown && <Marker position={{ lat:48.8454094, lng:2.2824394 }} />}
// </GoogleMap>
// )

// <MyMapComponent isMarkerShown/>

// class Map extends React.PureComponent {
//   render() {
//     const StartingMap = withGoogleMap((props) => (
//       <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: 48.8454094, lng: 2.2824394 }}
//       ></GoogleMap>
//     ));
//     return (
//       <StartingMap
//         containerElement={<div style={{ height: `600px`, width: `450px` }} />}
//         mapElement={<div style={{ height: `600px`, width: `450px` }} />}
//       />
//     );
//   }
// }

// export default Map;
