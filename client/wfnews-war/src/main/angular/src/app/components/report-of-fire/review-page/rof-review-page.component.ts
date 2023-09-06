import { Component, ChangeDetectionStrategy, AfterViewInit } from "@angular/core";
import { RoFPage } from "../rofPage";
import { ReportOfFire } from "../reportOfFireModel";
import ConfigJson from '../report-of-fire.config.json';
import * as L from 'leaflet'
import { ReportOfFirePage } from "@app/components/report-of-fire/report-of-fire.component";


@Component({
  selector: 'rof-review-page',
  templateUrl: './rof-review-page.component.html',
  styleUrls: ['./rof-review-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoFReviewPage extends RoFPage implements AfterViewInit{
  public reportOfFirePages: any;
  map: any;

  public constructor(
    private reportOfFirePage: ReportOfFirePage
  ) {
    super()
  }

  ngAfterViewInit(): void {
    this.loadMap()
  }

  initialize (data: any, index: number, reportOfFire: ReportOfFire) {
    super.initialize(data, index, reportOfFire);
    this.reportOfFirePages = ConfigJson.pages
    const pagesToRemove = [
      'first-page',
      'permissions-page',
      'callback-page',
      'compass-page',
      'distance-page',
      'infrastructure-page',
      'response-page',
      'review-page',
      'final-page'
    ];
    this.reportOfFirePages = this.reportOfFirePages.filter(page => !pagesToRemove.includes(page.id));
  }

  selectedAnswer(page:any) {
    switch(page.id){
      case 'contact-page' : 
        return this.reportOfFire.consentToCall ? 'Yes' : 'No';
      case 'location-page' :
        return this.reportOfFire.fireLocation
      case 'photo-page' :
        return this.photoNumber()
      case 'smoke-color-page' :
        return this.reportOfFire.smokeColor;
      case 'fire-size-page' :
        return this.reportOfFire.fireSize;
      case 'response-details-page' :
        return this.reportOfFire.signsOfResponse;
      case 'visible-flame-page' :
        return this.reportOfFire.visibleFlame;
      case 'fire-spread-page' :
        return this.reportOfFire.rateOfSpread;
      case 'what-is-burning-page' :
        return this.reportOfFire.burning;
      case 'infrastructure-details-page' :
        return this.reportOfFire.assetsAtRisk;
      case 'comments-page' :
        return this.reportOfFire.otherInfo;
      default :
        return null;
    }
  }

  selectedAnswerPart2(page: any) {
    switch(page.id) {
      case 'contact-page' :
        let phoneNumber = ('' + this.reportOfFire.phoneNumber).replace(/\D/g, '');
        let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/); 
        // reformate to phonenumber
        if (match) {
          return (this.reportOfFire.fullName) + '\n' + '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
    }
  }

  twoPartsQuestions(page:any) {
    if ((page.id === 'contact-page') && (this.reportOfFire.consentToCall && this.reportOfFire.fullName && this.reportOfFire.phoneNumber) ) {
      return true;
    }
    else {
      return false;
    }
  }

  photoNumber() {
    let photoNumber = 0;
    if (this.reportOfFire.image1) {
      photoNumber++;
    }
    if (this.reportOfFire.image2) {
      photoNumber++;
    }
    if (this.reportOfFire.image3) {
      photoNumber++;
    }
    if ( photoNumber === 0) {
      return 'Skipped'
    }
    else if ( photoNumber === 1) {
      return photoNumber + ' photo added'
    }
    else  {
      return photoNumber + ' photos added'
    }
  }

  loadMap() {
    if (this.map) {
      this.map.remove();
    }
    const location = this.reportOfFire.fireLocation;
    console.log(location)
    this.map = L.map('map', {
      attributionControl: false,
      zoomControl: false,
      dragging: false,
      doubleClickZoom: false,
      boxZoom: false,
      trackResize: false,
      scrollWheelZoom: false
    }).setView(location, 9)
    // configure map data
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      zoom: 5,
      subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(this.map);

    const fireLocationIcon = L.divIcon({
      html: '<i class="fireLocationIcon material-icons">location_searching</i>',
      iconSize: [48, 48],
      className: 'fireLocationIcon'
    })
    L.marker(location, {icon:fireLocationIcon}).addTo(this.map)

    L.marker( this.reportOfFire.currentLocation, {
      icon: L.divIcon( {
          className:  'rof-location',
          iconSize:   [ 20, 20 ],
          iconAnchor: [ 14, 14 ]
      } )
    }).addTo(this.map)
  }

  edit(pageId:string) {
    //todo: navigate to the step page
    console.log(pageId)
    this.reportOfFirePage.edit(pageId)
  }
}
