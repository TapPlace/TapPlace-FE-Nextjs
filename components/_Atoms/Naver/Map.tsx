import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import s from './Map.module.scss';

import useMap from '@/hooks/useMap';
import useLocation from '@/hooks/useLocation';
import { loadingBringMyLocationState } from '@/recoil/atoms/location';

const Map = () => {
  const { mapElement, mapRendering } = useMap();
  const { getCurrentLocation } = useLocation();
  const loadingBringMyLocation = useRecoilValue(loadingBringMyLocationState);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  useEffect(() => {
    loadingBringMyLocation && mapRendering();
  }, [loadingBringMyLocation, mapRendering]);

  return (
    <>
      <div ref={mapElement} className={s.map} />
    </>
  );
};

export default Map;
