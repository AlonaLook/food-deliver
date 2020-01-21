import React, { useCallback, memo } from 'react';
import GoogleMapReact from 'google-map-react';

// Constants
import { GOOGLE_MAP_KEY } from '../../config';

const bootstrapURLKeys = { key: GOOGLE_MAP_KEY };


const Map = memo(({ zoom, center }) => {

  const renderMarker = useCallback(({ map, maps }) => {
    new maps.Marker({
      map,
      position: center,
      title: 'FoodDelivery'
    });
  }, [center]);

  return(
    <GoogleMapReact
      bootstrapURLKeys={bootstrapURLKeys}
      defaultZoom={zoom}
      defaultCenter={center}
      onGoogleApiLoaded={renderMarker}
    />
  );
});

export default Map;