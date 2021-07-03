import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-vista-tarjeta',
  templateUrl: './vista-tarjeta.page.html',
  styleUrls: ['./vista-tarjeta.page.scss'],
})
export class VistaTarjetaPage implements OnInit {
  map = null;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -17.3797784393247, lng: -66.16282799999723};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker={
      position:{
        lat: -17.3797784393247,
        lng: -66.16282799999723
      },
      title:'punto uno'
    }
      this.addMarker(marker);     
    });
  }
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
   

}
