import { useEffect } from "react";
const PlaceMap = () => {

  useEffect(() => {
      const { naver } = window;
      
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595316, 127.1052133),
        zoom: 17,
      };
      const map = new naver.maps.Map('map', mapOptions);

      const address = "강남구 삼성로 524";

      naver.maps.Service.geocode({
        query: address
      }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          if (!address) {
            return alert('Geocode Error, Please check address');
          }
          return alert('Geocode Error, address:' + address);
        }
    
        if (response.v2.meta.totalCount === 0) {
          return alert('No result.');
        }

        var item = response.v2.addresses[0],
          point = new naver.maps.Point(item.x, item.y);

        const marker = new naver.maps.Marker({
          map,
          position: point,
        });
    
    
        map.setCenter(point);
        //infoWindow.open(map, point);
      });

    return () => {
    }
}, [])

  
  return (
    <div id="map" style={{ width: '100%', height: '235px' }} />
  )
}

export default PlaceMap