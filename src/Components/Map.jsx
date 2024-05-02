// COMPONENTS/MAP.JSX
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

export default function Map({ Bsv, Bsh, ARc, Th, theme }) {
  const mapContainer = useRef(null);
  mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbmNpc2NvYnVjaGluaSIsImEiOiJjbHZsNng5djUxdXVvMmtvb2NoZzcza3VnIn0.jTm58Ue65TyJ9ToHbiwMHg';
  const light = 'mapbox://styles/franciscobuchini/clvldwnu1017x01q1buz0fg6v';
  const dark = 'mapbox://styles/franciscobuchini/clvlavqq900fj01obdjam2o77';

  const style = theme === 'dark' ? dark : light;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      center: [-119.950676, 39.244233],
      zoom: 11,
      style: style,
    });

    return () => map.remove();
  }, [theme]); // Agrega theme como dependencia para que se actualice cuando cambie

  return (
    <section className='MapComponent' style={{
      gridRow: `span ${Bsv}`,
      gridColumn: `span ${Bsh}`,
      ...(ARc && { aspectRatio: `${Bsh}/${Bsv}`}),
    }}>
      <div ref={mapContainer} className='Map'/>
      <div className='Text'> <h2>{Th}</h2> </div>
    </section>
  );
}
