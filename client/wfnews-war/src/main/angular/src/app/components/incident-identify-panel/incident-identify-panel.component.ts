import { ChangeDetectorRef, Component } from '@angular/core';
import { EvacOrderOption } from '../../conversion/models';
import { AGOLService } from '../../services/AGOL-service';
import { MapConfigService } from '../../services/map-config.service';
import { PublishedIncidentService } from '../../services/published-incident-service';

@Component({
    selector: 'incident-identify-panel',
    templateUrl: './incident-identify-panel.component.html',
    styleUrls: ['./incident-identify-panel.component.scss'],
})
export class IncidentIdentifyPanelComponent {
  public incident: any
  public evacOrders : EvacOrderOption[] = []
  public loaded = false

  public featureSet
  public identifiedFeatures = []
  public index = 0

  constructor (protected cdr: ChangeDetectorRef,
               private agolService: AGOLService,
               private mapConfigService: MapConfigService,
               private publishedIncidentService: PublishedIncidentService) { }

  // if we want the "next" functionality, pass in the identify set
  setIncident (incidentRef, identifyList, setIndex = true) {
    this.loaded = false;
    this.featureSet = identifyList;
    // clear the feature list
    this.identifiedFeatures = [];
    let count = 1 // index counter for the next/previous buttons
    for (const fid in identifyList) {
      if (Object.prototype.hasOwnProperty.call(identifyList, fid)) {
        const feature = identifyList[fid];
        if (['active-wildfires-fire-of-note', 'active-wildfires-out-of-control', 'active-wildfires-holding', 'active-wildfires-under-control', 'bcws-activefires-publicview-inactive'].includes(feature.layerId)) {
          this.identifiedFeatures.push(feature)
          // if we want to reset the index, we need to compare the input feature ID to the identified feature ID
          if (setIndex) {
            const sourceId = feature.properties.FIRE_NUMBER ? feature.properties.FIRE_NUMBER : feature.properties.incidentNumberLabel
            const compareId = incidentRef.FIRE_NUMBER ? incidentRef.FIRE_NUMBER : incidentRef.incidentNumberLabel
            if (sourceId && compareId && sourceId === compareId) {
              this.index = count;
            }
            count++;
          }
        }
      }
    }

    // get the fire number, either from a perimeter or active fire feature
    const id = incidentRef.FIRE_NUMBER ? incidentRef.FIRE_NUMBER : incidentRef.incidentNumberLabel

    this.publishedIncidentService.fetchPublishedIncident(id).toPromise().then(result => {
      this.incident = result;

      this.incident.geometry = {
        x: result.longitude,
        y: result.latitude
      };

      // date formatting
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

      this.incident.discoveryDate = new Date(this.incident.discoveryDate).toLocaleTimeString("en-US", options);
      this.incident.lastUpdatedTimestamp = new Date(this.incident.lastUpdatedTimestamp).toLocaleTimeString("en-US", options);
      this.incident.fireOfNoteInd = this.incident.fireOfNoteInd.trim().toUpperCase() === 'T' || this.incident.fireOfNoteInd.trim().toUpperCase() === '1';

      // set T/1 to True, otherwise False
      this.incident.heavyEquipmentResourcesInd = this.incident.heavyEquipmentResourcesInd.trim().toUpperCase() === 'T' || this.incident.heavyEquipmentResourcesInd.trim().toUpperCase() === '1';
      this.incident.incidentMgmtCrewRsrcInd = this.incident.incidentMgmtCrewRsrcInd.trim().toUpperCase() === 'T' || this.incident.incidentMgmtCrewRsrcInd.trim().toUpperCase() === '1';
      this.incident.structureProtectionRsrcInd = this.incident.structureProtectionRsrcInd.trim().toUpperCase() === 'T' || this.incident.structureProtectionRsrcInd.trim().toUpperCase() === '1';
      this.incident.wildfireAviationResourceInd = this.incident.wildfireAviationResourceInd.trim().toUpperCase() === 'T' || this.incident.wildfireAviationResourceInd.trim().toUpperCase() === '1';
      this.incident.wildfireCrewResourcesInd = this.incident.wildfireCrewResourcesInd.trim().toUpperCase() === 'T' || this.incident.wildfireCrewResourcesInd.trim().toUpperCase() === '1';

      // load evac orders nearby
      this.getEvacOrders();

      // then, set loaded to true and refresh the page
      this.loaded = true;
      
      this.cdr.detectChanges();
    }).catch(err => {
      console.error('Failed to load Fire Info', err);
      // Kill the panel?
      this.loaded = true;
    });
  }

  close () {
    (document.getElementsByClassName('incident-details').item(0) as HTMLElement).remove();
    (document.getElementsByClassName('identify-panel').item(0) as HTMLElement).style.display = 'none';
  }

  goToIncidentDetail () {
    // route to the details page
  }

  next () {
    this.index = this.index + 1;
    if (this.index > this.identifiedFeatures.length) {
      this.index = 1;
    }

    this.setIncident(this.identifiedFeatures[this.index - 1].properties, this.featureSet, false)
  }

  previous () {
    this.index = this.index - 1;
    if (this.index <= 0) {
      this.index = this.identifiedFeatures.length;
    }

    this.setIncident(this.identifiedFeatures[this.index - 1].properties, this.featureSet, false)
  }

  getEvacOrders () {
    this.agolService.getEvacOrders(this.incident.geometry, { returnCentroid: true, returnGeometry: false}).subscribe(response => {
      if (response.features) {
        for (const element of response.features) {
          this.evacOrders.push({
            eventName: element.attributes.EVENT_NAME,
            eventType: element.attributes.EVENT_TYPE,
            orderAlertStatus: element.attributes.ORDER_ALERT_STATUS,
            issuingAgency: element.attributes.ISSUING_AGENCY,
            preOcCode: element.attributes.PREOC_CODE,
            emrgOAAsysID: element.attributes.EMRG_OAA_SYSID,
            centroid: element.centroid
          })
        }
      }
    })
  }
}