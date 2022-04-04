import {useState} from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <Map
      mapStyle='mapbox://styles/gustavonalini/cl1k4l0rp001014oahlcjimwy'
      REACT_APP_MAPBOX_ACCESS_TOKEN={process.env.mapbox_key}
      {...viewport}
    />
  );
}

export default Map;