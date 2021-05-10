import React, { useEffect, useRef, useState } from 'react';
import {makeStyles} from "@material-ui/core/styles"
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const useStyles = makeStyles(theme => ({
  map: {
    position: "relative",
    width: "100%",
    height: "350px",
    "&:focus, & *:focus": {
      outline: "none"
    }
  },
}))

const MapboxGLMap = (props) => {
  const { address, ...rest } = props;
  const classes = useStyles()
  const mapContainer = useRef(null);
  const styleUrl = 'mapbox://styles/lrewater/cjzkfacup5tc21cpn3ehr6f8e';

  useEffect(() => {
    const query = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?types=address&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

    async function fetchLatLng() {
      const res = await fetch(url);
      const json = await res.json();
      const results = json;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: styleUrl,
        center: {lng: results.features[0].center[0], lat: results.features[0].center[1]},
        zoom: 7.75,
        scrollZoom: false,
      });

      map.addControl(new mapboxgl.NavigationControl());

      const marker = new mapboxgl.Marker()
        .setLngLat([results.features[0].center[0], results.features[0].center[1]])
        .addTo(map);
    }

    fetchLatLng();

  }, []) // eslint-disable-line

  return (
    <div ref={mapContainer} className={classes.map}/>
  )
}

export default MapboxGLMap
