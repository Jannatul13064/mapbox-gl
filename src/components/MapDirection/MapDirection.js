import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWt6ejA2NCIsImEiOiJja3h6NzRmOXkyeHFqMnFtdjM1d2p5MDl5In0.gTKgv5icPsLpIyy4qurNFA';

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.415480, 23.707310],
            zoom: 14
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );

    }, [])

    return (
        <div>
            <div id="map"></div>

        </div>
    );
};

export default MapDirection;