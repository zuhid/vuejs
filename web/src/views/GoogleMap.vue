<template>
  <div>
    <!-- <h3>Google Map with Marker</h3> -->
    <div id="map" style="height: 800px; width: 90%"></div>
    <!-- <gmp-map center="43.4142989,-124.2301242" zoom="4" map-id="DEMO_MAP_ID" style="height: 400px">
      <gmp-advanced-marker position="37.4220656,-122.0840897" title="Mountain View, CA"></gmp-advanced-marker>
      <gmp-advanced-marker position="47.648994,-122.3503845" title="Seattle, WA"></gmp-advanced-marker>
    </gmp-map> -->
  </div>
</template>

<script setup>

import { onMounted } from 'vue';

function addLatitude(lat, delta) {
  let newLat = lat + delta;
  while (newLat > 90 || newLat < -90) {
    if (newLat > 90) {
      newLat = 180 - newLat;
    } else if (newLat < -90) {
      newLat = -180 - newLat;
    }
  }
  return newLat;
}

function initMap() {
  const locations = [
    ['Mountain View, CA', 37.4220656, -122.0840897],
    ['Seattle, WA', 47.648994, -122.3503845],
    ['Denver, CO', 39.7392, -104.9903]
  ];
  const map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(40.4142989, -124.2301242),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  const markers = [
    new google.maps.Marker({ position: { lat: 37.4220656, lng: -122.0840897 }, title: "Mountain View, CA", map }),
    new google.maps.Marker({ position: { lat: 47.648994, lng: -122.3503845 }, title: "Seattle, WA", map }),
    new google.maps.Marker({ position: { lat: 39.7392, lng: -104.9903 }, title: "Denver, CO", map }),
    // new google.maps.Marker({ position: { lat: 35.6895, lng: 139.6917 }, title: "Tokyo, ", map }),
    // new google.maps.Marker({ position: { lat: 25.07725, lng: 55.30927 }, title: "Dubai, ", map }),
    // new google.maps.Marker({ position: { lat: 23.777176, lng: 90.399452 }, title: "Dhaka, ", map }),
  ];

  const bounds = new google.maps.LatLngBounds();
  markers.forEach(marker => bounds.extend(marker.getPosition()));
  var extraPadding = (bounds.Mh.lo - bounds.Mh.hi);
  bounds.extend(new google.maps.LatLng(bounds.ni.hi, bounds.Mh.lo + extraPadding));

  // place line 
  const seattle = { lat: 47.6062, lng: -122.3321 };
  const denver = { lat: 39.7392, lng: -104.9903 };
  const symbol1 = {
    icon: {
      path: "M -2,0 0,-2 2,0 0,2 z",
      strokeColor: "#F00",
      fillColor: "#F00",
      fillOpacity: 1,
    },
    offset: "0%",
  };
  const symbol2 = {
    icon: {
      path: "M2 32L62 2L42 32L62 62L2 32Z",
      fillOpacity: 1.0,
      fillColor: "blue",
      scale: 0.3,
      rotation: 90,
      anchor: new google.maps.Point(0, 33)
    },
    offset: "50%",
  };
  const symbol3 = {
    icon: {
      path: "M -2,-2 2,2 M 2,-2 -2,2",
      strokeColor: "#292",
      strokeWeight: 4,
    },
    offset: "100%",
  };
  const lineSymbol = {
    icon: {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      strokeColor: "blue",
      strokeWeight: 4,
    },
    offset: "100%",

  };
  const line = new google.maps.Polyline({
    map: map,
    geodesic: true,
    strokeColor: "#0000FF",
    strokeOpacity: 1,
    strokeWeight: 2,
    path: [seattle, denver],
    icons: [symbol1, symbol2, lineSymbol],
  });
  map.fitBounds(bounds);
}

onMounted(() => {
  if (typeof google !== 'undefined') {
    initMap();
  } else {
    window.initMap = initMap;
  }
});

</script>

<style scoped></style>
