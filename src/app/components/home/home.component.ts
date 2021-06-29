import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DesktopAppService } from 'src/app/services/desktop-app.service';
import { filter, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableData: any = [];
  headerKey: any = [];
  jsonData: any = [];
  limitData = 50;
  isDataLoad = false;
  @ViewChild('tableScroll')
  tableScroll: ElementRef;

  /**
    Google map service
   */
  marker1 = { position: { lat: 38.9987208, lng: -77.2538699 } };
  marker2 = { position: { lat: 39.7, lng: -76.0 } };
  marker3 = { position: { lat: 37.9, lng: -76.8 } };

  markers = [this.marker1, this.marker2, this.marker3];
  @ViewChild(GoogleMap) map!: GoogleMap;

  constructor(private desktopService: DesktopAppService) { }

  ngOnInit(): void {
    this.getTableDataValues();
  }

  ngAfterViewInit() {
    const bounds = this.getBounds(this.markers);
    this.map.googleMap.fitBounds(bounds);
  }

  getTableDataValues(): void {
    this.desktopService.getJsonData()
      .subscribe((d: any) => {
        if (d) {
          this.tableData = d;
          Object.keys(this.tableData[0]).forEach(d => {
            this.headerKey.push(d);
          });
        }
      });
  }

  getBounds(markers) {
    let north;
    let south;
    let east;
    let west;

    for (const marker of markers) {
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates.
      north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
      south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
      east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
      west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
    };

    const bounds = { north, south, east, west };

    return bounds;
  }
}
