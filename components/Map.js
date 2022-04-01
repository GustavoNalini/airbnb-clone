import ReactMapGL from 'react-map-gl'
import React, { useEffect, useState } from "react";


function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height:'100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL 
      mapStyle='mapbox://styles/gustavonalini/cl1f5ktah000714odu27c3bxv'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      //onViewportChange={(nextViewport) => setViewport(nextViewport)}

    >

    </ReactMapGL>
  )
}

export default Map