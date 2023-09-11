import { Component, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from "@angular/core";
import { RoFPage } from "../rofPage";
import { ReportOfFire } from "../reportOfFireModel";
import { MatButtonToggle, MatButtonToggleChange } from "@angular/material/button-toggle";
import { ReportOfFirePage } from "@app/components/report-of-fire/report-of-fire.component";

@Component({
  selector: 'rof-complex-question-page',
  templateUrl: './rof-complex-question-page.component.html',
  styleUrls: ['./rof-complex-question-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoFComplexQuestionPage extends RoFPage {
  public allowIDontKnowButton: boolean;
  public allowMultiSelect: boolean;
  public disableNext: boolean = true;
  public buttons: Array<any>;
  public highlightedButton: HTMLElement;
  isEditMode: boolean = false;
  isPageDirty: boolean = false;
  public buttonStates: boolean[] = Array(10).fill(false);

  @ViewChild('notSureButton') notSureButton!: MatButtonToggle;


  public constructor(private reportOfFirePage: ReportOfFirePage,
    private cdr: ChangeDetectorRef) {
    super()
  }

  initialize (data: any, index: number, reportOfFire: ReportOfFire) {
    super.initialize(data, index, reportOfFire);
    this.allowIDontKnowButton = data.allowIDontKnowButton;
    this.allowMultiSelect = data.allowMultiSelect;
    this.buttons = data.buttons;
  }

  editMode() {
    this.isPageDirty = false;
    this.isEditMode = true;
    this.cdr.detectChanges()
  }

  onValChange (value: string, event: MatButtonToggleChange | PointerEvent, index:number) {
    this.isPageDirty = true;
    this.buttonStates.fill(false);
    this.buttonStates[index] = !this.buttonStates[index];

    // Handler to ensure single select buttons highlight on click
    // to match the toggle button appearance
    if ( event instanceof PointerEvent) {
      // middle of the button will return the span, edges will return the button itself
      // which is super annoying, so we need to check that we have an id set
      // const clickedButton = (event.target as HTMLElement).id !== '' ? event.target as HTMLElement : (event.target as HTMLElement).parentElement;

      const clickedElement = event.target as HTMLElement;
      const clickedButton = clickedElement.closest('button');


      // remove the highlight on the currently selected button
      if (clickedButton){
        if (this.highlightedButton) {
          this.highlightedButton.classList.remove("btn-highlight");
        }

        // highlight the new button
        clickedButton.classList.add("btn-highlight");
        // and store it for later events
        this.highlightedButton = clickedButton
      }
    }

    if (value && this.updateAttribute && this.updateAttribute !== '') {
      // this.highlightedButton.classList.remove("btn-highlight");
      if(this.notSureButton) {
        this.notSureButton.checked = false
      }
      if (Array.isArray(this.reportOfFire[this.updateAttribute]) && !this.reportOfFire[this.updateAttribute].includes(value)) {
        this.reportOfFire[this.updateAttribute].push(value)
      } else if (Array.isArray(this.reportOfFire[this.updateAttribute]) && this.reportOfFire[this.updateAttribute].includes(value)) {
        const index = this.reportOfFire[this.updateAttribute].indexOf(value);
        this.reportOfFire[this.updateAttribute].splice(index, 1)
      } else {
        this.reportOfFire[this.updateAttribute] = value;
      }
    } else {
      if (this.highlightedButton) {
        this.highlightedButton.classList.remove("btn-highlight");
      }
      this.reportOfFire[this.updateAttribute] = '';
    }

    this.disableNext = false;

    if (value === null) {
      this.reportOfFire[this.updateAttribute] = "I'm not sure"
    } 
  }
  
  backToReview() {
    this.reportOfFirePage.edit('review-page')
  }
}
