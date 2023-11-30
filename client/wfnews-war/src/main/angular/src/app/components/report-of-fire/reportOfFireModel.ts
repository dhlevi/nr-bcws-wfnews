import { GalleryPhoto, Photo } from "@capacitor/camera";

/**
 * Model for the RoF object. This is matched against the model used in Notifications API,
 * Which we will be submitting to
 */
export class ReportOfFire {
  public consentToCall: string = 'No';
  public fullName: string = '';
  public phoneNumber: string = '';
  public estimatedDistance: number = 0;
  public fireLocation: Array<number> = [0, 0];
  public fireSize: string = '';
  public rateOfSpread: string = '';
  public visibleFlame: string = '';
  public burning: Array<string> = [];
  public smokeColor: Array<string> = [];
  public weather: Array<string> = [];
  public ifAssetsAtRisk: string = '';
  public assetsAtRisk: Array<string> = [];
  public ifSignsOfResponse: string = '';
  public signsOfResponse: Array<string> = [];
  public otherInfo: string = '';
  // image placeholder. Base64 strings or perhaps stored via capacitor before submit?
  public image1: Photo | GalleryPhoto;
  public image2: Photo | GalleryPhoto;
  public image3: Photo | GalleryPhoto;
  public currentLocation: Array<number> = [0, 0];
  public compassHeading: number = 0;
  public headingDetectionActive: boolean;
  public motionSensor: string;
  public deviceLocation: Array<number> = [0, 0];
}
